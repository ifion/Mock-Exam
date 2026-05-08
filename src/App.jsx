// App.jsx — Root component with page routing
import { useState, useEffect } from 'react'
import HomePage    from './pages/HomePage.jsx'
import GradeSelect from './pages/GradeSelect.jsx'
import ModeSelect  from './pages/ModeSelect.jsx'
import QuizPage    from './pages/QuizPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import { getNextSessionIds, getQuestionsForIds, computeScore } from './utils/quizLogic.js'
import {
  addSessionToHistory,
  clearCurrentSession,
  getCurrentSession,
  saveCurrentSession,
} from './utils/storage.js'

// Pages: 'home' | 'grade' | 'mode' | 'quiz' | 'results'
export default function App() {
  const [page, setPage]                   = useState('home')
  const [gradeLevelId, setGradeLevelId]   = useState(null)  // selected grade level
  const [mode, setMode]                   = useState(null)   // 'immediate' | 'end'
  const [sessionQuestions, setSessionQuestions] = useState([])
  const [finalAnswers, setFinalAnswers]   = useState(null)
  const [score, setScore]                 = useState(null)

  // Check for an in-progress session on mount
  useEffect(() => {
    const saved = getCurrentSession()
    if (saved && saved.questions && saved.questions.length > 0) {
      // Restoration left to future work; clear stale session for now
    }
  }, [])

  // ── Navigation handlers ────────────────────────────────────────────────────

  function handleStartTest() {
    setPage('grade')
  }

  function handleGradeSelect(selectedGrade) {
    setGradeLevelId(selectedGrade)
    setPage('mode')
  }

  function handleModeSelect(selectedMode) {
    const ids = getNextSessionIds(gradeLevelId)
    const qs  = getQuestionsForIds(ids)
    setMode(selectedMode)
    setSessionQuestions(qs)
    saveCurrentSession({ questions: qs, mode: selectedMode, gradeLevelId, currentIdx: 0, userAnswers: {} })
    setPage('quiz')
  }

  function handleQuizFinish(userAnswers) {
    const computed = computeScore(userAnswers)
    setFinalAnswers(userAnswers)
    setScore(computed)

    addSessionToHistory({
      date: new Date().toISOString(),
      mode,
      gradeLevelId,
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
    // Return to grade selection so the user can change category if needed
    setPage('grade')
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

      {page === 'grade' && (
        <GradeSelect
          onSelect={handleGradeSelect}
          onBack={() => setPage('home')}
        />
      )}

      {page === 'mode' && (
        <ModeSelect
          onSelect={handleModeSelect}
          onBack={() => setPage('grade')}
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