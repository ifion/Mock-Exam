// quizLogic.js — Question pool rotation and session helpers
// Now supports grade-level-specific question pools per HOS Circular Ref CIR/HOS/'26/005
import { questions } from '../data/questions.js'
import { answers }   from '../data/answers.js'
import { getPool, savePool } from './storage.js'

export const QUESTIONS_PER_SESSION = 50

// ── Helper: generate [start..end] inclusive ──────────────────────────────────
function range(start, end) {
  const ids = []
  for (let i = start; i <= end; i++) ids.push(i)
  return ids
}

// ── Section ID ranges (must match questions.js) ──────────────────────────────
//  PSR   : 1   – 50   (Public Service Rules)
//  GEN   : 51  – 200  (General Knowledge / Common Law / Local Acts)
//  FR    : 201 – 350  (Financial Regulations — 150 questions)
//  ENG   : 351 – 400  (English Language)
//  MATH  : 401 – 450  (Mathematics)

const PSR_IDS   = range(1,   50)
const GEN_IDS   = range(51,  200)
const FR_IDS    = range(201, 350)
const ENG_IDS   = range(351, 400)
const MATH_IDS  = range(401, 450)

// ── Grade-level → allowed question IDs ──────────────────────────────────────
//
// Per HOS Circular Ref.No: CIR/HOS/'26/005, dated 21st January 2026:
//
//  GL 08+        → PSR + FR + Common Law + Local Act
//  GL 06/07      → PSR + FR
//  GL 04/05      → English + General Paper + PSR + FR
//  GL 02/03      → English + General Paper + PSR + FR + Mathematics
//  Secretaries   → PSR + FR + English/Business Comm + General Paper

export const GRADE_LEVELS = [
  {
    id: 'gl08plus',
    label: 'GL 08 and Above',
    subtitle: 'PSR · Financial Regulations · Common Law · Local Acts',
    subjects: ['Public Service Rules', 'Financial Regulations', 'Common Law & Local Acts'],
    poolIds: [...PSR_IDS, ...FR_IDS, ...GEN_IDS],
  },
  {
    id: 'gl0607',
    label: 'GL 06 / 07',
    subtitle: 'PSR · Financial Regulations',
    subjects: ['Public Service Rules', 'Financial Regulations'],
    poolIds: [...PSR_IDS, ...FR_IDS],
  },
  {
    id: 'gl0405',
    label: 'GL 04 / 05  (CO II)',
    subtitle: 'English · General Paper · PSR · Financial Regulations',
    subjects: ['English Language', 'General Paper', 'Public Service Rules', 'Financial Regulations'],
    poolIds: [...ENG_IDS, ...GEN_IDS.slice(0, 100), ...PSR_IDS, ...FR_IDS],
  },
  {
    id: 'gl0203',
    label: 'GL 02 / 03  (CA)',
    subtitle: 'English · General Paper · PSR · Financial Regulations · Mathematics',
    subjects: ['English Language', 'General Paper', 'Public Service Rules', 'Financial Regulations', 'Mathematics'],
    poolIds: [...ENG_IDS, ...GEN_IDS.slice(0, 100), ...PSR_IDS, ...FR_IDS, ...MATH_IDS],
  },
  {
    id: 'secretary',
    label: 'Secretaries / CS II – CS IV',
    subtitle: 'PSR · Financial Regulations · English · General Paper',
    subjects: ['Public Service Rules', 'Financial Regulations', 'English Language', 'General Paper'],
    poolIds: [...PSR_IDS, ...FR_IDS, ...ENG_IDS, ...GEN_IDS.slice(0, 100)],
  },
]

// ── Lookup grade level config by id ─────────────────────────────────────────
export function getGradeLevel(gradeLevelId) {
  return GRADE_LEVELS.find(g => g.id === gradeLevelId) ?? GRADE_LEVELS[0]
}

// ── Fisher-Yates shuffle ─────────────────────────────────────────────────────
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

// ── Return next 50 question IDs for a session ────────────────────────────────
//
// Pool key is scoped per grade level so each grade has its own rotation cycle.
// This ensures all questions in a grade's pool are seen before any repeat.

export function getNextSessionIds(gradeLevelId = 'gl08plus') {
  const grade    = getGradeLevel(gradeLevelId)
  const poolKey  = `pool_${gradeLevelId}`
  const allIds   = grade.poolIds

  let pool = getPool(poolKey)

  // Initialise or refill the pool when exhausted or too small
  if (!pool || pool.length < QUESTIONS_PER_SESSION) {
    const fresh = shuffle(allIds)
    pool = pool && pool.length > 0
      ? [...pool, ...fresh.filter(id => !pool.includes(id))]
      : fresh
    savePool(pool, poolKey)
  }

  // Take the first 50 IDs
  const sessionIds = pool.splice(0, QUESTIONS_PER_SESSION)
  savePool(pool, poolKey)

  return sessionIds
}

// ── Return question objects for a set of IDs ────────────────────────────────
export function getQuestionsForIds(ids) {
  const map = Object.fromEntries(questions.map(q => [q.id, q]))
  return ids.map(id => map[id]).filter(Boolean)
}

// ── Correct answer lookup ────────────────────────────────────────────────────
export function getCorrectIndex(questionId) {
  return answers[questionId] ?? -1
}

export function isCorrect(questionId, chosenIndex) {
  return getCorrectIndex(questionId) === chosenIndex
}

// ── Score computation ────────────────────────────────────────────────────────
export function computeScore(userAnswers) {
  let correct = 0, wrong = 0, skipped = 0
  Object.entries(userAnswers).forEach(([id, chosen]) => {
    if (chosen === null || chosen === undefined) skipped++
    else if (isCorrect(Number(id), chosen)) correct++
    else wrong++
  })
  return { correct, wrong, skipped, total: QUESTIONS_PER_SESSION }
}
