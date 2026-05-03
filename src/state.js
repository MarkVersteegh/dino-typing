(function () {
    const app = window.MousePracticeApp = window.MousePracticeApp || {};

    function defaultState() {
        return {
            currentLevel: 0,
            unlockedLevels: app.config.levels.map((_, index) => index === 0),
            achievements: {
                unlockedDinos: [],
                unlockedExtras: [],
                latestUnlock: '',
                totalGoodAttempts: 0
            },
            attempts: []
        };
    }

    function normalizeDinoId(value, dinosById, dinosByName) {
        if (dinosById[value]) return value;
        return dinosByName[value] ? dinosByName[value].id : '';
    }

    function getActiveProfile() {
        const id = localStorage.getItem(app.config.profileStorageKey);
        const valid = app.config.profiles.map(p => p.id);
        return valid.includes(id) ? id : 'mark';
    }

    function setActiveProfile(id) {
        localStorage.setItem(app.config.profileStorageKey, id);
    }

    function profileStorageKey(profile) {
        return `${app.config.storageKeyPrefix}-${profile}`;
    }

    function loadProgress(dinos) {
        const state = defaultState();
        const dinosById = Object.fromEntries(dinos.map(dino => [dino.id, dino]));
        const dinosByName = Object.fromEntries(dinos.map(dino => [dino.name, dino]));

        // One-time migration: move old key → typing-progress-mark
        const legacyKey = app.config.storageKey;
        const markKey = profileStorageKey('mark');
        const legacy = localStorage.getItem(legacyKey);
        if (legacy && !localStorage.getItem(markKey)) {
            localStorage.setItem(markKey, legacy);
            localStorage.removeItem(legacyKey);
        }

        const saved = localStorage.getItem(profileStorageKey(getActiveProfile()));

        if (!saved) return state;

        try {
            const data = JSON.parse(saved);

            if (Number.isInteger(data.currentLevel) && app.config.levels[data.currentLevel]) {
                state.currentLevel = data.currentLevel;
            }

            if (Array.isArray(data.unlockedLevels) && data.unlockedLevels.length === app.config.levels.length) {
                state.unlockedLevels = data.unlockedLevels.map(Boolean);
                state.unlockedLevels[0] = true;
            }

            if (Array.isArray(data.attempts)) {
                state.attempts = data.attempts.filter(a =>
                    a && typeof a.ts === 'string' &&
                    Number.isFinite(a.level) &&
                    Number.isFinite(a.speed) &&
                    Number.isFinite(a.accuracy)
                );
            }

            if (data.achievements && typeof data.achievements === 'object') {
                const unlockedDinos = Array.isArray(data.achievements.unlockedDinos)
                    ? data.achievements.unlockedDinos
                        .map(value => normalizeDinoId(value, dinosById, dinosByName))
                        .filter(Boolean)
                    : [];
                const latestUnlock = normalizeDinoId(data.achievements.latestUnlock, dinosById, dinosByName);

                const unlockedExtras = Array.isArray(data.achievements.unlockedExtras)
                    ? data.achievements.unlockedExtras
                        .map(value => normalizeDinoId(value, dinosById, dinosByName))
                        .filter(Boolean)
                    : [];

                state.achievements = {
                    unlockedDinos: [...new Set(unlockedDinos)],
                    unlockedExtras: [...new Set(unlockedExtras)],
                    latestUnlock,
                    totalGoodAttempts: Number.isInteger(data.achievements.totalGoodAttempts)
                        ? data.achievements.totalGoodAttempts
                        : unlockedDinos.length
                };
            }
        } catch {
            localStorage.removeItem(app.config.storageKey);
        }

        state.currentLevel = state.unlockedLevels.lastIndexOf(true);

        return state;
    }

    function saveProgress(state) {
        localStorage.setItem(profileStorageKey(getActiveProfile()), JSON.stringify({
            currentLevel: state.currentLevel,
            unlockedLevels: state.unlockedLevels,
            achievements: state.achievements,
            attempts: state.attempts
        }));
    }

    app.state = { defaultState, loadProgress, saveProgress, getActiveProfile, setActiveProfile };
})();
