import React, { useState } from "react";

const paragraphs = [
  {
    header: "Objective",
    text: "The objective of soccer is to score more goals than your opponent.",
    question: "What is the main objective of soccer?",
    answer: "score more goals",
  },
  {
    header: "Rules",
    text: "Players cannot use their hands except for the goalkeeper.",
    question: "Who can use their hands in soccer?",
    answer: "goalkeeper",
  },
  // Add more paragraphs as needed
];

function SoccerQuiz() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const expected = paragraphs[currentIndex].answer.toLowerCase();
    if (userAnswer.toLowerCase().includes(expected)) {
      setFeedback("Correct!");
      setUserAnswer("");
      setCurrentIndex(currentIndex + 1);
    } else {
      setFeedback("Try again!");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Quiz</h1>

      {currentIndex < paragraphs.length ? (
        <>
          <h2>{paragraphs[currentIndex].header}</h2>
          <p>{paragraphs[currentIndex].text}</p>

          <form onSubmit={handleSubmit}>
            <label>
              {paragraphs[currentIndex].question}
              <br />
              <input
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>

          <p>{feedback}</p>
        </>
      ) : (
        <h2>🎉 You completed the quiz!</h2>
      )}
    </div>
  );
}
