// Generic localStorage helpers. Everything the user adds through the UI
// (assignments, attendance marks, admin records, announcements...) is
// persisted here so it survives a browser refresh.
export const load = (key, fallback) => {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
};

export const save = (key, value) => {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    /* storage full or unavailable - fail silently */
  }
};

// Seeds a key with a default value only the first time it's used.
export const seeded = (key, fallback) => {
  const existing = load(key, null);
  if (existing !== null) return existing;
  save(key, fallback);
  return fallback;
};

export const getAuth = () => load('auth', null);
export const setAuth = (auth) => save('auth', auth);
export const clearAuth = () => localStorage.removeItem('auth');
