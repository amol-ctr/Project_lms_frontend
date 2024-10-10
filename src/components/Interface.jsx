import React, { useState, useEffect } from "react";
import Question from "./interface_components/Question";
import QuestionNav from "./interface_components/QuestionNav";
import Timer from "./interface_components/Timer";
import TestSummary from "./interface_components/TestSummary";
import { questions } from "./data/questions";
import './Interface.css';
import { useNavigate } from "react-router-dom"; // Assuming react-router-dom is used for routing

function Interface() {
  const navigate = useNavigate();

  // Load state from localStorage or initialize with default values
  const initialAnswers = JSON.parse(localStorage.getItem("answers")) || Array(questions.length).fill(null);
  const initialCurrentQuestionIndex = JSON.parse(localStorage.getItem("currentQuestionIndex")) || 0;
  const initialMarkedForReview = JSON.parse(localStorage.getItem("markedForReview")) || Array(questions.length).fill(false);
  const initialVisitedQuestions = JSON.parse(localStorage.getItem("visitedQuestions")) || Array(questions.length).fill(false);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(initialCurrentQuestionIndex);
  const [answers, setAnswers] = useState(initialAnswers);
  const [testComplete, setTestComplete] = useState(false);
  const [timeUp, setTimeUp] = useState(false);
  const [markedForReview, setMarkedForReview] = useState(initialMarkedForReview);
  const [visitedQuestions, setVisitedQuestions] = useState(initialVisitedQuestions);

  // Check if token exists in localStorage
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    // If token is not present, redirect to login
    if (!token) {
      navigate("/login"); // Redirect user to login page if no token found
    } else {
      // Optionally, validate token with an API call here (if required)
      fetch('/api/validateToken', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      })
      .then(res => {
        if (!res.ok) {
          throw new Error("Invalid token");
        }
      })
      .catch(() => {
        // If token validation fails, redirect to login
        localStorage.removeItem("authToken");
        navigate("/login");
      });
    }
  }, [navigate]);

  // Save state to localStorage when any of these change
  useEffect(() => {
    localStorage.setItem("answers", JSON.stringify(answers));
    localStorage.setItem("currentQuestionIndex", JSON.stringify(currentQuestionIndex));
    localStorage.setItem("markedForReview", JSON.stringify(markedForReview));
    localStorage.setItem("visitedQuestions", JSON.stringify(visitedQuestions));
  }, [answers, currentQuestionIndex, markedForReview, visitedQuestions]);

  // Handle answer selection for each question
  const handleAnswerChange = (questionIndex, selectedOption) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = selectedOption;
    setAnswers(newAnswers);
  };

  // Move to the next question
  const handleNextQuestion = () => {
    const newVisitedQuestions = [...visitedQuestions];
    newVisitedQuestions[currentQuestionIndex] = true;
    setVisitedQuestions(newVisitedQuestions);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  // Move to the previous question
  const handlePrevQuestion = () => {
    const newVisitedQuestions = [...visitedQuestions];
    newVisitedQuestions[currentQuestionIndex] = true;
    setVisitedQuestions(newVisitedQuestions);

    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  // Handle when clicking directly on a question in the navigation panel
  const handleQuestionClick = (index) => {
    const newVisitedQuestions = [...visitedQuestions];
    newVisitedQuestions[index] = true;
    setVisitedQuestions(newVisitedQuestions);
    setCurrentQuestionIndex(index);
  };

  // Clear the answer for the current question
  const handleClearAnswer = () => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = null; // Reset the current question's answer
    setAnswers(newAnswers);
  };

  // Mark question for review
  const handleMarkForReview = () => {
    const newMarkedForReview = [...markedForReview];
    newMarkedForReview[currentQuestionIndex] = !newMarkedForReview[currentQuestionIndex];
    setMarkedForReview(newMarkedForReview);
  };

  // Submit the test manually
  const handleSubmitTest = () => {
    setTestComplete(true);
    localStorage.removeItem("timeLeft"); // Clear timer when the test is submitted
    localStorage.removeItem("answers"); // Optional: clear other states if needed
    localStorage.removeItem("currentQuestionIndex");
    localStorage.removeItem("markedForReview");
    localStorage.removeItem("visitedQuestions");
  };

  // Automatically submit the test when time is up
  if (timeUp && !testComplete) {
    handleSubmitTest();
  }

  return (
    <div className="app">
      {!testComplete && (
        <>
          <div className="test-header">
            <Timer setTimeUp={setTimeUp} />
          </div>
          <div className="test-container">
            <div className="left-section">
              <span>
              Q {currentQuestionIndex+1}.
              <Question
                question={questions[currentQuestionIndex]}
                currentAnswer={answers[currentQuestionIndex]}
                handleAnswerChange={handleAnswerChange}
              />
              </span>
              <div className="question-actions">
                <button onClick={handleNextQuestion} className="btn save-next">
                  Save & Next
                </button>
                <button onClick={handleClearAnswer} className="btn clear">
                  Clear
                </button>
                <button onClick={handlePrevQuestion} className="btn prev">
                  Previous
                </button>
                <button
                  onClick={handleMarkForReview}
                  className={`btn mark-review ${
                    markedForReview[currentQuestionIndex] ? "marked" : ""
                  }`}
                >
                  {markedForReview[currentQuestionIndex]
                    ? "Unmark for Review"
                    : "Save & Mark for Review"}
                </button>
                <button onClick={handleSubmitTest} className="btn submit_new">
                  Submit Test
                </button>
              </div>
            </div>

            <div className="right-section">
              <QuestionNav
                currentQuestionIndex={currentQuestionIndex}
                setCurrentQuestionIndex={setCurrentQuestionIndex}
                answers={answers}
                markedForReview={markedForReview}
                visitedQuestions={visitedQuestions}
              />
              <div className="status-legend">
                <div>
                  <span className="not-visited"></span> Not Visited
                </div>
                <div>
                  <span className="not-answered"></span> Not Answered
                </div>
                <div>
                  <span className="answered"></span> Answered
                </div>
                <div>
                  <span className="marked-review"></span> Marked for Review
                </div>
                <div>
                  <span className="answered-marked-review"></span> Answered & Marked for Review
                </div>
              </div>
            </div>
          </div>
        </>
      )}
      {testComplete && <TestSummary answers={answers} questions={questions} />}
    </div>
  );
}

export default Interface;
