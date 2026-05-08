// storage.js — All localStorage interactions for the CBT app

const KEYS = {
  POOL:    'cbt_question_pool',       // legacy single-pool key (not used in grade-level mode)
  HISTORY: 'cbt_session_history',     // array of past session result objects
  CURRENT: 'cbt_current_session',     // in-progress session state (if any)
}

// Grade-level-specific pool keys used by quizLogic (format: pool_<gradeLevelId>)
const GRADE_POOL_KEYS = [
  'pool_gl08plus',
  'pool_gl0607',
  'pool_gl0405',
  'pool_gl0203',
  'pool_secretary',
]

// ─── Pool Management ───────────────────────────────────────────────────────────
// `key` defaults to the legacy single-pool key for backwards compatibility.
// quizLogic passes grade-specific keys like 'pool_gl08plus'.

export function getPool(key = KEYS.POOL) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function savePool(pool, key = KEYS.POOL) {
  localStorage.setItem(key, JSON.stringify(pool))
}

export function clearPool(key = KEYS.POOL) {
  localStorage.removeItem(key)
}

// ─── Session History ────────────────────────────────────────────────────────────

export function getHistory() {
  try {
    const raw = localStorage.getItem(KEYS.HISTORY)
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function addSessionToHistory(session) {
  const history = getHistory()
  history.push(session)
  localStorage.setItem(KEYS.HISTORY, JSON.stringify(history))
}

export function clearHistory() {
  localStorage.removeItem(KEYS.HISTORY)
}

// ─── Current Session ────────────────────────────────────────────────────────────

export function getCurrentSession() {
  try {
    const raw = localStorage.getItem(KEYS.CURRENT)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function saveCurrentSession(session) {
  localStorage.setItem(KEYS.CURRENT, JSON.stringify(session))
}

export function clearCurrentSession() {
  localStorage.removeItem(KEYS.CURRENT)
}

// ─── Full Reset ─────────────────────────────────────────────────────────────────
// Clears core keys, the legacy pool key, and all grade-level pool keys.

export function resetAllData() {
  Object.values(KEYS).forEach(k => localStorage.removeItem(k))
  GRADE_POOL_KEYS.forEach(k => localStorage.removeItem(k))
}