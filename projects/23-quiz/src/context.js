import React, { useState, useEffect, useContext } from "react";

const API_ENDPOINT = "https://opentdb.com/api.php?";
const tempUrl =
  "https://opentdb.com/api.php?amount=3&category=23&difficulty=easy&type=multiple";
const table = {
  sports: 21,
  history: 23,
  politics: 24,
};
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const [modal, setModal] = useState(false);
  const [waiting, setWaiting] = useState(true);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(tempUrl);
  const [index, setIndex] = useState(0);
  const [setup, setSetup] = useState({
    amount: 3,
    category: "history",
    difficulty: "easy",
  });

  const settingInput = (setup) => {
    const amount = parseInt(setup.amount);
    const { category, difficulty } = setup;
    setUrl(
      `https://opentdb.com/api.php?amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`
    );
  };
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      if (data.response_code === 0) {
        setQuestions(data.results);
      } else {
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };
  const handleSubmit = () => {
    setWaiting(false);
  };
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setSetup({ ...setup, [name]: value });
    settingInput(setup);
  };

  const nextQuestion = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };
  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <AppContext.Provider
      value={{
        modal,
        openModal,
        closeModal,
        loading,
        waiting,
        setup,
        handleChange,
        handleSubmit,
        questions,
        index,
        nextQuestion,
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
