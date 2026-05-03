# Mouse Practice — Typen Leren

## Project overview
Statische HTML/CSS/JS typegame voor kinderen. Geen build-stap, geen bundler, geen npm — alles draait direct in de browser via `file://` of een lokale HTTP-server. Python-script voor content-download.

Drie gebruikersprofielen: Emmy, Joris, Mark (hardcoded). Voortgang per profiel opgeslagen in `localStorage`.

## Bestandsstructuur

```
index.html           — Hoofdpagina (game + collectie)
dinoadmin.html       — Admin-overzicht van alle dino's (tabel)
dino-detail.html     — Detailpagina per dino (afbeeldingen, stats)
styles.css           — Alle styling voor index.html

src/
  config.js          — Profielen, constanten (levels komen uit data/levels.js)
  state.js           — localStorage load/save, profielbeheer
  profiles.js        — Profielwidget UI (rondje rechtsboven)
  keyboard.js        — Keyboard-layout rendering (KB_ROWS + renderKeyboard)
  exercise-generator.js — Oefentekst genereren (pool-systeem, varianten a/b/c)
  typing-game.js     — Kern-gamelogica (input, cursor, voortgang, completer)
  dino-collection.js — Dino-collectie weergave (rarity-secties)
  dino-modal.js      — Dino-info overlay (tabs: Basis / Extra)
  stats.js           — Highscore-tabel per niveau
  app.js             — Initialisatie en bedrading van alle modules

data/
  dinos.js           — window.DINO_DB: alle 29 dino's met stats, beschrijving, links
  dinosaur-pictures.js — window.DINOSAUR_PICTURES_DB: gecachede HTML + globe-URL per dino
  levels.js          — window.TYPING_LEVELS: alle niveaudefinities (1a–5c)
  dinosaur-pictures-cache/ — Gecachede afbeeldingen per dino
  images/cards/      — Kaartplaatjes (PNG, gedownload via tools/)
  images/heroes/     — Hero-plaatjes (PNG)

tools/
  download_dino_content.py — Downloadt kaart/hero-plaatjes, DinosaurPictures.org cache,
                             Wikimedia Commons aanvulling (< 10 afbeeldingen → Wikimedia)
```

## Module-architectuur

Alle modules leven in `window.MousePracticeApp` (alias `app`). Laadvolgorde in `index.html`:
```
data/dinos → data/dinosaur-pictures → data/levels →
config → state → profiles → stats →
dino-modal → dino-collection → keyboard → exercise-generator → typing-game → app
```

**Circulaire afhankelijkheid** tussen `dino-modal` en `dino-collection` is opgelost via `collection.setModal(modal)` dat na beide initialisaties wordt aangeroepen.

**Extra-tab unlock**: klik op "Extra" in dino-modal → 4-regel oefening moet ≥ 70% accuraatheid halen → `game.startExtraExercise(callback, onOpenExtra)`.

## Niveausysteem

15 niveaus: 1a/1b/1c t/m 5a/5b/5c. Per groep zijn `letters` (alle bekende letters), `newLetters` (nieuw in deze groep) en `variant` ('a'/'b'/'c') gedefinieerd in `data/levels.js` (`window.TYPING_LEVELS`).

- **a**: elke oefenblok bevat een nieuwe letter
- **b**: ~60% van de blokken bevat een nieuwe letter  
- **c**: volledig random uit alle bekende letters

Exercise-generator (`exercise-generator.js`) maakt een pool van 5–7 herbruikbare woord-blokken en vult regels door herhaling (35% kans op herhaling vorig blok).

## Keyboard-layout (`keyboard.js`)

`KB_ROWS` bevat rijen met toets-strings. **Leading spaces = extra breedte**: elke spatie voegt `KEY_W/16 = 2px` toe aan de basisbreedte van `KEY_W = 32px`.

```js
'   Shift'   // 3 spaties → 32 + 3×2 = 38px breed
'      Backspace'  // 6 spaties → 32 + 6×2 = 44px
```

## Scorberekening

`score = charsPerMinute × (accuracy / 100)²`

Opgeslagen in `state.attempts[]`: `{ ts, level, speed, accuracy }`.

## Profielen & localStorage

| Key | Inhoud |
|-----|--------|
| `typing-profile` | actief profiel-id (`emmy`/`joris`/`mark`) |
| `typing-progress-mark` | voortgang Mark (gemigreerd van `typing-progress`) |
| `typing-progress-emmy` | voortgang Emmy |
| `typing-progress-joris` | voortgang Joris |

## Content downloaden

```bash
python tools/download_dino_content.py              # alles
python tools/download_dino_content.py --skip-images  # alleen DinosaurPictures + Wikimedia
python tools/download_dino_content.py --skip-wikimedia  # geen Wikimedia-aanvulling
python tools/download_dino_content.py --force        # herdownload bestaande bestanden
```

## Codeerstijl

- Vanilla JS, geen frameworks, geen TypeScript
- IIFE-patroon: `(function () { ... })()` per module
- Exports via `app.moduleName = { ... }`
- Geen comments tenzij de *waarom* niet vanzelf spreekt
- Geen error handling voor scenario's die niet kunnen voorkomen
- HTML-templating via template literals in JS (geen aparte template-engine)
- CSS: BEM-achtige naamgeving (`dino-rarity-heading`, `kb-key`, `kb-active`)

## Commit-conventies

Groepeer commits functioneel — niet per prompt, maar per afgerond onderdeel:
- Één commit per feature/bugfix/refactor
- Meerdere kleine edits aan hetzelfde onderdeel = één commit
- Formaat: `<werkwoord> <wat>` in het Nederlands of Engels, kort

## Wat Claude niet mag doen

- Geen npm, package.json, bundlers, of build-stappen introduceren
- Geen TypeScript of JSX
- Geen externe CDN-links toevoegen
- Geen `console.log` achterlaten
- Geen comments die beschrijven *wat* de code doet (namen zijn zelfverklarend)
- `data/dinos.js`, `data/dinosaur-pictures.js` en `data/dinosaur-pictures-cache/` zijn gegenereerde bestanden — niet handmatig bewerken



# General Guidelines
Behavioral guidelines to reduce common LLM coding mistakes. Merge with project-specific instructions as needed.

**Tradeoff:** These guidelines bias toward caution over speed. For trivial tasks, use judgment.

## 1. Think Before Coding

**Don't assume. Don't hide confusion. Surface tradeoffs.**

Before implementing:
- State your assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them - don't pick silently.
- If a simpler approach exists, say so. Push back when warranted.
- If something is unclear, stop. Name what's confusing. Ask.

## 2. Simplicity First

**Minimum code that solves the problem. Nothing speculative.**

- No features beyond what was asked.
- No abstractions for single-use code.
- No "flexibility" or "configurability" that wasn't requested.
- No error handling for impossible scenarios.
- If you write 200 lines and it could be 50, rewrite it.

Ask yourself: "Would a senior engineer say this is overcomplicated?" If yes, simplify.

## 3. Surgical Changes

**Touch only what you must. Clean up only your own mess.**

When editing existing code:
- Don't "improve" adjacent code, comments, or formatting.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.
- If you notice unrelated dead code, mention it - don't delete it.

When your changes create orphans:
- Remove imports/variables/functions that YOUR changes made unused.
- Don't remove pre-existing dead code unless asked.

The test: Every changed line should trace directly to the user's request.

## 4. Goal-Driven Execution

**Define success criteria. Loop until verified.**

Transform tasks into verifiable goals:
- "Add validation" → "Write tests for invalid inputs, then make them pass"
- "Fix the bug" → "Write a test that reproduces it, then make it pass"
- "Refactor X" → "Ensure tests pass before and after"

For multi-step tasks, state a brief plan:
```
1. [Step] → verify: [check]
2. [Step] → verify: [check]
3. [Step] → verify: [check]
```

Strong success criteria let you loop independently. Weak criteria ("make it work") require constant clarification.

---

**These guidelines are working if:** fewer unnecessary changes in diffs, fewer rewrites due to overcomplication, and clarifying questions come before implementation rather than after mistakes.