// quizLogic.js — Question pool rotation and session helpers
// Grade-level subject mapping per HOS Circular Ref.No: CIR/HOS/'26/005, 21 January 2026
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
//  ENG   : 351 – 400  (English Language / Business Communication)
//  MATH  : 401 – 450  (Mathematics)

const PSR_IDS  = range(1,   50)   //  50 questions
const GEN_IDS  = range(51,  200)  // 150 questions  (Common Law + Local Acts + General Paper)
const FR_IDS   = range(201, 350)  // 150 questions
const ENG_IDS  = range(351, 400)  //  50 questions  (also covers Business Communication)
const MATH_IDS = range(401, 450)  //  50 questions

// ── Grade-level configurations ───────────────────────────────────────────────
//
// Per HOS Circular Ref.No: CIR/HOS/'26/005, dated 21 January 2026:
//
//  GL 08+      → PSR + FR + Common Law + Local Act
//  GL 06/07    → PSR + FR
//  GL 04/05    → English + General Paper + PSR + FR
//                + Special Papers (Office Routine / Store Duty / Data Processing — pick 1)
//  GL 02/03    → English + General Paper + PSR + FR + Mathematics
//                + Special Papers (Office Routine / Store Duty / Data Processing — pick 1)
//  Secretaries → PSR + FR + Business Communication + Computer Proficiency
//                + Data Processing + Secretarial Administration + Book Keeping
//                + Office Routine + Secretarial Duties
//
// NOTE: "Special Papers" (Office Routine, Store Duty, Data Processing) and niche
// Secretarial subjects (Computer Proficiency, Secretarial Administration, Book Keeping,
// Secretarial Duties) do not yet have dedicated question banks.
// The available question bank maps as follows:
//   Common Law / Local Acts  → GEN_IDS (51–200)
//   General Paper            → GEN_IDS (51–200)
//   Business Communication   → ENG_IDS (351–400)

export const GRADE_LEVELS = [
  {
    id: 'gl08plus',
    label: 'GL 08 and Above',
    subtitle: 'PSR · Financial Regulations · Common Law · Local Acts',
    subjects: [
      'Public Service Rules (PSR)',
      'Financial Regulations (FR)',
      'Common Law',
      'Local Acts',
    ],
    // All four tested subjects are fully covered in the question bank
    specialNote: null,
    poolIds: [...PSR_IDS, ...FR_IDS, ...GEN_IDS],
    // Total pool: 50 + 150 + 150 = 350 questions
  },

  {
    id: 'gl0607',
    label: 'GL 06 / 07',
    subtitle: 'Public Service Rules · Financial Regulations',
    subjects: [
      'Public Service Rules (PSR)',
      'Financial Regulations (FR)',
    ],
    specialNote: null,
    poolIds: [...PSR_IDS, ...FR_IDS],
    // Total pool: 50 + 150 = 200 questions
  },

  {
    id: 'gl0405',
    label: 'GL 04 / 05  (CO II)',
    subtitle: 'English · General Paper · PSR · Financial Regulations · Special Papers',
    subjects: [
      'English Language',
      'General Paper',
      'Public Service Rules (PSR)',
      'Financial Regulations (FR)',
      'Special Papers (pick one: Office Routine / Store Duty / Data Processing)',
    ],
    // Special Papers questions are not yet in the question bank
    specialNote:
      'Special Papers (Office Routine, Store Duty, Data Processing) are not yet ' +
      'in this question bank. The test will draw from English, General Paper, PSR and FR.',
    poolIds: [...ENG_IDS, ...GEN_IDS, ...PSR_IDS, ...FR_IDS],
    // Total pool: 50 + 150 + 50 + 150 = 400 questions
  },

  {
    id: 'gl0203',
    label: 'GL 02 / 03  (CA)',
    subtitle: 'English · General Paper · PSR · Financial Regulations · Mathematics · Special Papers',
    subjects: [
      'English Language',
      'General Paper',
      'Public Service Rules (PSR)',
      'Financial Regulations (FR)',
      'Mathematics',
      'Special Papers (pick one: Office Routine / Store Duty / Data Processing)',
    ],
    specialNote:
      'Special Papers (Office Routine, Store Duty, Data Processing) are not yet ' +
      'in this question bank. The test will draw from English, General Paper, PSR, FR and Mathematics.',
    poolIds: [...ENG_IDS, ...GEN_IDS, ...PSR_IDS, ...FR_IDS, ...MATH_IDS],
    // Total pool: 50 + 150 + 50 + 150 + 50 = 450 questions
  },

  {
    id: 'secretary',
    label: 'Secretaries / CS II – CS IV',
    subtitle: 'PSR · Financial Regulations · Business Communication · Secretarial Subjects',
    subjects: [
      'Public Service Rules (PSR)',
      'Financial Regulations (FR)',
      'Business Communication',
      'Computer Proficiency',
      'Data Processing',
      'Secretarial Administration',
      'Book Keeping',
      'Office Routine',
      'Secretarial Duties',
    ],
    // Most secretarial-specific subjects lack dedicated questions; English covers
    // Business Communication, GEN covers General Paper overlap.
    // Computer Proficiency, Secretarial Administration, Book Keeping, Office Routine
    // and Secretarial Duties are not yet in the question bank.
    specialNote:
      'Computer Proficiency, Secretarial Administration, Book Keeping, Office Routine ' +
      'and Secretarial Duties are not yet in this question bank. Business Communication ' +
      'is tested via English Language questions.',
    poolIds: [...PSR_IDS, ...FR_IDS, ...ENG_IDS, ...GEN_IDS],
    // Total pool: 50 + 150 + 50 + 150 = 400 questions
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
// All questions in the grade's pool are seen before any repeat.

export function getNextSessionIds(gradeLevelId = 'gl08plus') {
  const grade   = getGradeLevel(gradeLevelId)
  const poolKey = `pool_${gradeLevelId}`
  const allIds  = grade.poolIds

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