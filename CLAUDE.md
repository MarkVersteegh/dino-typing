# Mouse Practice — Typen Leren

## Project overview
Statische HTML/CSS/JS typegame voor kinderen. Geen build-stap, geen bundler, geen npm — alles draait direct in de browser via `file://` of een lokale HTTP-server. Python-script voor content-download.

Drie gebruikersprofielen: Emmy, Joris, Mark (hardcoded). Voortgang per profiel opgeslagen in `localStorage`.

## Bestandsstructuur

```
typing.html          — Hoofdpagina (game + collectie)
dinoadmin.html       — Admin-overzicht van alle dino's (tabel)
dino-detail.html     — Detailpagina per dino (afbeeldingen, stats)
styles.css           — Alle styling voor typing.html

src/
  config.js          — Niveaudefinities, profielen, constanten
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
  images/cards/      — Kaartplaatjes (PNG, gedownload via tools/)
  images/heroes/     — Hero-plaatjes (PNG)
  images/dinosaur-pictures/{id}/ — Gecachede afbeeldingen per dino

tools/
  download_dino_content.py — Downloadt kaart/hero-plaatjes, DinosaurPictures.org cache,
                             Wikimedia Commons aanvulling (< 10 afbeeldingen → Wikimedia)
```

## Module-architectuur

Alle modules leven in `window.MousePracticeApp` (alias `app`). Laadvolgorde in `typing.html`:
```
config → state → profiles → stats → keyboard → exercise-generator →
dino-modal → dino-collection → typing-game → app
```

**Circulaire afhankelijkheid** tussen `dino-modal` en `dino-collection` is opgelost via `collection.setModal(modal)` dat na beide initialisaties wordt aangeroepen.

**Extra-tab unlock**: klik op "Extra" in dino-modal → 4-regel oefening moet ≥ 70% accuraatheid halen → `game.startExtraExercise(callback, onOpenExtra)`.

## Niveausysteem

15 niveaus: 1a/1b/1c t/m 5a/5b/5c. Per groep zijn `letters` (alle bekende letters), `newLetters` (nieuw in deze groep) en `variant` ('a'/'b'/'c') gedefinieerd in `config.js`.

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
- `data/dinos.js` en `data/dinosaur-pictures.js` zijn gegenereerde bestanden — niet handmatig bewerken
