// class Answer {
//     public answerText: string;
//     private isCorrectAnswer: boolean;

//     constructor(_answerText: string, _isCorrectAnswer: boolean) {
//         this.answerText = _answerText;
//         this.isCorrectAnswer = _isCorrectAnswer;
//     }

//     get getIsCorrectAnswer(): boolean {
//         return this.isCorrectAnswer;
//     }

//     set IsCorrectAnswer(_isCorrectAnswer: boolean) {
//         this.isCorrectAnswer = _isCorrectAnswer;
//     }
// }

// class Question {
//     public questionText: string;
//     public possibleAnswers: Answer[];

//     constructor(_questionText: string, _possibleAnswers: Answer[]) {
//         this.questionText = _questionText;
//         this.possibleAnswers = _possibleAnswers;
//     }

//     checkAllAnswers(): void {
//         let countCorrectAnswers: number = 0;

//         for (let i: number = 0; i < this.possibleAnswers.length; i++) {      
//             if (this.possibleAnswers[i].getIsCorrectAnswer)
//                 countCorrectAnswers++;
//         }

//         if (countCorrectAnswers > 1 || countCorrectAnswers <= 0) {
//             for (let i: number = 0; i < this.possibleAnswers.length; i++)   
//                 this.possibleAnswers[i].IsCorrectAnswer = false;
//             this.possibleAnswers[0].IsCorrectAnswer = true;
//         }
//     }
// }


// let preDefinedQuestions: Question[] = [new Question("Wie alt ist Manuel Proß", [new Answer("25", false), new Answer("24", true)]), new Question("Wer ist der absolute King", [new Answer("Manuel Proß", true), new Answer("Irgend jemand sonst", false)])];
// let correctAnswers: number = 0;

// getUserChoice();

// function getUserChoice(): void {
//     let choice: number = parseInt(prompt("1. Neue Frage erstellen?\n2. Neue Frage beantworten?\n3. Beenden?\n(1/2/3)", "2"));
    
//     if (isNaN(choice) || choice > 3 || choice < 1)
//         choice = 3;

//     switch (choice) {
//         case 1: 
//             generateNewQuestion();
//             break;
//         case 2: 
//             if (preDefinedQuestions.length > 0)
//                 askQuestion();
//             else {
//                 console.log("Alle Fragen wurden beantwortet");
//                 console.log("Richtig beantwortete Fragen: " + correctAnswers);
//             }
//             break;
//         case 3:
//             console.log("Richtig beantwortete Fragen: " + correctAnswers);
//             break;
//     }
// }


// function generateNewQuestion(): void {
//     let newQuestionText: string = prompt("Wie lautet Ihre Frage?", "Wie heißt der Boss?");
//     let answerCount: number = parseInt(prompt("Wie viele Antwortmöglichkeiten hat die Frage?   ", "4"));

//     if (isNaN(answerCount) || answerCount > 6 || answerCount <= 0)
//         answerCount = 2;

//     let newQuestion: Question = new Question(newQuestionText, new Array(answerCount));

//     for (let i: number = 0; i < answerCount; i++) {
//         let newAnswerText: string = prompt("Wi e lautet Ihre " + (i + 1) + " Antwort? (Markieren sie die richtige Antwort mit einem Leerzeichen und 'j' an letzter Stelle).\nZ.B: '14 j'\n Hinweis: Bei einer ungültigen Eingabe wird automatisch die '1' ausgewählt.)", "14 j");
//         if (newAnswerText.slice(-2) == " j") {
//             newAnswerText = newAnswerText.substring(0, newAnswerText.length - 2);
//             newQuestion.possibleAnswers[i] = new Answer(newAnswerText, true);
//         }
//         else   
//             newQuestion.possibleAnswers[i] = new Answer(newAnswerText, false); 
//     }

//     newQuestion.checkAllAnswers();
//     preDefinedQuestions.push(newQuestion);
//     getUserChoice();
// }

// function askQuestion(): void {

//     let randomQuestionInd: number = Math.floor(Math.random() * preDefinedQuestions.length);
//     let randomQuestion: Question = preDefinedQuestions[randomQuestionInd];
//     preDefinedQuestions.splice(randomQuestionInd, 1);
//     let randomQuestionAnswersLength: number = randomQuestion.possibleAnswers.length;
//     let randomQuestionAnswersAll: string = "";

//     for (let i: number = 0; i < randomQuestionAnswersLength; i++) {
//         randomQuestionAnswersAll += "Antwort " + (i + 1) + ": " + randomQuestion.possibleAnswers[i].answerText + "\n";
//     }

//     let userAnswer: number = parseInt(prompt("Frage: " + randomQuestion.questionText + "\n" + randomQuestionAnswersAll, "1"));

//     if (isNaN(userAnswer) || userAnswer > randomQuestionAnswersLength || userAnswer <= 1)
//         userAnswer = 1;

//     if (randomQuestion.possibleAnswers[userAnswer - 1].getIsCorrectAnswer) {
//         console.log("richtig");
//         correctAnswers++;
//     } else 
//         console.log("falsch");  

//     getUserChoice();
// }
