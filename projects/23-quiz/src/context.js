import React, { useState, useEffect, useContext } from "react";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};
const API_ENDPOINT = "https://opentdb.com/api.php?";

const tempUrl =
  "https://opentdb.com/api.php?amount=3&category=21&difficulty=easy&type=multiple";

const AppContext = React.createContext();
// ======================Start React===========================
const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [url, setUrl] = useState(tempUrl);
  const [terms, setTerms] = useState(true);
  const [modal, setModal] = useState(false);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [inputTerms, setInputTerms] = useState({
    amount: 3,
    category: "sports",
    difficulty: "easy",
  });
  // ================= open/closing Functions====================
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
    setIndex(0);
    setInputTerms({
      amount: 3,
      category: "sports",
      difficulty: "easy",
    });
    setTerms(true);
    setCorrect(0);
    setUrl(tempUrl);
  };

  // ====================== Functions ===========================

  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setInputTerms({ ...inputTerms, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { amount, category, difficulty } = inputTerms;
    setUrl(
      `${API_ENDPOINT}amount=${amount}&category=${table[category]}&${difficulty}=easy&type=multiple`
    );
    setTerms(false);
  };

  const handleNext = () => {
    if (index === questions.length - 1) {
      setModal(true);
      return setIndex(questions.length - 1);
    }
    setIndex((prevIndex) => prevIndex + 1);
  };

  const checkAnswer = (e) => {
    const answer = e.target.value;
    const { correct_answer } = questions[index];
    if (answer === correct_answer) {
      setCorrect((prevCorrect) => prevCorrect + 1);
    }
    handleNext();
  };
  //=======================Fetch Data ===========================
  const fetchData = async (url) => {
    setLoading(true);
    try {
      const resp = await fetch(url);
      const data = await resp.json();
      const { response_code, results } = data;
      if (response_code === 0) {
        setQuestions(results);
      } else {
        console.log("no data");
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return (
    <AppContext.Provider
      value={{
        loading,
        questions,
        terms,
        inputTerms,
        handleChange,
        handleSubmit,
        modal,
        openModal,
        closeModal,
        index,
        handleNext,
        checkAnswer,
        correct,
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
