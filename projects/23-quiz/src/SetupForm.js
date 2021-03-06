import React from "react";
import { useGlobalContext } from "./context";

const SetupForm = () => {
  const { inputTerms, handleChange, handleSubmit } = useGlobalContext();
  const { amount, category, difficulty } = inputTerms;

  return (
    <div className="setup">
      <h2>Setup Quiz</h2>
      <form className="form">
        <div className="form-control">
          <label htmlFor="number">Number Of Questions</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min="1"
            className="input number"
            value={amount}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="category">Select Category</label>
          <select
            name="category"
            id="category"
            className="category"
            value={category}
            onChange={handleChange}
          >
            <option value="sports">sports</option>
            <option value="history">history</option>
            <option value="politics">politics</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="difficulty">Select difficulty</label>
          <select
            name="difficulty"
            id="difficulty"
            className="difficulty"
            value={difficulty}
            onChange={handleChange}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </div>
      </form>
      <button
        type="submit"
        className="btn start-btn"
        onClick={(e) => handleSubmit(e)}
      >
        Start
      </button>
    </div>
  );
};

export default SetupForm;
