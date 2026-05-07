// QuizPage.jsx
import { useState, useEffect, useCallback } from 'react'
import { getCorrectIndex, isCorrect, QUESTIONS_PER_SESSION } from '../utils/quizLogic.js'
import { saveCurrentSession } from '../utils/storage.js'

const OPTION_LABELS = ['A', 'B', 'C', 'D']

export default function QuizPage({ questions, mode, onFinish, onQuit }) {
  const [currentIdx, setCurrentIdx] = useState(0)
  const [userAnswers, setUserAnswers] = useState({}) // { [questionId]: chosenIndex | null }
  const [revealed, setRevealed] = useState(false)   // for immediate mode: show answer state
  const [animating, setAnimating] = useState(false)

  const question = questions[currentIdx]
  const totalQ = questions.length
  const progressPct = ((currentIdx + 1) / totalQ) * 100
  const chosenIndex = userAnswers[question?.id]
  const hasChosen = chosenIndex !== undefined
  const correctIndex = getCorrectIndex(question?.id)
  const isImmediate = mode === 'immediate'

  // Persist current session state in storage
  useEffect(() => {
    saveCurrentSession({ currentIdx, userAnswers, mode })
  }, [currentIdx, userAnswers, mode])

  const handleOptionClick = useCallback((optIndex) => {
    if (!question) return
    // In immediate mode, lock answer after selection
    if (isImmediate && revealed) return
    // In end mode, allow changing answer until moving forward
    if (!isImmediate && hasChosen && optIndex === chosenIndex) {
      // deselect toggle
      setUserAnswers(prev => {
        const copy = { ...prev }
        delete copy[question.id]
        return copy
      })
      return
    }

    setUserAnswers(prev => ({ ...prev, [question.id]: optIndex }))

    if (isImmediate) {
      setRevealed(true)
    }
  }, [question, isImmediate, revealed, hasChosen, chosenIndex])

  const handleNext = useCallback(() => {
    if (animating) return
    if (currentIdx + 1 >= totalQ) {
      // Finish quiz
      const finalAnswers = { ...userAnswers }
      onFinish(finalAnswers)
      return
    }
    setAnimating(true)
    setTimeout(() => {
      setCurrentIdx(i => i + 1)
      setRevealed(false)
      setAnimating(false)
    }, 220)
  }, [animating, currentIdx, totalQ, userAnswers, onFinish])

  const handlePrev = useCallback(() => {
    if (animating || currentIdx === 0) return
    setAnimating(true)
    setTimeout(() => {
      setCurrentIdx(i => i - 1)
      setRevealed(isImmediate && userAnswers[questions[currentIdx - 1]?.id] !== undefined)
      setAnimating(false)
    }, 220)
  }, [animating, currentIdx, isImmediate, userAnswers, questions])

  function getOptionState(optIndex) {
    if (!hasChosen) return 'idle'
    if (isImmediate && revealed) {
      if (optIndex === correctIndex) return 'correct'
      if (optIndex === chosenIndex && chosenIndex !== correctIndex) return 'wrong'
      return 'dim'
    }
    // End mode — just show selected
    if (optIndex === chosenIndex) return 'selected'
    return 'idle'
  }

  const canProceed = isImmediate
    ? (hasChosen && revealed)
    : true // in end mode, can always navigate (skip allowed)

  const answeredCount = Object.keys(userAnswers).length
  const isLastQuestion = currentIdx + 1 >= totalQ

  return (
    <div className="quiz-page">
      {/* Header */}
      <header className="quiz-header">
        <button className="quit-btn" onClick={() => {
          if (confirm('Quit this test? Your progress will be lost.')) onQuit()
        }}>
          ✕ Quit
        </button>

        <div className="quiz-progress-bar">
          <div className="quiz-progress-fill" style={{ width: `${progressPct}%` }} />
        </div>

        <div className="quiz-counter">{currentIdx + 1} / {totalQ}</div>
      </header>

      {/* Mode badge */}
      <div className="mode-badge-strip">
        <span className={`mode-badge ${isImmediate ? 'mode-badge--imm' : 'mode-badge--end'}`}>
          {isImmediate ? '⚡ Immediate Feedback' : '📋 End Results Mode'}
        </span>
        <span className="answered-badge">{answeredCount} answered</span>
      </div>

      {/* Question card */}
      <main className={`quiz-main ${animating ? 'fade-out' : 'fade-in'}`}>
        <div className="question-card">
          <div className="question-number">Question {currentIdx + 1}</div>
          <p className="question-text">{question?.text}</p>
        </div>

        {/* Options as toggles */}
        <div className="options-list">
          {question?.options.map((opt, idx) => {
            const state = getOptionState(idx)
            return (
              <button
                key={idx}
                className={`option-toggle option-toggle--${state}`}
                onClick={() => handleOptionClick(idx)}
                disabled={isImmediate && revealed}
              >
                <span className="option-label">{OPTION_LABELS[idx]}</span>
                <span className="option-text">{opt}</span>
                {state === 'correct' && <span className="option-icon">✓</span>}
                {state === 'wrong' && <span className="option-icon">✗</span>}
                {state === 'selected' && <span className="option-icon">●</span>}
              </button>
            )
          })}
        </div>

        {/* Immediate-mode explanation */}
        {isImmediate && revealed && (
          <div className={`feedback-banner ${isCorrect(question.id, chosenIndex) ? 'feedback--correct' : 'feedback--wrong'}`}>
            {isCorrect(question.id, chosenIndex)
              ? '✓ Correct! Well done.'
              : `✗ Wrong. The correct answer is ${OPTION_LABELS[correctIndex]}: ${question.options[correctIndex]}`}
          </div>
        )}
      </main>

      {/* Footer nav */}
      <footer className="quiz-footer">
        <button
          className="btn-ghost btn-nav"
          onClick={handlePrev}
          disabled={currentIdx === 0}
        >
          ← Prev
        </button>

        {isLastQuestion ? (
          <button
            className="btn-primary btn-finish"
            onClick={handleNext}
          >
            Finish Test →
          </button>
        ) : (
          <button
            className="btn-primary btn-nav-next"
            onClick={handleNext}
          >
            {isImmediate && !revealed && hasChosen
              ? 'Next →'
              : !isImmediate
              ? 'Next →'
              : revealed
              ? 'Next →'
              : 'Select an answer'}
          </button>
        )}
      </footer>
    </div>
  )
}