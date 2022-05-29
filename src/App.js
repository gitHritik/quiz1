import { useState } from "react";
import "./App.css";

const questions = [
  {
    questionText:
      "Which of the following acts as the input of a class-based component?",
    answerOptions: [
      { answerText: "Props", isCorrect: true },
      { answerText: "Class", isCorrect: false },
      { answerText: "Factory", isCorrect: false },
      { answerText: "None of the mentioned", isCorrect: false },
    ],
  },
  {
    questionText: "React.js is written in which of the following language?",
    answerOptions: [
      { answerText: "C", isCorrect: false },
      { answerText: " C++", isCorrect: false },
      { answerText: "JavaScript", isCorrect: true },
      { answerText: "Java", isCorrect: false },
    ],
  },
  {
    questionText:
      "In which of the following directory React Components are saved?",
    answerOptions: [
      { answerText: "Inside components/js/", isCorrect: false },
      { answerText: " Inside js/components/", isCorrect: true },
      { answerText: "Inside vendor/js/components/", isCorrect: false },
      { answerText: "Inside vendor/components/", isCorrect: false },
    ],
  },
  {
    questionText: "Which of the following is method is not a part of ReactDOM?",
    answerOptions: [
      { answerText: " ReactDOM.destroy()", isCorrect: true },
      { answerText: "ReactDOM.hydrate()", isCorrect: false },
      { answerText: "ReactDOM.createPortal()", isCorrect: false },
      { answerText: "All of the mentioned", isCorrect: false },
    ],
  },
];

function App() {
  // const totalquestions = questions.length;
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctans, setCorrectans] = useState(0);
  const [wrongans, setWrongAns] = useState(0);
  const [countcorrect, setCountcorrect] = useState(0);
  const [wrongcountcorrect, setWrongCountcorrect] = useState(0);

  const [points, setPoints] = useState(0);

  function handleAnswer(isCorrect) {
    if (isCorrect) {
      setScore(score + 1);
      setPoints(points + 5);
      const percentage = 100 / questions.length;
      setCorrectans(correctans + percentage);
      setCountcorrect(countcorrect + 1);
    } else {
      setPoints(points - 5);
      const percentage = 100 / questions.length;
      setWrongAns(wrongans + percentage);
      setWrongCountcorrect(wrongcountcorrect + 1);
    }
    console.log(correctans);
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  }

  return (
    <div className="app">
      {showScore ? (
        <div className="score-section">
          Your Scored {score} out of {questions.length}
          <br />
          Your total Points are {points} out of {questions.length * 5}
        </div>
      ) : (
        <>
          <div className="progress__header">
            <div className="progress__bar">
              <div
                className="progress__totalBar"
                style={{ width: `${correctans}%` }}
              ></div>
              <span className="progress__answers">
                {countcorrect}/{questions.length}
              </span>
            </div>

            <div className="progress__points">
              <div className="progress__totalpoints">{points}</div>
            </div>

            <div className="progress__bar">
              <div
                className="progress__wronganstotalBar"
                style={{ width: `${wrongans}%` }}
              ></div>
              <span className="progress__wronganswers">
                {wrongcountcorrect}/{questions.length}
              </span>
            </div>
          </div>

          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className="question-text">
              {questions[currentQuestion].questionText}
            </div>
          </div>

          <div className="answer-section">
            {questions[currentQuestion].answerOptions.map(
              (answerOption, index) => (
                <button
                  onClick={() => handleAnswer(answerOption.isCorrect)}
                  key={index}
                >
                  {answerOption.answerText}
                </button>
              )
            )}
            <div className="note">
              Correct ans leads +5 points and Wrong ans leads -5 points
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
