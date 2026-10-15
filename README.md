# Discipline Detective — HRM Learning Adventure

A complete, browser-based learning game for Diploma-level Human Resource Management students studying **Disciplinary Systems**. Built with plain HTML, CSS, and JavaScript; no backend, API key, installation, or build step is required.

## Learning outcome

By the end of the game, students should be able to explain the purpose and principles of a fair disciplinary system, identify appropriate procedures, and choose proportionate responses to workplace misconduct.

## Game format

- **Type:** Case-file adventure / workplace investigation.
- **Questions:** 10 multiple-choice cases, including a final new scenario that checks transfer of learning.
- **Language and level:** English, Diploma.
- **Duration:** Approximately 8–15 minutes, self-paced.
- **Scoring:** One point per question for a correct first answer. Incorrect answers can be retried and do not deduct points. No speed bonus is used.
- **Accessibility:** Responsive layout, keyboard shortcuts (1–4 and Enter), mouse/touch selection, visible feedback, and an untimed experience.

## Files

```text
discipline-detective-game/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Run locally

1. Download or unzip the project.
2. Open `index.html` in a modern browser (Chrome, Edge, Firefox, or Safari).
3. Select **Start Investigation**, read the instructions, and select **Open Case 01**.
4. Play through all 10 cases. The game runs locally without a server.

A local web server is optional, not required. If you use one, serve this folder as a static website.

## Publish with GitHub Pages

1. Sign in to GitHub and create a new repository, for example `discipline-detective`.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` to the **repository root** (not inside another nested folder).
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch**.
5. Select branch `main` and folder `/ (root)`, then save.
6. Wait for GitHub Pages to finish publishing. The site URL will usually look like `https://YOUR-USERNAME.github.io/discipline-detective/`.
7. Open the published URL and test the full game on desktop and mobile.

GitHub may take a few minutes to publish or update the site after a commit.

## Edit the question bank

Open `script.js` and find the clearly labelled section near the top:

```js
const QUESTION_BANK = [
  {
    title: "The Missing Procedure",
    category: "PURPOSE OF DISCIPLINE",
    question: "What is the main purpose ...?",
    scenario: "A new supervisor says ...",
    options: [
      "Option A",
      "Option B",
      "Option C",
      "Option D"
    ],
    answer: 1,
    explanation: "Why the correct answer is best...",
    tip: "A short hint for retrying."
  }
];
```

- `title`: short case name.
- `category`: learning concept shown above the question.
- `question`: the question students answer.
- `scenario`: case context.
- `options`: exactly four answer strings.
- `answer`: **zero-based** index of the correct option (`0` = first, `1` = second, `2` = third, `3` = fourth).
- `explanation`: teaching feedback shown when students answer correctly and in the final review.
- `tip`: hint shown after an incorrect answer.

Keep the question count at 10 unless you also update any text that refers to 10 questions. Keep the final question as a fresh application scenario if you want to preserve the transfer-of-learning check. Ensure each question has one clearly best answer and plausible distractors.

## Manual testing checklist

- [ ] Homepage loads and the Start Investigation button opens instructions.
- [ ] Home button on the instructions screen returns to the homepage.
- [ ] Open Case 01 starts the game at question 1.
- [ ] Selecting an incorrect answer shows a hint and permits another attempt.
- [ ] Selecting the correct answer shows an explanation and reveals Continue.
- [ ] Repeated clicks cannot score a question more than once.
- [ ] Continue advances to the next question only after a correct answer.
- [ ] Progress indicator, case dots, and score update.
- [ ] Keyboard 1–4 selects answers; Enter continues after a correct answer.
- [ ] Final question leads to the results screen.
- [ ] Results show score, performance feedback, and all ten learning explanations.
- [ ] Play Again resets score and progress.
- [ ] Home controls work from gameplay and results.
- [ ] Layout remains readable at desktop, tablet, and mobile widths.
- [ ] Game works without a network connection after the files are downloaded. (Google Fonts are optional; fallback fonts are provided.)

## Teaching note

The game teaches general HRM principles: fair process, impartial fact-finding, opportunity to respond, consistency, proportionality, progressive discipline, documentation, impartiality, and review/appeal mechanisms. Actual disciplinary requirements differ by organisation and jurisdiction. Adapt the material to your institution's teaching content, organisation policies, and applicable Malaysian employment law before using it as a formal compliance resource.
