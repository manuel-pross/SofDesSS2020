"use strict";
class Question {
    constructor(_questionText) {
        this.questionText = _questionText;
    }
}
class YesNoQuestion extends Question {
    constructor(_questionText, _isAnswerYes) {
        super(_questionText);
        this.isAnswerYes = _isAnswerYes;
    }
    compareWithUserAnswer(_userAnswer) {
        if (_userAnswer == "j" && this.isAnswerYes)
            return true;
        else
            return false;
    }
    toString() {
        return this.questionText + " (j/n)";
    }
}
class EstimateQuestion extends Question {
    constructor(_questionText, _upperLimit, _lowerLimit) {
        super(_questionText);
        this.upperLimit = _upperLimit;
        this.lowerLimit = _lowerLimit;
    }
    compareWithUserAnswer(_userAnswer) {
        let answerAsNumber = parseInt(_userAnswer);
        if (isNaN(answerAsNumber))
            answerAsNumber = 50;
        if (answerAsNumber >= this.lowerLimit && answerAsNumber <= this.upperLimit)
            return true;
        else
            return false;
    }
    toString() {
        return this.questionText + " (Zahlenwert)";
    }
}
class MultipleChoiceQuestion extends Question {
    constructor(_questionText, _possibleAnswers) {
        super(_questionText);
        this.possibleAnswers = _possibleAnswers;
    }
    compareWithUserAnswer(_userAnswers) {
        let areUserAnswersCorrect = true;
        let userAnswerAsArray = _userAnswers.split(",").map(function (_item) {
            if (isNaN(parseInt(_item)))
                return 0;
            else
                return parseInt(_item);
        });
        let countCorrectAnswers = 0;
        for (let i = 0; i < this.possibleAnswers.length; i++) {
            if (this.possibleAnswers[i].getIsAnswerCorrect)
                countCorrectAnswers++;
        }
        if (userAnswerAsArray.length != countCorrectAnswers)
            return false;
        for (let i = 0; i < userAnswerAsArray.length; i++) {
            if (this.possibleAnswers[userAnswerAsArray[i] - 1].getIsAnswerCorrect)
                areUserAnswersCorrect = true;
            else
                areUserAnswersCorrect = false;
        }
        return areUserAnswersCorrect;
    }
    toString() {
        let answersAsOneString = this.questionText + "\n";
        for (let i = 0; i < this.possibleAnswers.length; i++) {
            answersAsOneString += "Antwort " + (i + 1) + ": " + this.possibleAnswers[i].answerText + "\n";
        }
        return answersAsOneString + "\n Geben sie die Nummern der Antworten ein die sie für richtige halten (Bsp: 1,3)";
    }
}
class FreeTextQuestion extends Question {
    constructor(_questionText, _answerText) {
        super(_questionText);
        this.answerText = _answerText;
    }
    compareWithUserAnswer(_userAnswer) {
        if (_userAnswer == this.answerText)
            return true;
        else
            return false;
    }
    toString() {
        return this.questionText + " (Freie Texteingabe)";
    }
}
class Answer {
    constructor(_answerText, _isAnswerCorrect) {
        this.answerText = _answerText;
        this.isAnswerCorrect = _isAnswerCorrect;
    }
    get getIsAnswerCorrect() {
        return this.isAnswerCorrect;
    }
}
let preDefinedQuestions = [new YesNoQuestion("Ist Manuel Proß die geilste Sau unter der Sonne", true), new EstimateQuestion("Auf einer Skala von 1 - 10, wie geil ist Manuel Proß?", 10, 9), new MultipleChoiceQuestion("Welche Attribute bezüglich Manuel Proß treffen zu?", [new Answer("geil", true), new Answer("scheiße", false), new Answer("bescheiden", true), new Answer("kernbehindert", false)]), new FreeTextQuestion("Nenne die Eigenschaft die Manuel Proß am besten beschreibt!", "geil")];
let correctAnswers = 0;
let questionsLength = preDefinedQuestions.length;
getUserChoice();
function getUserChoice() {
    let choice = parseInt(prompt("1. Bestehende Frage beantworten?\n2. Neue Frage hinzufügen?\n3. Beenden?\n(1/2/3)", "1"));
    if (isNaN(choice) || choice > 3 || choice < 1)
        choice = 4;
    switch (choice) {
        case 1:
            if (preDefinedQuestions.length > 0)
                askQuestion();
            else {
                console.log("Alle Fragen wurden beantwortet");
                console.log("Richtig beantwortete Fragen: " + correctAnswers + " von " + questionsLength);
            }
            break;
        case 2:
            generateNewQuestion();
            questionsLength++;
            break;
        case 3:
            console.log("Richtig beantwortete Fragen: " + correctAnswers + " von " + questionsLength);
            break;
        default:
            console.log("Inkorrekte Eingabe");
            getUserChoice();
            break;
    }
}
function generateNewQuestion() {
    let choice = parseInt(prompt("Was für eine Art Frage wollen sie erstellen?\n1. Ja/Nein Frage\n2. Schätz Frage?\n3. Multiple Choice Frage?\n4.Freitext Frage\n(1/2/3/4)\n Hinweis: Bei Falscheingabe wird automatisch '4' ausgewählt", "4"));
    if (isNaN(choice) || choice > 4 || choice < 1)
        choice = 4;
    let newQuestionText = "";
    switch (choice) {
        case 1:
            newQuestionText = prompt("Wie lautet die neue Ja/Nein Frage?", "Ist Mayonaise ein Instrument?");
            let newQuestionAnswerAsString = prompt("Ist die entsprechende Antwort darauf ja oder nein? (y/n)\nHinweis: Bei Falscheingabe wird automatisch 'y' gesetzt.", "y");
            let newQuestionAnswerAsBoolean = false;
            if (newQuestionAnswerAsString != "y" && newQuestionAnswerAsString != "n")
                newQuestionAnswerAsString = "y";
            newQuestionAnswerAsString == "y" ? newQuestionAnswerAsBoolean = true : newQuestionAnswerAsBoolean = false;
            preDefinedQuestions.push(new YesNoQuestion(newQuestionText, newQuestionAnswerAsBoolean));
            break;
        case 2:
            newQuestionText = prompt("Wie lautet die neue Schätzfrage?", "Wie viele Fenster habe ich im Zimmer?");
            let upperLimit = parseInt(prompt("Oberes Limit der Schätzung? Hinweis: Bei Falscheingabe wird automatisch '50' gesetzt. Bei falscher Reihenfolge der Limits werden sie getauscht.", "50"));
            let lowerLimit = parseInt(prompt("Unteres Limit der Schätzung? Bei Falscheingabe wird automatisch '25' gesetzt. Bei falscher Reihenfolge der Limits werden sie getauscht.", "25"));
            if (isNaN(upperLimit))
                upperLimit = 50;
            if (isNaN(lowerLimit))
                lowerLimit = 25;
            if (upperLimit < lowerLimit) {
                lowerLimit = [upperLimit, upperLimit = lowerLimit][0];
            }
            preDefinedQuestions.push(new EstimateQuestion(newQuestionText, upperLimit, lowerLimit));
            break;
        case 3:
            newQuestionText = prompt("Wie lautet die neue Multiple Choice Frage?", "Welche der folgenden Aussagen ist richtig?");
            let answerPossibilities = parseInt(prompt("Wie viele Antwortmöglichkeiten hat die Frage? (2 - 6)\n Hinweis: Bei Falscheingabe wird automatisch '2' gesetzt", "2"));
            if (isNaN(answerPossibilities) || answerPossibilities > 6 || answerPossibilities < 2)
                answerPossibilities = 2;
            let newQuestion = new MultipleChoiceQuestion(newQuestionText, new Array(answerPossibilities));
            for (let i = 0; i < answerPossibilities; i++) {
                let newAnswerText = prompt("Wie lautet die " + (i + 1) + ". Antwort?\n Hinweis: Markieren sie die richtigen Antworten mit einem Leerzeichen und 'y' an letzter Stelle (Siehe Textfeld).", "Manuel ist Bombe y");
                if (newAnswerText.slice(-2) == " y") {
                    newAnswerText = newAnswerText.substring(0, newAnswerText.length - 2);
                    newQuestion.possibleAnswers[i] = new Answer(newAnswerText, true);
                }
                else
                    newQuestion.possibleAnswers[i] = new Answer(newAnswerText, false);
            }
            preDefinedQuestions.push(newQuestion);
            break;
        default:
            newQuestionText = prompt("Wie lautet die neue Freitext Frage?", "Vervollständigen sie den Satz: Manuel ist der...");
            let newAnswerText = prompt("Wie lautet die genaue/einzige Antwortmöglichkeit?", "Boss");
            preDefinedQuestions.push(new FreeTextQuestion(newQuestionText, newAnswerText));
            break;
    }
    getUserChoice();
}
function askQuestion() {
    let randomQuestionInd = Math.floor(Math.random() * preDefinedQuestions.length);
    let randomQuestion = preDefinedQuestions[randomQuestionInd];
    preDefinedQuestions.splice(randomQuestionInd, 1);
    let userAnswer = prompt(randomQuestion.toString(), "Ihre Antwort");
    if (randomQuestion.compareWithUserAnswer(userAnswer)) {
        correctAnswers++;
        console.log("Richtig!");
    }
    else {
        console.log("Falsch");
    }
    getUserChoice();
}
console.log(preDefinedQuestions);
//# sourceMappingURL=Main.js.map