// quizLogic.js — Question pool rotation and session helpers
import { questions } from '../data/questions.js'
import { answers } from '../data/answers.js'
import { getPool, savePool } from './storage.js'

const QUESTIONS_PER_SESSION = 50
const ALL_IDS = questions.map(q => q.id) // [1..200]

// Fisher-Yates shuffle (returns new array)
function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

/**
 * Returns the next 50 question IDs for a session, ensuring
 * all 200 are covered before any question repeats.
 */
export function getNextSessionIds() {
  let pool = getPool()

  // Initialise or refill the pool when exhausted
  if (!pool || pool.length < QUESTIONS_PER_SESSION) {
    const fresh = shuffle(ALL_IDS)
    // If there's a partial pool, append the fresh list so we don't double-show
    pool = pool && pool.length > 0
      ? [...pool, ...fresh.filter(id => !pool.includes(id))]
      : fresh
    savePool(pool)
  }

  // Take the first 50 IDs from the pool
  const sessionIds = pool.splice(0, QUESTIONS_PER_SESSION)
  savePool(pool)

  return sessionIds
}

/**
 * Returns an array of question objects for the given IDs,
 * preserving the shuffled order.
 */
export function getQuestionsForIds(ids) {
  const map = Object.fromEntries(questions.map(q => [q.id, q]))
  return ids.map(id => map[id]).filter(Boolean)
}

/** Returns the correct 0-based option index for a question id */
export function getCorrectIndex(questionId) {
  return answers[questionId] ?? -1
}

/** Checks whether a chosen option index is correct */
export function isCorrect(questionId, chosenIndex) {
  return getCorrectIndex(questionId) === chosenIndex
}

/** Computes score summary from an answers map { questionId: chosenIndex } */
export function computeScore(userAnswers) {
  let correct = 0
  let wrong = 0
  let skipped = 0
  Object.entries(userAnswers).forEach(([id, chosen]) => {
    if (chosen === null || chosen === undefined) {
      skipped++
    } else if (isCorrect(Number(id), chosen)) {
      correct++
    } else {
      wrong++
    }
  })
  return { correct, wrong, skipped, total: QUESTIONS_PER_SESSION }
}

export { QUESTIONS_PER_SESSION }