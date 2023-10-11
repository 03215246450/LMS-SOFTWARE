
import React, { useState } from 'react';
import "./QuizApp.css"
import { useNavigate } from 'react-router-dom';

function QuizApp() {
  const [quizName, setQuizName] = useState('');
  const [duration, setDuration] = useState('');
  const [secretKey, setSecretKey] = useState('');
  const [quizOpen, setQuizOpen] = useState('');
  const [description, setDescription] = useState('');
  const [isLocked, setIsLocked] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [currentOptions, setCurrentOptions] = useState(['', '', '', '']);
  const [displayedQuizName, setDisplayedQuizName] = useState('');

 
  const [isQuizNameDisabled, setIsQuizNameDisabled] = useState(false);
  const [isDurationDisabled, setIsDurationDisabled] = useState(false);
  const [isSecretKeyDisabled, setIsSecretKeyDisabled] = useState(false);
  const [isQuizOpenDisabled, setIsQuizOpenDisabled] = useState(false);
  const [isDescriptionDisabled, setIsDescriptionDisabled] = useState(false);

  const disableAll = () => {
    setIsLocked(true)
  }

  const addQuestion = () => {
    const newQuestion = {
      question: currentQuestion,
      options: currentOptions,
    };
    setQuestions([...questions, newQuestion]);
    setCurrentQuestion('');
    setCurrentOptions(['']);
  }

  const saveQuiz = () => {
 
    setDisplayedQuizName(quizName);
    setQuizName('');
    setDuration('');
    setSecretKey('');
    setQuizOpen('');
    setDescription('');
    setCurrentQuestion('');
    setCurrentOptions(['', '', '', '']);
    setIsQuizNameDisabled(false);
    setIsDurationDisabled(false);
    setIsSecretKeyDisabled(false);
    setIsQuizOpenDisabled(false);
    setIsDescriptionDisabled(false);
  }

  const navigate = useNavigate();


  let logout = () => {
    navigate("/Login")
  }

  
  return (
    <div className='quiz-app-container'>
      <div className="sidebar">
        <img src="https://i.insider.com/60638bd66183e1001981966a?width=1136&format=jpeg" alt="Profile" className="profile-image" />
        <button className='profile-button'>{displayedQuizName}</button>
        <button onClick={logout} className='logout-button'>Log out</button>
      </div>

      <div className="main-content">
        <h1 className='app-title'>Quiz App Admin</h1>
        <button onClick={addQuestion} className='action-button'>Add Question</button>
        <button onClick={saveQuiz} className='action-button'>Save Quiz</button>

        <div className="quiz-details">
          <input type="text" placeholder='Enter Quiz Name' className={`input-field ${isLocked || isQuizNameDisabled ? 'disabled' : ''}`} value={quizName} onChange={(e) => setQuizName(e.target.value)} disabled={isLocked || isQuizNameDisabled} />
          <input type="text" placeholder='30 sec duration' className={`input-field ${isLocked || isDurationDisabled ? 'disabled' : ''}`} value={duration} onChange={(e) => setDuration(e.target.value)} disabled={isLocked || isDurationDisabled} />
          <input type="text" placeholder='Enter Secret Key' className={`input-field ${isLocked || isSecretKeyDisabled ? 'disabled' : ''}`} value={secretKey} onChange={(e) => setSecretKey(e.target.value)} disabled={isLocked || isSecretKeyDisabled} />
          <input type="text" placeholder='Quiz Open' className={`input-field ${isLocked || isQuizOpenDisabled ? 'disabled' : ''}`} value={quizOpen} onChange={(e) => setQuizOpen(e.target.value)} disabled={isLocked || isQuizOpenDisabled} />
          <input type="text" placeholder='Description' className={`input-field description ${isLocked || isDescriptionDisabled ? 'disabled' : ''}`} value={description} onChange={(e) => setDescription(e.target.value)} disabled={isLocked || isDescriptionDisabled} />
          <button onClick={disableAll} className='action-button lock-button'>Lock Quiz</button>
        </div>

        <div className="question-section">
          <input
            type="text"
            placeholder='Questions'
            className='input-field question-input'
            value={currentQuestion}
            onChange={(e) => setCurrentQuestion(e.target.value)}
          />
          {currentOptions.map((option, index) => (
            <input
              key={index}
              type="text"
              placeholder={`Option ${index + 1}`}
              value={option}
              onChange={(e) => {
                const updatedOptions = [...currentOptions];
                updatedOptions[index] = e.target.value;
                setCurrentOptions(updatedOptions);
              }}
              className='input-field option-input'
            />
          ))}
        </div>

        <ul className="question-list">
          {questions.map((question, questionIndex) => (
            <li key={questionIndex} className='question-list-item'>
              {question.question}
              <ul>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>{option}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default QuizApp;