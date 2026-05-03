(function () {
    const app = window.MousePracticeApp = window.MousePracticeApp || {};

    function createDinoPlaceholder() {
        const placeholder = document.createElement('div');
        placeholder.className = 'dino-placeholder';
        placeholder.textContent = '?';
        return placeholder;
    }

    function createDinoCollection(elements, state, dinos, saveProgress, initialModal) {
        let modal = initialModal;
        const sortedDinos = [...dinos].sort((a, b) => a.unlockOrder - b.unlockOrder);
        const dinosById = Object.fromEntries(sortedDinos.map(dino => [dino.id, dino]));

        const RARITIES = [
            { key: 'common',    label: 'Common' },
            { key: 'rare',      label: 'Rare' },
            { key: 'epic',      label: 'Epic' },
            { key: 'legendary', label: 'Legendary' },
        ];

        function createDinoCard(dino, index, isUnlocked) {
            const card = document.createElement('div');
            card.className = `dino-card ${isUnlocked ? 'unlocked' : 'locked'}`;

            if (isUnlocked && state.achievements.unlockedExtras.includes(dino.id)) {
                const star = document.createElement('span');
                star.className = 'dino-extra-star';
                star.textContent = '✦';
                star.title = 'Extra ontgrendeld';
                card.appendChild(star);
            }

            const imageWrap = document.createElement('div');
            imageWrap.className = 'dino-image-wrap';

            if (isUnlocked) {
                const image = document.createElement('img');
                image.className = 'dino-image';
                image.src = dino.images.card;
                image.alt = dino.name;
                image.loading = 'lazy';
                image.onerror = () => {
                    imageWrap.innerHTML = '';
                    imageWrap.appendChild(createDinoPlaceholder());
                };
                imageWrap.appendChild(image);
            } else {
                imageWrap.appendChild(createDinoPlaceholder());
            }

            const nameEl = document.createElement('div');
            nameEl.className = 'dino-name';
            nameEl.textContent = isUnlocked ? dino.name : `Dino ${index + 1}`;

            const rarityEl = document.createElement('div');
            rarityEl.className = 'dino-rarity';
            rarityEl.textContent = isUnlocked ? dino.rarity : 'Locked';

            card.appendChild(imageWrap);
            card.appendChild(nameEl);
            card.appendChild(rarityEl);

            if (isUnlocked) {
                card.tabIndex = 0;
                card.setAttribute('role', 'button');
                card.setAttribute('aria-label', `Toon DinoDB informatie voor ${dino.name}`);
                card.addEventListener('click', () => modal.show(dino.id));
                card.addEventListener('keydown', event => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        modal.show(dino.id);
                    }
                });
            }
            return card;
        }

        function updateDisplay() {
            const unlocked = new Set(state.achievements.unlockedDinos);
            elements.collectionCount.textContent = `${unlocked.size} / ${sortedDinos.length} dino's`;
            elements.latestUnlock.textContent = state.achievements.latestUnlock && dinosById[state.achievements.latestUnlock]
                ? `Nieuwste: ${dinosById[state.achievements.latestUnlock].name}`
                : '';
            elements.dinoGrid.innerHTML = '';

            let globalIndex = 0;
            RARITIES.forEach(({ key, label }) => {
                const group = sortedDinos.filter(d => d.rarity === key);

                const section = document.createElement('div');
                section.className = 'dino-rarity-section';

                const heading = document.createElement('h3');
                heading.className = `dino-rarity-heading rarity-${key}`;
                heading.textContent = label;
                section.appendChild(heading);

                if (group.length === 0) {
                    const empty = document.createElement('p');
                    empty.className = 'dino-rarity-empty';
                    empty.textContent = 'Nog geen dino\'s in deze klasse.';
                    section.appendChild(empty);
                } else {
                    const grid = document.createElement('div');
                    grid.className = 'dino-grid';
                    group.forEach(dino => {
                        grid.appendChild(createDinoCard(dino, globalIndex + 1, unlocked.has(dino.id)));
                        globalIndex++;
                    });
                    section.appendChild(grid);
                }

                elements.dinoGrid.appendChild(section);
            });
        }

        function unlockNextDino() {
            const unlocked = new Set(state.achievements.unlockedDinos);
            const unlockedDino = sortedDinos.find(dino => !unlocked.has(dino.id));
            state.achievements.totalGoodAttempts++;

            if (!unlockedDino) {
                state.achievements.latestUnlock = '';
                saveProgress();
                updateDisplay();
                return null;
            }

            state.achievements.unlockedDinos.push(unlockedDino.id);
            state.achievements.latestUnlock = unlockedDino.id;
            saveProgress();
            updateDisplay();
            return unlockedDino;
        }

        function setModal(m) { modal = m; }

        function isExtraUnlocked(dinoId) {
            return state.achievements.unlockedExtras.includes(dinoId);
        }

        function unlockExtra(dinoId) {
            if (!isExtraUnlocked(dinoId)) {
                state.achievements.unlockedExtras.push(dinoId);
                saveProgress();
            }
        }

        return { updateDisplay, unlockNextDino, sortedDinos, dinosById, isExtraUnlocked, unlockExtra, setModal };
    }

    app.dinoCollection = { createDinoCollection };
})();
