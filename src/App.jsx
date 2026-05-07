// App.jsx — Root component with page routing
import { useState, useEffect } from 'react'
import HomePage from './pages/HomePage.jsx'
import ModeSelect from './pages/ModeSelect.jsx'
import QuizPage from './pages/QuizPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import { getNextSessionIds, getQuestionsForIds, computeScore } from './utils/quizLogic.js'
import {
  addSessionToHistory,
  clearCurrentSession,
  getCurrentSession,
  saveCurrentSession,
} from './utils/storage.js'

// Pages: 'home' | 'mode' | 'quiz' | 'results'
export default function App() {
  const [page, setPage] = useState('home')
  const [mode, setMode] = useState(null)           // 'immediate' | 'end'
  const [sessionQuestions, setSessionQuestions] = useState([])
  const [finalAnswers, setFinalAnswers] = useState(null)
  const [score, setScore] = useState(null)

  // Check for an in-progress session on mount
  useEffect(() => {
    const saved = getCurrentSession()
    if (saved && saved.questions && saved.questions.length > 0) {
      // Offer to restore? For now just clear stale current session
      // (restoration is handled inside QuizPage via saveCurrentSession)
    }
  }, [])

  // ── Navigation handlers ────────────────────────────────────────────────────

  function handleStartTest() {
    setPage('mode')
  }

  function handleModeSelect(selectedMode) {
    const ids = getNextSessionIds()
    const qs = getQuestionsForIds(ids)
    setMode(selectedMode)
    setSessionQuestions(qs)
    saveCurrentSession({ questions: qs, mode: selectedMode, currentIdx: 0, userAnswers: {} })
    setPage('quiz')
  }

  function handleQuizFinish(userAnswers) {
    const computed = computeScore(userAnswers)
    setFinalAnswers(userAnswers)
    setScore(computed)

    // Persist to history
    addSessionToHistory({
      date: new Date().toISOString(),
      mode,
      score: computed,
      questionIds: sessionQuestions.map(q => q.id),
    })

    clearCurrentSession()
    setPage('results')
  }

  function handleQuit() {
    clearCurrentSession()
    setPage('home')
  }

  function handleRetake() {
    setPage('mode')
  }

  function handleHome() {
    setPage('home')
  }

  // ── Render ─────────────────────────────────────────────────────────────────

  return (
    <div className="app-root">
      {page === 'home' && (
        <HomePage onStart={handleStartTest} />
      )}

      {page === 'mode' && (
        <ModeSelect
          onSelect={handleModeSelect}
          onBack={() => setPage('home')}
        />
      )}

      {page === 'quiz' && sessionQuestions.length > 0 && (
        <QuizPage
          questions={sessionQuestions}
          mode={mode}
          onFinish={handleQuizFinish}
          onQuit={handleQuit}
        />
      )}

      {page === 'results' && score && (
        <ResultsPage
          questions={sessionQuestions}
          userAnswers={finalAnswers}
          mode={mode}
          score={score}
          onRetake={handleRetake}
          onHome={handleHome}
        />
      )}
    </div>
  )
}