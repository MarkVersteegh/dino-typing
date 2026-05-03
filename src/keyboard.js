(function () {
    const app = window.MousePracticeApp = window.MousePracticeApp || {};

    const KEY_W = 32; // px: key width (28) + gap (4)

    // Leading spaces encode extra width: each space adds KEY_W/16 (2px) to the base KEY_W.
    const KB_ROWS = [
        { keys: ['~','1','2','3','4','5','6','7','8','9','0','-','=','         Backspace'],  offset: 0 },
        { keys: ['  Tab','q','w','e','r','t','y','u','i','o','p','[',']',' \\'],         offset: 0 },
        { keys: ['        Caps','a','s','d','f','g','h','j','k','l',';',"'",'              Enter'], offset: 0 },
        { keys: ['               Shift','z','x','c','v','b','n','m',',','.','/','                          Shift'], offset: 0 },
        { keys: ['Ctrl ','Fn','Win','     Alt','                                                                               Spatie','        Alt', '', '',''], offset: 0 },
    ];

    function parseKey(raw) {
        const extraSpaces = raw.match(/^ */)[0].length;
        const k = raw.slice(extraSpaces);
        return { k, extraSpaces };
    }

    function renderKeyboard(activeLetters) {
        const active = new Set(activeLetters);
        const rowsHtml = KB_ROWS.map(({ keys, offset }) => {
            const keysHtml = keys.map(raw => {
                const { k, extraSpaces } = parseKey(raw);
                const width = KEY_W + extraSpaces * (KEY_W / 16);
                const cls = [
                    'kb-key',
                    active.has(k)   ? 'kb-active' : '',
                    extraSpaces > 0 ? 'kb-wide'   : '',
                ].filter(Boolean).join(' ');
                return `<span class="${cls}" style="width:${width}px;">${k}</span>`;
            }).join('');
            const marginLeft = offset ? `margin-left:${offset * KEY_W}px;` : '';
            return `<div class="kb-row" style="${marginLeft}">${keysHtml}</div>`;
        }).join('');
        return `<div class="kb-layout">${rowsHtml}</div>`;
    }

    app.keyboard = { renderKeyboard };
})();
