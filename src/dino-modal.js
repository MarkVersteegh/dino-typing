(function () {
    const app = window.MousePracticeApp = window.MousePracticeApp || {};

    function escapeHtml(value) {
        return String(value).replace(/[&<>"']/g, char => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[char]));
    }

    function escapeAttribute(value) {
        return escapeHtml(value).replace(/`/g, '&#96;');
    }

    function setImageFallbacks(image, urls) {
        let nextIndex = 0;
        image.onerror = () => {
            nextIndex++;
            if (nextIndex < urls.length) image.src = urls[nextIndex];
        };
        image.src = urls[nextIndex];
    }

    function renderDinosaurPicturesSrcdoc(container, dino, cachedHtml, globeUrl) {
        const globeIframe = globeUrl
            ? `<iframe src="${escapeAttribute(globeUrl)}" frameborder="0" allow="fullscreen" style="width:100%;height:330px;border-radius:8px;border:1px solid #ddd;display:block;" title="${escapeHtml(dino.name)} globe"></iframe>`
            : '';
        const htmlWithGlobe = globeUrl
            ? cachedHtml.replace(
                /(<div\b[^>]*\bclass="globe-container"[^>]*>)/i,
                `$1${globeIframe}`
              )
            : cachedHtml;

        const srcdoc = `
            <!DOCTYPE html>
            <html>
            <head>
                <style>
                    body { margin: 0; color: #333; background: #fff; font-family: Arial, Helvetica, sans-serif; }
                    .container { max-width: none; width: auto; padding: 22px; }
                    .header, .row.breadcrumbs, .below-main-content, .mobile-dino-nav,
                    script, video, form, button, input, .feedback, .video, .videos,
                    .prev-next-dino, .view-on-globe {
                        display: none !important;
                    }
                    .map-container { display: flex; gap: 12px; align-items: flex-start; }
                    .map-image-container { flex: 0 0 auto; }
                    .globe-container { flex: 1 1 auto; min-width: 0; }
                    a { color: inherit; text-decoration: none; pointer-events: none; }
                    img { max-width: 100%; height: auto; }
                    #images, .pics {
                        display: grid;
                        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
                        gap: 14px;
                    }
                    #images img, .pics img {
                        width: 100%;
                        max-height: 260px;
                        object-fit: contain;
                        border-radius: 8px;
                    }
                </style>
            </head>
            <body>${htmlWithGlobe}</body>
            </html>
        `;

        container.innerHTML = `
            <h4>DinosaurPictures.org</h4>
            <iframe class="dinosaur-pictures-srcdoc-frame" title="${escapeHtml(dino.name)} lokaal opgeslagen" srcdoc="${escapeAttribute(srcdoc)}"></iframe>
        `;
    }

    function renderDinoInfoTabs(dino) {
        return `
            <div class="dino-info-tabs" role="tablist">
                <button class="dino-info-tab active" type="button" data-tab="info" data-dino-id="${escapeHtml(dino.id)}" role="tab" aria-selected="true">Basis</button>
                <button class="dino-info-tab" type="button" data-tab="pictures" data-dino-id="${escapeHtml(dino.id)}" role="tab" aria-selected="false">Extra</button>
            </div>
        `;
    }

    function renderPicturesPanel(dino, isUnlocked) {
        if (!isUnlocked) {
            return `
                <div class="extra-locked" data-dino-id="${escapeHtml(dino.id)}">
                    <div class="extra-locked-icon">🔒</div>
                    <p>Rond een extra oefening af (4 regels, ≥70%) om dit tabblad te ontgrendelen.</p>
                    <button class="btn-primary extra-unlock-btn" type="button">Start extra oefening</button>
                </div>
            `;
        }
        return `
            <div class="dinosaur-pictures-clean" data-dino-id="${escapeHtml(dino.id)}">
                <div class="dinosaur-pictures-status">Open dit tabblad om afbeeldingen en feiten te laden.</div>
            </div>
        `;
    }

    function createDinoModal(elements, dinosById, collection, game) {
        async function show(dinoId, initialTab) {
            const dino = dinosById[dinoId];
            if (!dino) return;

            elements.overlay.classList.add('visible');
            elements.overlay.setAttribute('aria-hidden', 'false');
            elements.panel.innerHTML = `<div class="dino-info-source">DinoDB informatie laden...</div>`;
            elements.close.focus();

            render(dino, initialTab);
        }

        function close() {
            elements.overlay.classList.remove('visible');
            elements.overlay.setAttribute('aria-hidden', 'true');
            elements.panel.innerHTML = '';
            elements.textInput.focus();
        }

        function render(dino, initialTab) {
            const imageId = `dino-info-image-${dino.id}`;
            const extraUnlocked = collection.isExtraUnlocked(dino.id);
            const statsHtml = dino.stats.map(stat => `
                <div class="dino-info-stat">
                    <div class="dino-info-label">${escapeHtml(stat.label)}</div>
                    <div class="dino-info-value">${escapeHtml(stat.value)}</div>
                </div>
            `).join('');
            const sectionsHtml = [
                ['Description', dino.sections.description],
                ['Discovery', dino.sections.discovery]
            ].map(([title, text]) => `
                <div class="dino-info-section">
                    <h4>${escapeHtml(title)}</h4>
                    <p>${escapeHtml(text)}</p>
                </div>
            `).join('');

            elements.panel.innerHTML = `
                ${renderDinoInfoTabs(dino)}
                <div class="dino-tab-panel active" id="dino-tab-info">
                    <div class="dino-info-header">
                        <img class="dino-info-card-img" src="${escapeAttribute(dino.images.card)}" alt="${escapeHtml(dino.name)} kaart">
                        <img id="${imageId}" alt="${escapeHtml(dino.name)}">
                        <div>
                            <h3 id="dino-info-title">${escapeHtml(dino.name)}</h3>
                            <div class="dino-info-source">DinoDB - Jurassic World Evolution</div>
                        </div>
                    </div>
                    <div class="dino-info-grid">${statsHtml}</div>
                    ${sectionsHtml}
                </div>
                <div class="dino-tab-panel" id="dino-tab-pictures">
                    ${renderPicturesPanel(dino, extraUnlocked)}
                </div>
            `;
            wireTabs(dino);
            setImageFallbacks(document.getElementById(imageId), dino.images.heroCandidates);

            if (initialTab) {
                const tab = elements.panel.querySelector(`.dino-info-tab[data-tab="${initialTab}"]`);
                if (tab) tab.click();
            }

            const unlockBtn = elements.panel.querySelector('.extra-unlock-btn');
            if (unlockBtn) {
                unlockBtn.addEventListener('click', () => {
                    close();
                    game.startExtraExercise(
                        (success) => { if (success) collection.unlockExtra(dino.id); },
                        () => show(dino.id, 'pictures')
                    );
                });
            }
        }

        function wireTabs(dino) {
            elements.panel.querySelectorAll('.dino-info-tab').forEach(tab => {
                tab.addEventListener('click', () => {
                    const selectedTab = tab.dataset.tab;
                    elements.panel.querySelectorAll('.dino-info-tab').forEach(item => {
                        const isActive = item.dataset.tab === selectedTab;
                        item.classList.toggle('active', isActive);
                        item.setAttribute('aria-selected', String(isActive));
                    });
                    elements.panel.querySelectorAll('.dino-tab-panel').forEach(panel => {
                        panel.classList.toggle('active', panel.id === `dino-tab-${selectedTab}`);
                    });
                    if (selectedTab === 'pictures') loadPictures(tab.dataset.dinoId);
                });
            });
        }

        function loadPictures(dinoId) {
            const dino = dinosById[dinoId];
            const container = elements.panel.querySelector('.dinosaur-pictures-clean');
            if (!dino || !container || container.dataset.loaded === 'true') return;

            container.dataset.loaded = 'true';

            const picturesDb = window.DINOSAUR_PICTURES_DB || {};
            const cached = picturesDb[dino.id];
            const globeUrl = cached && cached.globeUrl ? cached.globeUrl : '';

            if (!cached || !cached.html) {
                const status = container.querySelector('.dinosaur-pictures-status');
                if (status) status.textContent = 'Geen lokale DinosaurPictures-cache gevonden. Draai python tools/download_dino_content.py om deze data op te halen.';
                return;
            }

            container.innerHTML = '';
            renderDinosaurPicturesSrcdoc(container, dino, cached.html, globeUrl);
        }

        elements.close.addEventListener('click', close);
        elements.overlay.addEventListener('click', event => {
            if (event.target === elements.overlay) close();
        });
        document.addEventListener('keydown', event => {
            if (event.key === 'Escape' && elements.overlay.classList.contains('visible')) close();
        });

        return { show, close };
    }

    app.dinoModal = { createDinoModal };
})();
