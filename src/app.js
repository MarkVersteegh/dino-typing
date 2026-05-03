(function () {
    const app = window.MousePracticeApp = window.MousePracticeApp || {};

    function byId(id) {
        return document.getElementById(id);
    }

    function init() {
        const dinos = [...window.DINO_DB].sort((a, b) => a.unlockOrder - b.unlockOrder);
        const dinosById = Object.fromEntries(dinos.map(dino => [dino.id, dino]));
        const state = app.state.loadProgress(dinos);
        const saveProgress = () => app.state.saveProgress(state);

        const elements = {
            displayRows: byId('display-rows'),
            displayContainer: byId('display-container'),
            textInput: byId('text-input'),
            charsPerMinute: byId('chars-per-minute'),
            accuracy: byId('accuracy'),
            message: byId('message'),
            progressBar: byId('progress-bar'),
            currentLevel: byId('current-level'),
            levelChars: byId('level-chars'),
            levelsGrid: byId('levels-grid'),
            collectionCount: byId('collection-count'),
            latestUnlock: byId('latest-unlock'),
            dinoGrid: byId('dino-grid'),
            overlay: byId('dino-info-overlay'),
            panel: byId('dino-info-panel'),
            close: byId('dino-info-close'),
            cursorPosValue: byId('cursor-pos-value') || document.createElement('span'),
            cursorPosTotal: byId('cursor-pos-total') || document.createElement('span'),
            cursorPosCurrent: byId('cursor-pos-current') || document.createElement('span'),
            statsGrid: byId('stats-grid'),
            skillScale: byId('skill-scale')
        };

        app.profiles.createProfileWidget();
        const statsModule = app.stats.createStats(elements, state);

        function recordAttempt(attempt) {
            state.attempts.push(attempt);
            saveProgress();
            statsModule.updateDisplay();
        }

        const collection = app.dinoCollection.createDinoCollection(elements, state, dinos, saveProgress, null);
        const game = app.typingGame.createTypingGame(elements, state, saveProgress, collection, recordAttempt, () => statsModule.updateDisplay());
        const modal = app.dinoModal.createDinoModal(elements, dinosById, collection, game);
        collection.setModal(modal);

        collection.updateDisplay();
        statsModule.updateDisplay();
        game.init();

        window.resetExercise = game.resetExercise;
        window.newExercise = game.newExercise;
        window.startExtraExercise = (dinoId, onComplete) => game.startExtraExercise(onComplete);
    }

    document.addEventListener('DOMContentLoaded', init);
})();
