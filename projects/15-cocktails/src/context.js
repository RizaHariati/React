import React, {
  useRef,
  useContext,
  useReducer,
  useEffect,
  useCallback,
} from "react";
import { reducer } from "./reducer";

const initialState = {
  cocktails: [],
  loading: false,
  keyword: "a",
};
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const refInput = useRef(null);
  const fetchData = useCallback(async () => {
    dispatch({ type: "LOADING" });
    try {
      const resp = await fetch(`${url}+${state.keyword}`);
      const data = await resp.json();
      dispatch({ type: "FETCH_DATA", payload: data });
    } catch (error) {
      console.log(error);
    }
  }, [state.keyword]);

  useEffect(() => {
    fetchData();
  }, [state.keyword, fetchData]);

  const settingKeyword = (key) => {
    dispatch({ type: "SET_KEYWORD", payload: key });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        settingKeyword,
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
export { AppProvider, AppContext };
