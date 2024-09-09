// src/Quiz.jsx
import { useState } from "react";
import "./Quiz.css";
import CategorySelection from "./CategorySelection";
import questions from "./questions";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [answerFeedback, setAnswerFeedback] = useState("");
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setAnswerFeedback("");
    setIsAnswerCorrect(null);
    const questionsByCategory = questions.filter(
      (q) => q.category === category
    );
    setFilteredQuestions(questionsByCategory);
  };

  const handleOptionClick = (option) => {
    const correctAnswer = filteredQuestions[currentQuestionIndex].answer;
    if (option === correctAnswer) {
      setScore(score + 1);
      setAnswerFeedback("Correct!");
      setIsAnswerCorrect(true);
    } else {
      setAnswerFeedback(`Incorrect! The correct answer is: ${correctAnswer}`);
      setIsAnswerCorrect(false);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestionIndex + 1;
    if (nextQuestion < filteredQuestions.length) {
      setCurrentQuestionIndex(nextQuestion);
      setAnswerFeedback("");
      setIsAnswerCorrect(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRedoQuiz = () => {
    setSelectedCategory("");
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setAnswerFeedback("");
    setFilteredQuestions([]);
    setIsAnswerCorrect(null);
  };

  return (
    <>
        {!selectedCategory ? (
          <CategorySelection
            onSelectCategory={handleCategorySelect}
          />
        ) : (
          <>
            {showScore ? (
              <div>
                <h2>
                  Your score: {score} out of {filteredQuestions.length}
                </h2>
                <button className="play-again" onClick={handleRedoQuiz}>
                  Play Again
                </button>
              </div>
            ) : (
              <div>
                <h2>{filteredQuestions[currentQuestionIndex].question}</h2>
                <div>
                  {filteredQuestions[currentQuestionIndex].options.map(
                    (option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </button>
                    )
                  )}
                </div>
                {answerFeedback && (
                  <h4 className={isAnswerCorrect === false ? "incorrect" : ""}>
                    {answerFeedback}
                  </h4>
                )}
                {answerFeedback && (
                  <button onClick={handleNextQuestion}>Next Question</button>
                )}
              </div>
            )}
          </>
        )}
    </>
  );
};

export default Quiz;
