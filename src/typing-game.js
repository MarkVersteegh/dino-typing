(function () {
    const app = window.MousePracticeApp = window.MousePracticeApp || {};

    function displayChar(char) {
        return char === ' ' ? '␣' : char;
    }

    function createTypingGame(elements, state, saveProgress, collection, recordAttempt, onLevelChange) {
        let exerciseLines = [];
        let exerciseText = '';
        let typedText = '';
        let correctedPositions = new Set();
        let startTime = null;
        let messageTimer = null;
        let extraCompleteCallback = null;

        function currentLevel() {
            return app.config.levels[state.currentLevel];
        }

        function generateExercise(lineCount) {
            return app.exerciseGenerator.generateExercise(currentLevel(), app.config, lineCount);
        }

        function updateLevelInfo() {
            elements.currentLevel.textContent = currentLevel().name;
            elements.levelChars.innerHTML = app.keyboard.renderKeyboard(currentLevel().letters);
        }

        function updateTypedDisplay() {
            const chars = exerciseText.split('');
            const typedChars = typedText.split('');
            const cursorIndex = typedChars.length < chars.length ? typedChars.length : -1;
            const maxLineLength = Math.max(...exerciseLines.map(line => line.length));
            let html = '';
            let lineStart = 0;

            elements.displayRows.style.setProperty('--line-char-count', maxLineLength);

            exerciseLines.forEach(line => {
                const lineChars = line.split('');
                let exerciseHtml = '';
                let typedHtml = '';

                lineChars.forEach((expectedChar, localIndex) => {
                    const index = lineStart + localIndex;
                    const cursorClass = index === cursorIndex ? ' cursor-active' : '';
                    exerciseHtml += `<span class="char${cursorClass}">${displayChar(expectedChar)}</span>`;
                });

                lineChars.forEach((expectedChar, localIndex) => {
                    const index = lineStart + localIndex;
                    const typedChar = typedChars[index];
                    let className = 'empty';
                    let visibleChar = '';

                    if (typedChar === undefined) {
                        const cursorClass = index === cursorIndex ? ' cursor-active' : '';
                        typedHtml += `<span class="char ${className}${cursorClass}">${visibleChar}</span>`;
                        return;
                    }

                    if (typedChar !== expectedChar) {
                        className = 'wrong';
                    } else if (correctedPositions.has(index)) {
                        className = 'corrected';
                    } else {
                        className = 'correct';
                    }

                    visibleChar = displayChar(typedChar);
                    typedHtml += `<span class="char ${className}">${visibleChar}</span>`;
                });

                html += `
                    <div class="exercise-block">
                        <div class="exercise-line">${exerciseHtml}</div>
                        <div class="typed-line">${typedHtml}</div>
                    </div>
                `;
                lineStart += line.length;
            });

            elements.displayRows.innerHTML = html;

            const pos = typedChars.length;
            const total = chars.length;
            elements.cursorPosValue.textContent = pos;
            elements.cursorPosTotal.textContent = total;
            const nextChar = pos < total ? chars[pos] : null;
            elements.cursorPosCurrent.textContent = nextChar === null ? '✓' : nextChar === ' ' ? '␣' : nextChar;
        }

        function updateStats() {
            if (!startTime || typedText.length === 0) {
                elements.charsPerMinute.textContent = '0';
                elements.accuracy.textContent = '—';
                return null;
            }

            const elapsedMinutes = ((Date.now() - startTime) / 1000) / 60;
            const charsPerMinute = Math.round(typedText.length / elapsedMinutes);
            let correct = 0;

            for (let i = 0; i < typedText.length && i < exerciseText.length; i++) {
                if (typedText[i] === exerciseText[i]) correct++;
            }

            const accuracy = typedText.length > 0 ? Math.round((correct / typedText.length) * 100) : 100;
            elements.charsPerMinute.textContent = charsPerMinute;
            elements.accuracy.textContent = `${accuracy}%`;
            elements.progressBar.style.width = Math.min((typedText.length / exerciseText.length) * 100, 100) + '%';

            return { charsPerMinute, accuracy };
        }

        function showMessage(text, type, duration = 3000, html = false) {
            if (messageTimer) {
                clearTimeout(messageTimer);
                messageTimer = null;
            }

            if (html) {
                elements.message.innerHTML = text;
            } else {
                elements.message.textContent = text;
            }
            elements.message.className = `message ${type}`;
            if (duration > 0) {
                messageTimer = setTimeout(() => {
                    elements.message.className = 'message';
                    messageTimer = null;
                }, duration);
            }
        }

        function updateLevelsDisplay() {
            elements.levelsGrid.innerHTML = '';
            app.config.levels.forEach((level, index) => {
                const btn = document.createElement('button');
                btn.textContent = level.name;
                btn.className = 'level-button';

                if (state.unlockedLevels[index]) {
                    btn.classList.add('unlocked');
                    if (index === state.currentLevel) btn.classList.add('active');
                    btn.addEventListener('click', () => selectLevel(index));
                } else {
                    btn.classList.add('locked');
                    btn.textContent = `${level.name} 🔒`;
                    btn.disabled = true;
                }

                elements.levelsGrid.appendChild(btn);
            });
        }

        function completeExercise(stats) {
            elements.textInput.disabled = true;
            const speedText = stats ? `${stats.charsPerMinute} tekens/min` : 'afgerond';
            const accuracyText = stats ? `${stats.accuracy}% nauwkeurigheid` : 'voltooid';
            const qualifiesForUnlock = stats && stats.accuracy >= app.config.unlockAccuracyThreshold;

            if (extraCompleteCallback) {
                const { callback, onOpenExtra } = extraCompleteCallback;
                extraCompleteCallback = null;
                if (qualifiesForUnlock) {
                    callback(true);
                    showMessage(`✅ Extra oefening voltooid! ${speedText} op ${accuracyText}. Extra tabblad ontgrendeld!`, 'unlock', 0);
                    if (onOpenExtra) {
                        const btn = document.createElement('button');
                        btn.textContent = 'Bekijk Extra tabblad →';
                        btn.style.cssText = 'margin-left:12px;background:none;border:none;cursor:pointer;font-weight:bold;text-decoration:underline;font-size:inherit;color:inherit;padding:0;';
                        btn.addEventListener('click', onOpenExtra);
                        elements.message.appendChild(btn);
                    }
                } else {
                    callback(false);
                    showMessage(`❌ ${speedText} op ${accuracyText}. Haal minstens ${app.config.unlockAccuracyThreshold}% om te ontgrendelen.`, 'info');
                }
                return;
            }

            if (recordAttempt && stats) {
                recordAttempt({ ts: new Date().toISOString(), level: state.currentLevel, speed: stats.charsPerMinute, accuracy: stats.accuracy });
            }

            const score = stats ? app.stats.calcScore(stats.charsPerMinute, stats.accuracy) : null;
            const scoreText = score !== null ? ` Score: ${score}.` : '';

            const unlockedDino = qualifiesForUnlock ? collection.unlockNextDino() : null;
            let message = `✅ Goed gedaan! ${speedText} op ${accuracyText}.${scoreText}`;
            let messageType = 'success';

            if (unlockedDino) {
                message = `${message} ${unlockedDino.name} ontgrendeld!`;
                messageType = 'unlock';
            } else if (qualifiesForUnlock) {
                message = `${message} Alle dino's met DinoDB-info zijn al ontgrendeld.`;
            } else {
                message = `${message} Haal minstens ${app.config.unlockAccuracyThreshold}% voor een dino.`;
            }

            if (state.currentLevel < app.config.levels.length - 1 && !state.unlockedLevels[state.currentLevel + 1]) {
                state.unlockedLevels[state.currentLevel + 1] = true;
                message = `${message} Niveau ${state.currentLevel + 2} ontgrendeld!`;
                messageType = 'unlock';
                selectLevel(state.currentLevel + 1);
            }

            showMessage(message, messageType);
        }

        function checkCompletion() {
            if (typedText.length >= exerciseText.length) {
                completeExercise(updateStats());
            }
        }

        function resetExercise() {
            typedText = '';
            correctedPositions = new Set();
            startTime = null;
            elements.textInput.value = '';
            elements.textInput.disabled = false;
            elements.textInput.focus();
            elements.message.className = 'message';
            updateTypedDisplay();
            updateStats();
            elements.progressBar.style.width = '0%';
        }

        function newExercise() {
            extraCompleteCallback = null;
            exerciseLines = generateExercise();
            exerciseText = exerciseLines.join('');
            elements.textInput.maxLength = exerciseText.length;
            resetExercise();
        }

        function startExtraExercise(onComplete, onOpenExtra) {
            extraCompleteCallback = { callback: onComplete, onOpenExtra };
            exerciseLines = generateExercise(app.config.extraExerciseLineCount);
            exerciseText = exerciseLines.join('');
            elements.textInput.maxLength = exerciseText.length;
            resetExercise();
            showMessage('Extra oefening: 4 regels, minstens 70% nauwkeurigheid vereist.', 'info', 4000);
        }

        function selectLevel(index) {
            if (!state.unlockedLevels[index]) return;
            state.currentLevel = index;
            saveProgress();
            updateLevelInfo();
            newExercise();
            updateLevelsDisplay();
            if (onLevelChange) onLevelChange();
        }

        function handleInput(event) {
            if (event.target.value.endsWith('zxcvasdf')) {
                if (!startTime) startTime = Date.now();
                typedText = exerciseText;
                elements.textInput.value = exerciseText;
                updateTypedDisplay();
                completeExercise(updateStats());
                return;
            }

            if (!startTime && event.target.value.length > 0) startTime = Date.now();
            const previousLength = typedText.length;
            const nextValue = event.target.value.slice(0, exerciseText.length);

            if (nextValue.length < previousLength) {
                for (let i = nextValue.length; i < previousLength; i++) {
                    correctedPositions.add(i);
                }
            }

            typedText = nextValue;
            elements.textInput.value = nextValue;
            updateTypedDisplay();
            updateStats();
            checkCompletion();
        }

        function init() {
            updateLevelInfo();
            updateLevelsDisplay();
            newExercise();
            elements.textInput.focus();
        }

        elements.textInput.addEventListener('input', handleInput);
        elements.displayContainer.addEventListener('click', () => elements.textInput.focus());

        return { init, resetExercise, newExercise, startExtraExercise, updateLevelsDisplay };
    }

    app.typingGame = { createTypingGame };
})();
