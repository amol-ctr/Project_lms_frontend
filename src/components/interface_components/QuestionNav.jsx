// QuestionNav.js (inside interface_components folder)
import React from "react";
import "./../Interface.css";

const QuestionNav = ({
  currentQuestionIndex,
  setCurrentQuestionIndex,
  answers,
  markedForReview,
  visitedQuestions
}) => {

  // Determine the class for each question button based on its state
  const getButtonClass = (index) => {
    if (answers[index] !== null && markedForReview[index]) {
      return "answered-marked-review"; // Answered & Marked for Review
    } else if (markedForReview[index]) {
      return "marked-review"; // Marked for Review
    } else if (answers[index] !== null) {
      return "answered"; // Answered
    } else if (visitedQuestions[index]) {
      return "not-answered"; // Visited but not answered
    } else {
      return "not-visited"; // Not visited
    }
  };

  return (
    <div className="question-nav">
      {answers.map((_, index) => (
        <button
          key={index}
          className={`question-btn ${getButtonClass(index)}`}
          onClick={() => setCurrentQuestionIndex(index)}
        >
          {index + 1}
        </button>
      ))}
    </div>
  );
};

export default QuestionNav;
