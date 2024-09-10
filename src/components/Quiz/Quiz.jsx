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

  return (<>
    {!selectedCategory ? (
      <CategorySelection onSelectCategory={handleCategorySelect} />
    ) : (
      <>
        {showScore ? (
          <div className="score-container">
            <h2>Your score: {score} out of {filteredQuestions.length}</h2>
            <button className="play-again" onClick={handleRedoQuiz}>
              Play Again
            </button>
          </div>
        ) : (
          <div className="quiz-container">
            <h2 className="question">
              {filteredQuestions[currentQuestionIndex].question}
            </h2>
            <div className="image-container">
              <img
                src="" 
                alt="Quiz illustration"
                className="quiz-image"
              />
            </div>
            <div className="options-container">
              {filteredQuestions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option)}
                  disabled={answerFeedback}
                  className="option-button"
                >
                  {option}
                </button>
              ))}
            </div>
            {answerFeedback && (
              <h6 className={isAnswerCorrect === false ? "incorrect" : "correct"}>
                {answerFeedback}
              </h6>
            )}
            {answerFeedback && (
              <button className="next-button" onClick={handleNextQuestion}>
                Next Question
              </button>
            )}
          </div>
        )}
      </>
    )}
  </>
  );
};

export default Quiz;
