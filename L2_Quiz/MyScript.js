"use strict";
System.register("Answer", [], function (exports_1, context_1) {
    "use strict";
    var Answer;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            Answer = class Answer {
                constructor(_answerText, _isCorrectAnswer) {
                    this.answerText = _answerText;
                    this.isCorrectAnswer = _isCorrectAnswer;
                }
            };
            exports_1("Answer", Answer);
        }
    };
});
startDialog();
function startDialog() {
    let preDefinedQuestions = [new Question("Wie alt ist Manuel Proß", [new Answer("25", false), new Answer("24", true)]), new Question("Wer ist der absolute King", [new Answer("Manuel Proß", true), new Answer("Irgend jemand sonst", false)])];
    let sNewQuestion = "j";
    while (sNewQuestion == "j") {
        sNewQuestion = prompt("Wollen sie eine neue Frage hinzufügen? (j/n)", "n");
        if (sNewQuestion != "j" && sNewQuestion != "n")
            sNewQuestion = "j";
        else if (sNewQuestion == "j") {
            preDefinedQuestions = generateNewQuestion(preDefinedQuestions);
        }
    }
}
function generateNewQuestion(_questions) {
    let newQuestionText = prompt("Wie lautet Ihre Frage?", "Wie heißt der Boss?");
    let answerCount = parseInt(prompt("Wie viele Antwortmöglichkeiten hat die Frage?", "4"));
    let newQuestion = new Question(newQuestionText, new Array(answerCount));
    for (let i = 0; i < answerCount; i++) {
        let newAnswerText = prompt("Wie lautet Ihre " + i + 1 + " Antwort? (Markieren sie die richtige Antwort mit einem Leerzeichen und 'j' an letzter Stelle). Z.B: '14 j')", "14 j");
        if (newAnswerText.slice(-1) == "j")
            newQuestion.possibleAnswers[i] = new Answer(newAnswerText, true);
        else
            newQuestion.possibleAnswers[i] = new Answer(newAnswerText, false);
    }
    _questions.push(newQuestion);
    return _questions;
}
System.register("Question", [], function (exports_2, context_2) {
    "use strict";
    var Question;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [],
        execute: function () {
            Question = class Question {
                constructor(_questionText, _possibleAnswers) {
                    this.questionText = _questionText;
                    this.possibleAnswers = _possibleAnswers;
                }
            };
            exports_2("Question", Question);
        }
    };
});
//# sourceMappingURL=MyScript.js.map