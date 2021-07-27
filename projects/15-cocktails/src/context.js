import React, {
  useState,
  useContext,
  useReducer,
  useEffect,
  useRef,
  useCallback,
} from "react";
import { reducer } from "./reducer";
const AppContext = React.createContext();
const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

const initialState = {
  loading: false,
  data_cocktails: [],
  single_cocktail: {},
};
const AppProvider = ({ children }) => {
  const refInput = useRef(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [searchTerm, setSearchTerm] = useState("a");

  const fetchData = useCallback(async () => {
    dispatch({ type: "LOADING" });
    try {
      const resp = await fetch(`${url}${searchTerm}`);
      const data = await resp.json();
      const { drinks } = data;
      if (drinks) {
        dispatch({ type: "DISPLAY_DATA", payload: drinks });
      } else {
        dispatch({ type: "NULL_DATA" });
        refInput.current.value = "";
        refInput.current.focus();
      }
    } catch (error) {
      console.log(error);
    }
  }, [searchTerm]);

  useEffect(() => {
    fetchData();
  }, [searchTerm, fetchData]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        setSearchTerm,
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
