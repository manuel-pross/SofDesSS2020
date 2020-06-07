"use strict";
class Question {
    constructor(_questionText, _answers = [""]) {
        this.questionText = _questionText;
        this.answers = _answers;
    }
}
class YesNoQuestion extends Question {
    constructor(_questionText, _rightAnswer) {
        super(_questionText);
        this.rightAnswer = _rightAnswer;
    }
    answersCheck() {
        console.log("answersCheck()");
    }
}
class GuessQueston extends Question {
    constructor(_questionText, _answer, _rigthAnswer, _tolerance) {
        super(_questionText, _answer);
        this.rightAnswer = _rigthAnswer;
        this.tolerance = _tolerance;
    }
    answersCheck() {
        console.log("GuessQuestion answercheck()");
    }
}
class NormalQuestion extends Question {
    constructor(_questionText, _answer, _rightAnswer) {
        super(_questionText, _answer);
        this.rightAnswer = _rightAnswer;
    }
    answersCheck() {
        console.log("NormalQuestion answersCheck()");
    }
}
class TextQuestion extends Question {
    constructor(_questionText, _answer, _rightAnswer) {
        super(_questionText, _answer);
        this.rightAnswer = _rightAnswer;
    }
    answersCheck() {
        console.log("TextQuestion answersCheck()");
    }
}
class MCQuestion extends Question {
    constructor(_questionText, _answers, _rightAnswer) {
        super(_questionText, _answers);
        this.rightAnswer = _rightAnswer;
    }
    answersCheck() {
        console.log("McQuestion answersCheck()");
    }
}
let defaultQuestions = [new YesNoQuestion("Ist der Film 'Mononoke Hime' Film von Hayao Miyazaki?", true), new GuessQueston("Wann fand die Schlacht von Sekigahara statt?", [""], 1600, [5, 7]), new NormalQuestion("Wie heißt der erfolgreichste Film von Hayao Miyazaki? (englisch)", ["Spirited Away", "My neighbour Totoro"], "Spirited Away"), new TextQuestion("Gegen wen focht Musashi Miyamoto sein legendäres Duell auf Ganryu-Island?", ["Sasaki Kojiro", "Takezo Shimmen"], "Sasaki Kojiro"), new MCQuestion("Was auch immer das für eine Frage ist?", ["penner", "hurensohn"], 1)];
let score = 0;
let mode = parseInt(prompt("1. Frage hinzufügen?\n2. Bestehende Frage beantworten?\n3. Beenden?\n(1/2/3)", "1"));
switch (mode) {
    case 1:
        addQuestion();
        break;
    case 2:
        startQuiz();
        console.log(score);
        break;
    default:
        console.log(score);
        break;
}
function addQuestion() {
    let select = parseInt(prompt("Welche Art von Frage wollen sie hinzufügen?\n1. Ja/Nein - Frage\n2. Schätz - Frage\n3. Normale - Frage\n4. MC - Frage\n 5. Text - Frage", "1"));
    switch (select) {
        case 1:
            makeYesNoQuestion();
            break;
        case 2:
            makeGuessQuestion();
            break;
        case 3:
            makeNormalQuestion();
            break;
        case 4:
            makeMCQuestion();
            break;
        default:
            makeTextQuestion();
            break;
    }
}
function makeYesNoQuestion() {
    let questionText = prompt("Wie lautet die Frage?", "Bin ich ein Lappen?");
    let questionAnswer = prompt("Ist die Antwort ja oder nein? (yes/no)", "yes");
    let isAnswerCorrect = true;
    if (questionAnswer == "no")
        isAnswerCorrect = false;
    let newQuestion = new YesNoQuestion(questionText, isAnswerCorrect);
    defaultQuestions.push(newQuestion);
}
function makeGuessQuestion() {
    let questionText = prompt("Wie lautet die Frage?", "Wie alt bin ich?");
    let answer = parseInt(prompt("Genaue Nummer?", "24"));
    let minTolerance = parseInt(prompt("Toleranz?", "3"));
    let maxTolerance = parseInt(prompt("Toleranz?", "3"));
    let newQustion = new GuessQueston(questionText, [""], answer, [minTolerance, maxTolerance]);
    defaultQuestions.push(newQustion);
}
function makeNormalQuestion() {
    let answer = [];
    let isNewAnswer = "yes";
    let questionText = prompt("Wie lautet die Frage?", "Passende Attribute für mich");
    while (isNewAnswer == "yes") {
        let anAnswer = prompt("Mögliche Antwort", "geil");
        answer.push(anAnswer);
        isNewAnswer = prompt("Neue Antwort", "yes");
    }
    let newQustion = new NormalQuestion(questionText, answer, "");
    defaultQuestions.push(newQustion);
}
function makeMCQuestion() {
    let _rightAnswers = 0;
    let answers = [];
    let newRightAnswers = "yes";
    let newFalseAnswers = "yes";
    let questionText = prompt("Wie lautet die Frage?", "Passende Attribute für mich");
    while (newRightAnswers == "yes") {
        let rightAnswer = prompt("Richtige Antwort?", "geil");
        answers.push(rightAnswer);
        _rightAnswers++;
    }
    while (newFalseAnswers == "yes") {
        let falseAnswer = prompt("Falsche Antwort?", "geil");
        answers.push(falseAnswer);
        _rightAnswers++;
    }
    let newQustion = new MCQuestion(questionText, answers, _rightAnswers);
    defaultQuestions.push(newQustion);
}
function makeTextQuestion() {
    let questionText = prompt("Von wem ist der Roman 'Musashi'", "Eiji Yoshikawa");
    let answerText = prompt("Antwort", "Eiji Yoshikawa");
    let newQustion = new TextQuestion(questionText, [""], answerText);
    defaultQuestions.push(newQustion);
}
function startQuiz() {
    let questionSlot = 0;
    questionSlot = Math.floor(Math.random() * defaultQuestions.length);
    let randomQuestion = defaultQuestions[questionSlot];
    randomQuestion.answersCheck();
}
console.log(defaultQuestions);
//# sourceMappingURL=Main.js.map