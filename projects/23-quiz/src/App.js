import React from "react";
import Modal from "./Modal";
import SetupForm from "./SetupForm";
import Loading from "./Loading";
import { useGlobalContext } from "./context";

const App = () => {
  const { loading, terms, questions, modal, index, handleNext, checkAnswer } =
    useGlobalContext();

  if (loading) {
    return <Loading />;
  }
  if (!loading && terms) {
    return <SetupForm />;
  }

  const { question, correct_answer, incorrect_answers } = questions[index];
  const length = questions.length;
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
        <div className="correct-answer">{`${index + 1}/${length}`}</div>
        <div className="questions-container">
          <h4 style={{ textAlign: "center" }}>{question}</h4>
          <div className="answers-btn">
            {answers.map((answer, id) => {
              return (
                <button
                  key={id}
                  className="btn choice-btn"
                  value={answer}
                  onClick={checkAnswer}
                >
                  {answer}
                </button>
              );
            })}
          </div>
        </div>
        <button className="next-btn btn" onClick={handleNext}>
          Next Question
        </button>
      </div>
    </div>
  );
};

export default App;
