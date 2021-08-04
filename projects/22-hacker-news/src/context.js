import React, { useEffect, useReducer, useContext, useRef } from "react";
import { reducer } from "./reducer";
import {
  SET_LOADING,
  NO_DATA,
  SET_DATA,
  TOGGLE_PAGE,
  REMOVE_ITEM,
  SET_QUERY,
} from "./actions";

const AppContext = React.createContext();
const API_ENDPOINT = "https://hn.algolia.com/api/v1/search?";

const initialState = {
  loading: false,
  noData: true,
  hits: [],
  query: "love",
  page: 0,
  nbPages: 0,
};
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const refInput = useRef(null);
  const fetchData = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      if (data.exhaustiveNbHits) {
        dispatch({ type: NO_DATA });
      } else {
        dispatch({
          type: SET_DATA,
          payload: { hits: data.hits, nbPages: data.nbPages },
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const togglePage = (toggle) => {
    dispatch({ type: TOGGLE_PAGE, payload: toggle });
  };

  const removeItem = (id) => {
    dispatch({ type: REMOVE_ITEM, payload: id });
  };

  const newQuery = (text) => {
    dispatch({ type: SET_QUERY, payload: text });
  };
  useEffect(() => {
    fetchData(`${API_ENDPOINT}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <AppContext.Provider
      value={{
        ...state,
        togglePage,
        removeItem,
        newQuery,
        refInput,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
