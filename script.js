/* ==========================================================
   DISCIPLINE DETECTIVE — EDITABLE QUESTION BANK
   Plain JavaScript; no backend, APIs, or build tools required.
   Each question has a scenario, four options, one correct answer,
   a teaching explanation, and a detective tip.
   ========================================================== */
const QUESTION_BANK = [
  {
    title: "The Missing Procedure",
    category: "PURPOSE OF DISCIPLINE",
    question: "What is the main purpose of a workplace disciplinary system?",
    scenario: "A new supervisor says discipline should mainly be used to punish employees who make mistakes. The HR team wants to establish a more constructive approach.",
    options: [
      "To punish employees publicly so others become afraid to make mistakes.",
      "To maintain standards, address misconduct fairly, and encourage improvement.",
      "To dismiss employees whenever a rule is broken.",
      "To let each supervisor create different rules for their own team."
    ],
    answer: 1,
    explanation: "A disciplinary system helps maintain workplace standards and correct unacceptable conduct. A fair process aims to improve behaviour, protect consistency, and apply appropriate consequences—not simply to punish.",
    tip: "Discipline should correct behaviour while protecting fairness."
  },
  {
    title: "The Rumour File",
    category: "FACT-FINDING",
    question: "A manager hears that an employee has been rude to a customer. What should happen first?",
    scenario: "A complaint reaches the manager through a colleague, but no one has yet checked what actually happened.",
    options: [
      "Issue a final written warning immediately.",
      "Reduce the employee’s pay as a precaution.",
      "Gather relevant facts and investigate the complaint impartially.",
      "Tell the whole department that the employee is guilty."
    ],
    answer: 2,
    explanation: "An allegation is not proof. The employer should establish the facts impartially, review available evidence, and hear relevant accounts before deciding what action—if any—is justified.",
    tip: "Facts first; assumptions are not evidence."
  },
  {
    title: "The Employee's Voice",
    category: "PROCEDURAL FAIRNESS",
    question: "Why should an employee normally be told the allegation and given a chance to respond?",
    scenario: "HR has collected evidence about a possible breach of a workplace safety rule and is preparing for a disciplinary meeting.",
    options: [
      "So the employee understands the concern and can explain their side before a decision.",
      "So the employee can choose the punishment.",
      "So HR can avoid documenting the meeting.",
      "So the employer can guarantee that no disciplinary action will follow."
    ],
    answer: 0,
    explanation: "Giving clear notice and a meaningful opportunity to respond supports procedural fairness. The response may clarify facts or provide context that should be considered before a decision is made.",
    tip: "A fair process hears the employee before deciding."
  },
  {
    title: "The Unequal Rulebook",
    category: "CONSISTENCY",
    question: "Two employees commit similar misconduct in similar circumstances. What is the fairest approach?",
    scenario: "One employee is a high performer and the other is new. Their supervisor wants to discipline only the new employee.",
    options: [
      "Discipline only the new employee to set an example.",
      "Ignore both cases because discipline may upset the team.",
      "Automatically dismiss both employees.",
      "Apply the policy consistently while considering relevant differences in the evidence and circumstances."
    ],
    answer: 3,
    explanation: "Consistency means comparable cases should be treated comparably. It does not mean every case must receive an identical outcome; relevant facts, seriousness, prior records, and mitigating circumstances can matter.",
    tip: "Consistent does not always mean identical."
  },
  {
    title: "The Small Mistake",
    category: "PROPORTIONALITY",
    question: "An employee is late once because of an unusual transport disruption and informs the supervisor. What should the supervisor consider?",
    scenario: "The employee has a good attendance record and provides a reasonable explanation. No serious harm occurred.",
    options: [
      "Dismiss the employee immediately to show zero tolerance.",
      "Consider the circumstances and use a proportionate response, such as guidance if appropriate.",
      "Ignore all future lateness by this employee.",
      "Issue the most severe penalty allowed by the policy."
    ],
    answer: 1,
    explanation: "A response should be proportionate to the seriousness of the conduct and the circumstances. A minor first incident with a reasonable explanation may call for guidance rather than a severe penalty, subject to policy and the facts.",
    tip: "Match the response to the seriousness of the conduct."
  },
  {
    title: "The Warning Ladder",
    category: "PROGRESSIVE DISCIPLINE",
    question: "What does progressive discipline generally mean?",
    scenario: "A company policy sets out coaching, a written warning, a final warning, and possible dismissal for repeated misconduct, depending on the case.",
    options: [
      "Every employee must receive every stage, even for serious misconduct.",
      "The supervisor can skip documentation whenever they are busy.",
      "Responses may become more serious for repeated misconduct, while serious cases may justify a different response under policy and law.",
      "Employees decide which stage applies to them."
    ],
    answer: 2,
    explanation: "Progressive discipline generally uses increasingly serious steps to correct repeated misconduct. It is not an inflexible checklist: serious misconduct, the applicable policy, and employment law may affect the appropriate process and outcome.",
    tip: "Progressive steps can help correct repeated behaviour."
  },
  {
    title: "The Paper Trail",
    category: "DOCUMENTATION",
    question: "Why should HR keep accurate records of disciplinary matters?",
    scenario: "A supervisor wants to handle a warning verbally and keep no record, even though the organisation’s policy requires documentation.",
    options: [
      "Records support consistency, show what process was followed, and provide a reliable reference for later review.",
      "Records make the employee automatically guilty.",
      "Records replace the need to investigate or hear the employee.",
      "Records should be shared with every employee in the organisation."
    ],
    answer: 0,
    explanation: "Accurate, confidential records help show the allegation, evidence, employee response, decision, and reasons. Documentation supports accountability but does not replace a fair investigation or justify unrestricted sharing.",
    tip: "Record facts and decisions; protect confidentiality."
  },
  {
    title: "The Conflict of Interest",
    category: "IMPARTIALITY",
    question: "The person asked to investigate a complaint is directly involved in the disagreement. What is the best response?",
    scenario: "An employee complains about their line manager. The line manager offers to investigate the complaint personally.",
    options: [
      "Let the manager investigate because they know the people involved.",
      "Close the complaint because a conflict exists.",
      "Ask the manager to decide the outcome before gathering evidence.",
      "Arrange for an impartial person to handle the investigation where practicable."
    ],
    answer: 3,
    explanation: "An investigator should be impartial and avoid actual or apparent conflicts of interest. Where practicable, another suitable person should investigate so the process can be trusted.",
    tip: "A fair investigator must be impartial."
  },
  {
    title: "The Appeal Door",
    category: "REVIEW AND APPEAL",
    question: "What is a useful purpose of an internal appeal or review stage, where provided by policy?",
    scenario: "After receiving a written warning, an employee believes important evidence was overlooked and wants the decision reconsidered.",
    options: [
      "To guarantee that the original decision is always cancelled.",
      "To provide a way to review the decision or process and consider relevant concerns.",
      "To allow the employee to remove all records from HR.",
      "To make the disciplinary process public."
    ],
    answer: 1,
    explanation: "An appeal or review can help identify overlooked evidence, procedural problems, or an outcome that may need reconsideration. The available process depends on organisational policy and applicable law.",
    tip: "Review mechanisms can help correct errors."
  },
  {
    title: "The New Evidence Test",
    category: "APPLY YOUR LEARNING",
    question: "A warehouse employee is accused of taking stock. CCTV is unclear, and the employee says they moved the item to a safety area. What should HR do next?",
    scenario: "This is a new case. The supervisor wants to dismiss the employee today because the allegation sounds serious.",
    options: [
      "Dismiss the employee immediately because stock is involved.",
      "Ask other employees to vote on whether the employee is guilty.",
      "Secure and review relevant evidence, hear the employee’s explanation, follow the fair process, and decide based on the findings.",
      "Delete the CCTV because it does not clearly prove anything."
    ],
    answer: 2,
    explanation: "A serious allegation still requires a fair, evidence-based process. HR should preserve and assess relevant evidence, give the employee a chance to respond, follow policy and applicable law, and make a reasoned decision based on the findings.",
    tip: "Serious allegations need careful evidence—not rushed conclusions."
  }
];

const $ = (id) => document.getElementById(id);
const screens = ["homeScreen", "instructionsScreen", "gameScreen", "resultsScreen"];
let currentIndex = 0;
let score = 0;
let selectedFirstAnswer = null;
let solved = false;
let untimed = true;
let responseHistory = [];
let sessionStarted = false;

function showScreen(id) {
  screens.forEach((screenId) => $(screenId).classList.toggle("hidden", screenId !== id));
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function startFlow() {
  untimed = $("untimedToggle").checked;
  sessionStarted = true;
  currentIndex = 0;
  score = 0;
  selectedFirstAnswer = null;
  solved = false;
  responseHistory = QUESTION_BANK.map(() => ({ correct: false, chosen: null, attempts: 0 }));
  showScreen("instructionsScreen");
}
function beginGame() {
  showScreen("gameScreen");
  renderQuestion();
}
function renderQuestion() {
  const q = QUESTION_BANK[currentIndex];
  selectedFirstAnswer = null;
  solved = false;
  $("caseTitle").textContent = `Case ${String(currentIndex + 1).padStart(2, "0")}: ${q.title}`;
  $("sidebarCase").textContent = `CASE ${String(currentIndex + 1).padStart(2, "0")}`;
  $("questionCategory").textContent = q.category;
  $("questionText").textContent = q.question;
  $("scenarioText").textContent = q.scenario;
  $("detectiveTip").textContent = q.tip;
  $("caseStatus").textContent = "UNSOLVED";
  $("feedbackBox").classList.add("hidden");
  $("feedbackBox").classList.remove("incorrect-feedback");
  $("continueButton").classList.add("hidden");
  $("continueButton").textContent = currentIndex === QUESTION_BANK.length - 1 ? "VIEW RESULTS →" : "CONTINUE →";
  $("answerList").innerHTML = "";
  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.dataset.index = String(index);
    button.innerHTML = `<span class="answer-letter">${index + 1}</span><span class="answer-text"></span>`;
    button.querySelector(".answer-text").textContent = option;
    button.addEventListener("click", () => chooseAnswer(index));
    $("answerList").appendChild(button);
  });
  updateProgress();
}
function updateProgress() {
  $("progressLabel").textContent = `EVIDENCE ${currentIndex + 1} OF ${QUESTION_BANK.length}`;
  $("scoreLabel").textContent = `LEARNING SCORE: ${score} / ${QUESTION_BANK.length}`;
  const percent = (currentIndex / QUESTION_BANK.length) * 100;
  $("progressFill").style.width = `${percent}%`;
  $("progressTrack").setAttribute("aria-valuenow", String(currentIndex));
  $("caseDots").innerHTML = "";
  QUESTION_BANK.forEach((_, i) => {
    const dot = document.createElement("span");
    dot.className = "case-dot" + (i < currentIndex ? " solved" : "") + (i === currentIndex ? " current" : "");
    $("caseDots").appendChild(dot);
  });
}
function chooseAnswer(index) {
  if (solved) return;
  const q = QUESTION_BANK[currentIndex];
  const history = responseHistory[currentIndex];
  history.attempts += 1;
  if (history.chosen === null) history.chosen = index;
  const buttons = [...$("answerList").querySelectorAll("button")];
  buttons.forEach((button) => {
    button.classList.remove("correct", "incorrect");
    if (Number(button.dataset.index) === q.answer) button.classList.add("correct");
    if (Number(button.dataset.index) === index && index !== q.answer) button.classList.add("incorrect");
  });
  if (index === q.answer) {
    solved = true;
    history.correct = true;
    if (history.attempts === 1) score += 1;
    buttons.forEach((button) => button.disabled = true);
    $("caseStatus").textContent = "SOLVED";
    $("feedbackBox").classList.remove("hidden", "incorrect-feedback");
    $("feedbackIcon").textContent = "✓";
    $("feedbackTitle").textContent = history.attempts === 1 ? "Correct — evidence confirmed!" : "Correct — case solved!";
    $("feedbackText").textContent = q.explanation;
    $("continueButton").classList.remove("hidden");
    updateProgress();
  } else {
    $("feedbackBox").classList.remove("hidden");
    $("feedbackBox").classList.add("incorrect-feedback");
    $("feedbackIcon").textContent = "!";
    $("feedbackTitle").textContent = "Not quite. Re-examine the evidence.";
    $("feedbackText").textContent = "Try another answer. Hint: " + q.tip;
    // Keep options enabled so students can retry. Correct option is visually indicated only after a correct selection.
    buttons[index].setAttribute("aria-describedby", "feedbackBox");
  }
}
function continueGame() {
  if (!solved) return;
  if (currentIndex < QUESTION_BANK.length - 1) {
    currentIndex += 1;
    renderQuestion();
  } else {
    showResults();
  }
}
function showResults() {
  showScreen("resultsScreen");
  $("progressFill").style.width = "100%";
  $("progressTrack").setAttribute("aria-valuenow", String(QUESTION_BANK.length));
  $("finalScore").textContent = String(score);
  const percentage = Math.round((score / QUESTION_BANK.length) * 100);
  let headline, band, advice;
  if (percentage >= 90) {
    headline = "Excellent detective work.";
    band = "Fairness expert";
    advice = "You consistently identified fair, evidence-based disciplinary decisions. Keep applying these principles to new situations.";
  } else if (percentage >= 70) {
    headline = "A strong investigation.";
    band = "Skilled investigator";
    advice = "You understand many key principles. Revisit any missed cases below to strengthen your judgement.";
  } else if (percentage >= 50) {
    headline = "You found useful clues.";
    band = "Developing detective";
    advice = "Review the explanations below, especially the difference between allegations, evidence, and fair procedure.";
  } else {
    headline = "Every clue is a chance to learn.";
    band = "Investigation in training";
    advice = "Read each explanation carefully, then play again. Focus on fairness, impartial fact-finding, consistency, and proportionate action.";
  }
  $("resultHeadline").textContent = headline;
  $("resultIntro").textContent = `You solved all 10 cases with a learning score of ${score}/10 (${percentage}%). Your score reflects correct answers on the first attempt—not speed.`;
  $("resultBand").textContent = band;
  $("resultAdvice").textContent = advice;
  $("reviewList").innerHTML = "";
  QUESTION_BANK.forEach((q, i) => {
    const history = responseHistory[i];
    const item = document.createElement("article");
    item.className = "review-item";
    const status = document.createElement("div");
    status.className = "review-status" + (history.correct ? "" : " missed");
    status.textContent = history.correct ? "✓" : "!";
    const body = document.createElement("div");
    const title = document.createElement("h4");
    title.textContent = `${String(i + 1).padStart(2, "0")}. ${q.title}: ${q.question}`;
    const explanation = document.createElement("p");
    explanation.textContent = q.explanation;
    const chosen = document.createElement("p");
    chosen.className = "answer-given";
    chosen.textContent = history.correct
      ? `Correct answer: ${q.options[q.answer]}`
      : `Correct answer: ${q.options[q.answer]} • You needed ${history.attempts} attempt(s).`;
    body.append(title, explanation, chosen);
    item.append(status, body);
    $("reviewList").appendChild(item);
  });
}
function goHome() {
  sessionStarted = false;
  showScreen("homeScreen");
}
function restartGame() {
  currentIndex = 0;
  score = 0;
  responseHistory = QUESTION_BANK.map(() => ({ correct: false, chosen: null, attempts: 0 }));
  showScreen("gameScreen");
  renderQuestion();
}

$("startButton").addEventListener("click", startFlow);
$("beginButton").addEventListener("click", beginGame);
$("backHomeButton").addEventListener("click", goHome);
$("gameHomeButton").addEventListener("click", goHome);
$("brandHome").addEventListener("click", (event) => { event.preventDefault(); goHome(); });
$("continueButton").addEventListener("click", continueGame);
$("resultsHomeButton").addEventListener("click", goHome);
$("restartButton").addEventListener("click", restartGame);

// Keyboard controls: 1–4 select an answer; Enter continues after a case is solved.
document.addEventListener("keydown", (event) => {
  if (!$("gameScreen").classList.contains("hidden")) {
    if (["1", "2", "3", "4"].includes(event.key) && !solved) {
      const active = document.activeElement;
      if (active && ["INPUT", "TEXTAREA", "SELECT"].includes(active.tagName)) return;
      chooseAnswer(Number(event.key) - 1);
    } else if (event.key === "Enter" && solved && !$("continueButton").classList.contains("hidden")) {
      continueGame();
    }
  }
});

// This experience is intentionally untimed. The untimed control confirms the mode
// for students/teachers; no timer or speed bonus is used in either setting.
$("untimedToggle").addEventListener("change", (event) => {
  const label = event.target.closest(".toggle-row").querySelector("small");
  label.textContent = event.target.checked ? "No countdown — focus on learning." : "Still no countdown; take the time you need.";
});
