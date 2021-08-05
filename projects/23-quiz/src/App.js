import React from "react";
import Modal from "./Modal";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import { useGlobalContext } from "./context";

const App = () => {
  const { modal, loading, waiting, questions, index, nextQuestion } =
    useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (waiting) {
    return <SetupForm />;
  }
  const nbPage = questions.length;
  const { question, correct_answer, incorrect_answers } = questions[index];
  let answers = [...incorrect_answers];
  const newIndex = Math.floor(Math.random() * 4);
  if (newIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[newIndex]);
    answers[newIndex] = correct_answer;
  }
  return (
    <div className="quiz">
      {modal && <Modal />}
      <div className="quiz-setup">
        <div className="correct-answer">Correct Answers: 0/{nbPage}</div>
        <div className="questions-container">
          <h4 style={{ textAlign: "center" }}>{question}</h4>
          <div className="answers-btn">
            {answers.map((answer, id) => {
              return (
                <button key={id} className="btn choice-btn">
                  {answer}
                </button>
              );
            })}
          </div>
        </div>
        <button className="next-btn btn" onClick={nextQuestion}>
          Next Question
        </button>
      </div>
    </div>
  );
};

export default App;
