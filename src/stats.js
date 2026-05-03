(function () {
    const app = window.MousePracticeApp = window.MousePracticeApp || {};

    const TIERS = [
        { name: 'Bronze',     minSpeed:  40, minAcc: 75, color: '#b08d57' },
        { name: 'Silver',     minSpeed:  70, minAcc: 82, color: '#94a3b8' },
        { name: 'Gold',       minSpeed: 100, minAcc: 88, color: '#eab308' },
        { name: 'Platinum',   minSpeed: 130, minAcc: 92, color: '#22d3ee' },
        { name: 'Diamond',    minSpeed: 160, minAcc: 95, color: '#60a5fa' },
        { name: 'Master',     minSpeed: 190, minAcc: 97, color: '#a78bfa' },
        { name: 'Grandmaster',minSpeed: 220, minAcc: 98, color: '#f43f5e' },
    ];
    function calcScore(speed, accuracy) {
        return Math.round(speed * Math.pow(accuracy / 100, 2));
    }

    function formatDate(isoString) {
        const d = new Date(isoString);
        return d.toLocaleDateString('nl-NL', { day: '2-digit', month: '2-digit', year: '2-digit' })
             + ' ' + d.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
    }

    function tierIndex(speed, accuracy) {
        let reached = -1;
        TIERS.forEach((t, i) => {
            if (speed >= t.minSpeed && accuracy >= t.minAcc) reached = i;
        });
        return reached;
    }

    function renderSkillScale(container, attempts) {
        if (!container) return;

        const last = attempts.length ? attempts[attempts.length - 1] : null;
        const ti = last ? tierIndex(last.speed, last.accuracy) : -1;

        const n = TIERS.length;
        const segW = 100 / n;

        const segments = TIERS.map((t, i) => {
            const active = i === ti;
            return `
                <div class="ss-segment ${active ? 'ss-active' : ''}" style="background:${t.color}; opacity:${i > ti && ti >= 0 ? 0.35 : i <= ti ? 1 : 0.35}">
                    <span class="ss-name">${t.name}</span>
                    <span class="ss-thresh">${t.minSpeed} APM · ${t.minAcc}%</span>
                </div>`;
        }).join('');

        let markerHtml = '';
        if (last) {
            const pos = ti >= 0
                ? segW * ti + segW / 2
                : 0;
            const label = ti >= 0
                ? TIERS[ti].name
                : 'Onder Novice';
            markerHtml = `
                <div class="ss-marker" style="left:${pos}%">
                    <div class="ss-marker-bubble">${last.speed} APM · ${last.accuracy}%</div>
                    <div class="ss-marker-pin"></div>
                </div>`;
        }

        const noAttempt = !last ? '<p class="stats-empty">Nog geen pogingen geregistreerd.</p>' : '';

        container.innerHTML = `
            <div class="ss-wrap">
                <div class="ss-bar">${segments}</div>
                ${markerHtml}
            </div>
            ${noAttempt}`;
    }

    function createStats(elements, state) {
        function updateDisplay() {
            const attempts = state.attempts || [];
            const levels = app.config.levels;

            if (attempts.length === 0) {
                elements.statsGrid.innerHTML = '<p class="stats-empty">Nog geen pogingen geregistreerd.</p>';
                return;
            }

            const index = state.currentLevel;
            const level = levels[index];
            const rows = attempts
                .filter(a => a.level === index)
                .map(a => ({ ...a, score: calcScore(a.speed, a.accuracy) }))
                .sort((a, b) => b.score - a.score)
                .slice(0, 10);

            if (rows.length === 0) {
                elements.statsGrid.innerHTML = '<p class="stats-empty">Nog geen pogingen voor dit niveau.</p>';
            } else {
                const rowsHtml = rows.map((a, i) => `
                    <tr class="${i === 0 ? 'hs-first' : ''}">
                        <td class="hs-rank">${i === 0 ? '🏆' : i + 1}</td>
                        <td class="hs-date">${formatDate(a.ts)}</td>
                        <td class="hs-speed">${a.speed}</td>
                        <td class="hs-acc">${a.accuracy}%</td>
                        <td class="hs-score">${a.score}</td>
                    </tr>`).join('');

                elements.statsGrid.innerHTML = `
                    <div class="hs-level-block">
                        <div class="hs-level-name">${level.name}</div>
                        <table class="hs-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Datum</th>
                                    <th>Tekens/min</th>
                                    <th>Nauwk.</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>${rowsHtml}</tbody>
                        </table>
                    </div>`;
            }
            renderSkillScale(elements.skillScale, attempts);
        }

        return { updateDisplay, calcScore };
    }

    app.stats = { createStats, calcScore };
})();
