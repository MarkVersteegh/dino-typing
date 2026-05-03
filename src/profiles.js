(function () {
    const app = window.MousePracticeApp = window.MousePracticeApp || {};

    function createProfileWidget() {
        const active = app.state.getActiveProfile();
        const profiles = app.config.profiles;
        const current = profiles.find(p => p.id === active) || profiles[profiles.length - 1];

        const widget = document.createElement('div');
        widget.className = 'profile-widget';

        const avatar = document.createElement('button');
        avatar.className = 'profile-avatar';
        avatar.title = current.name;
        avatar.textContent = current.name[0].toUpperCase();
        avatar.style.setProperty('--profile-color', current.color);

        const panel = document.createElement('div');
        panel.className = 'profile-panel';
        panel.hidden = true;

        profiles.forEach(p => {
            const btn = document.createElement('button');
            btn.className = 'profile-option' + (p.id === active ? ' profile-option-active' : '');
            btn.style.setProperty('--profile-color', p.color);

            const dot = document.createElement('span');
            dot.className = 'profile-dot';

            const label = document.createElement('span');
            label.textContent = p.name;

            const check = document.createElement('span');
            check.className = 'profile-check';
            check.textContent = '✓';

            btn.append(dot, label, check);
            btn.addEventListener('click', () => {
                app.state.setActiveProfile(p.id);
                location.reload();
            });
            panel.appendChild(btn);
        });

        avatar.addEventListener('click', (e) => {
            e.stopPropagation();
            panel.hidden = !panel.hidden;
        });

        document.addEventListener('click', () => { panel.hidden = true; });
        panel.addEventListener('click', e => e.stopPropagation());

        widget.append(avatar, panel);
        document.getElementById('profile-widget').replaceWith(widget);
        widget.id = 'profile-widget';
    }

    app.profiles = { createProfileWidget };
})();
