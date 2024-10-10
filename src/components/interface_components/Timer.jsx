import React, { useState, useEffect } from "react";

function Timer({ setTimeUp }) {
  const defaultTime = 30*60; // 30 minutes (in seconds)
  
  // Load the time from localStorage or initialize to defaultTime
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedTime = localStorage.getItem("timeLeft");
    return savedTime ? JSON.parse(savedTime) : defaultTime;
  });

  // Function to format time in mm:ss
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  // Use effect to update time every second
  useEffect(() => {
    if (timeLeft <= 0) {
      setTimeUp(true); // If time is up, notify the parent component
      return;
    }

    // Update localStorage every second
    const interval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTime = prevTimeLeft - 1;
        localStorage.setItem("timeLeft", JSON.stringify(newTime)); // Save new time to localStorage
        return newTime;
      });
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [timeLeft, setTimeUp]);

  useEffect(() => {
    // When test is submitted or time is up, clear the timer from localStorage
    if (timeLeft <= 0) {
      localStorage.removeItem("timeLeft");
    }
  }, [timeLeft]);

  return <div className="timer">Time Left: {formatTime(timeLeft)}</div>;
}

export default Timer;
