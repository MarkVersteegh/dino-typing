(function () {
    const app = window.MousePracticeApp = window.MousePracticeApp || {};

    function pick(arr) {
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Generate a word-like block.
    // maxRun controls max consecutive identical letters (1 = no doubles, 2 = doubles ok).
    // If mustInclude is set, at least one character must be from that set.
    function generateBlock(available, mustInclude, len, maxRun) {
        const chars = [];
        for (let i = 0; i < len; i++) {
            const run = maxRun || 1;
            const blocked = run === 1
                ? chars.slice(-1)
                : (chars.length >= run && chars.slice(-run).every(c => c === chars[chars.length - 1])
                    ? chars.slice(-1)
                    : []);
            const pool = blocked.length
                ? (available.filter(c => !blocked.includes(c)) || available)
                : available;
            chars.push(pick(pool.length ? pool : available));
        }
        if (mustInclude && mustInclude.length && !chars.some(c => mustInclude.includes(c))) {
            chars[Math.floor(Math.random() * len)] = pick(mustInclude);
        }
        return chars.join('');
    }

    function randomLen() { return 2 + Math.floor(Math.random() * 4); } // 2–5 chars

    // Build a pool of reusable word-blocks for one exercise.
    // variant 'a': every block contains a new letter, no double letters
    // variant 'b': ~70% of blocks contain a new letter, doubles allowed, more repetition
    // variant 'c': fully random, doubles allowed, no pool reuse
    function buildPool(level) {
        const available = level.letters.filter(l => l !== ' ' && l !== ';');
        const newLetters = (level.newLetters || []).filter(l => l !== ' ' && l !== ';');
        const variant    = level.variant || 'c';
        const poolSize   = 5 + Math.floor(Math.random() * 3); // 5–7 blocks

        const pool = [];
        for (let i = 0; i < poolSize; i++) {
            let mustInclude = null;
            if (variant === 'a') {
                mustInclude = newLetters;
            } else if (variant === 'b' && Math.random() < 0.7) {
                mustInclude = newLetters;
            }
            const maxRun = variant === 'a' ? 1 : 2;
            pool.push(generateBlock(available, mustInclude, randomLen(), maxRun));
        }
        return pool;
    }

    // Fill a line by drawing from the pool with optional repetition.
    // repeatChance: probability of repeating the previous block (drill effect).
    // For variant 'c', words are generated fresh each time (no pool reuse).
    function buildLine(pool, targetLength, level, repeatChance) {
        const available = level.letters.filter(l => l !== ' ' && l !== ';');
        const isC = (level.variant || 'c') === 'c';
        const words = [];
        let used = 0;
        while (true) {
            const space = words.length > 0 ? 1 : 0;
            const remaining = targetLength - used - space;
            if (remaining <= 0) break;

            let word;
            if (isC) {
                // Fresh word each time, capped to remaining length
                const len = Math.min(randomLen(), remaining);
                if (len < 2) break;
                word = generateBlock(available, null, len, 2);
            } else {
                const candidates = pool.filter(w => w.length <= remaining);
                if (!candidates.length) break;
                const prev = words[words.length - 1];
                word = (prev && prev.length <= remaining && Math.random() < repeatChance)
                    ? prev
                    : pick(candidates);
            }

            words.push(word);
            used += space + word.length;
        }
        return words.join(' ') + ' ';
    }

    function generateExercise(level, config, lineCount) {
        const count       = lineCount || config.exerciseLineCount;
        const target      = config.minLineLength + Math.floor(Math.random() * config.lineLengthVariation);
        const pool        = buildPool(level);
        const variant     = level.variant || 'c';
        const repeatChance = variant === 'a' ? 0.35 : variant === 'b' ? 0.55 : 0;
        return Array.from({ length: count }, () => buildLine(pool, target, level, repeatChance));
    }

    app.exerciseGenerator = { generateExercise };
})();
