(function () {
    window.MousePracticeApp = window.MousePracticeApp || {};

    window.MousePracticeApp.config = {
        levels: window.TYPING_LEVELS,
        storageKey: 'typing-progress',
        storageKeyPrefix: 'typing-progress',
        profileStorageKey: 'typing-profile',
        profiles: [
            { id: 'emmy',  name: 'Emmy',  color: '#f472b6' },
            { id: 'joris', name: 'Joris', color: '#34d399' },
            { id: 'mark',  name: 'Mark',  color: '#667eea' },
        ],
        exerciseLineCount: 2,
        extraExerciseLineCount: 4,
        minLineLength: 22,
        lineLengthVariation: 3,
        unlockAccuracyThreshold: 70
    };
})();
