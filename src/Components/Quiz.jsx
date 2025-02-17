import React, { useState } from "react";
import { quiz } from "../assets/data/questions";
import "../Components/Style/quiz.css";
function Quiz() {
  //* We defined 3 states:
  /*
   * 1- activeQuestions, keep track of current question
   * 2- selectedAnswer, which answer user has selected
   * 3- result, to calculate total scores, correctAnswers, wrongAnswers.
   */
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [result, setResult] = useState({
    score: 0,
    correctAnswers: 0,
    wrongAnswers: 0,
  });
  const { questions } = quiz;

  const { question, choices, correctAnswer } = questions[activeQuestion];

  function onClickNextHandler() {
    setSelectedAnswerIndex(null);
    setResult((prev) =>
      selectedAnswer
        ? {
            ...prev,
            score: prev.score + 5,
            correctAnswers: prev.correctAnswers + 1,
          }
        : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
    );
    if (activeQuestion !== questions.length - 1) {
      setActiveQuestion((prev) => prev + 1);
    } else {
      setActiveQuestion(0);
      setShowResult(true);
    }
  }

  function onAnswerSelectedHanlder(answer, index) {
    setSelectedAnswerIndex(index);
    if (answer === correctAnswer) {
      setSelectedAnswer(true);
    } else {
      setSelectedAnswer(false);
    }
  }

  let addLeadingZero = (number) => (number > 9 ? number : `0${number}`);

  return (
    <>
      <div className="quiz-container">
        <div className="heading-gif">
          <span className="gif">
            <img src="./public/icons2.svg" alt="" />
          </span>
        </div>
        {!showResult ? (
          <div>
            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(questions.length)}
              </span>
            </div>
            <h2>{question}</h2>
            <ul>
              {choices.map((answer, index) => (
                <li
                  onClick={() => onAnswerSelectedHanlder(answer, index)}
                  key={answer}
                  className={
                    selectedAnswerIndex === index ? "selected-answer" : null
                  }
                >
                  {answer}
                </li>
              ))}
            </ul>
            <div className="flex-right">
              <button
                onClick={onClickNextHandler}
                disabled={selectedAnswerIndex === null}
              >
                {activeQuestion === questions.length - 1 ? "Finish" : "Next"}
              </button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Question: <span>{questions.length}</span>
            </p>
            <p>
              Total Score: <span> {result.score}</span>
            </p>
            <p>
              Correct Answers: <span>{result.correctAnswers} </span>
            </p>
            <p>
              Wrong Answers: <span>{result.wrongAnswers}</span>
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default Quiz;
