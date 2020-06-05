abstract class Question {
    public questionText: string;
    public answers: string[];

    constructor(_questionText: string, _answers: string[] = [""]) {
        this.questionText = _questionText;
        this.answers = _answers;
    }
    public abstract answersCheck(): void;
}

class YesNoQuestion extends Question {
    public rightAnswer: boolean;

    constructor(_questionText: string, _rightAnswer: boolean) {
        super(_questionText);
        this.rightAnswer = _rightAnswer;
    }

    public answersCheck(): void {
        console.log("answersCheck()");
    }
}

class GuessQueston extends Question {
    public rightAnswer: number;
    public tolerance: number[];

    constructor(_questionText: string, _answer: string[], _rigthAnswer: number, _tolerance: number[]) {
        super(_questionText, _answer);
        this.rightAnswer = _rigthAnswer;
        this.tolerance = _tolerance;
    }

    public answersCheck(): void {
        let rightAnswer: number = 0;
        let userAnswer: number = parseInt(prompt("Antwort", "1"));
    }
}

class NormalQuestion extends Question {
    public rightAnswer: string;

    constructor(_questionText: string, _answer: string[], _rightAnswer: string) {
        super(_questionText, _answer);
        this.rightAnswer = _rightAnswer;
    }

    public answersCheck(): void {
        console.log("NormalQuestion answersCheck()");
    }
}

class TextQuestion extends Question {
    public rightAnswer: string;

    constructor(_questionText: string, _answer: string[], _rightAnswer: string) {
        super(_questionText, _answer);
        this.rightAnswer = _rightAnswer;
    }

    public answersCheck(): void {
        console.log("TextQuestion answersCheck()");
    }
}

class MCQuestion extends Question {
    public rightAnswer: number;

    constructor(_questionText: string, _answers: string[], _rightAnswer: number) {
        super(_questionText, _answers);
        this.rightAnswer = _rightAnswer;
    }

    public answersCheck(): void {
        console.log("McQuestion answersCheck()");
    }
}

let defaultQuestions: Question[] = [new YesNoQuestion("Ist der Film 'Mononoke Hime' Film von Hayao Miyazaki?", true), new GuessQueston("Wann fand die Schlacht von Sekigahara statt?", [""], 1600, [5, 7]), new NormalQuestion("Wie heißt der erfolgreichste Film von Hayao Miyazaki? (englisch)", ["Spirited Away", "My neighbour Totoro"], "Spirited Away"), new TextQuestion("Gegen wen focht Musashi Miyamoto sein legendäres Duell auf Ganryu-Island?", ["Sasaki Kojiro", "Takezo Shimmen"], "Sasaki Kojiro"), new MCQuestion("Was auch immer das für eine Frage ist?", ["penner", "hurensohn"], 1)];
let score: number = 0;

let mode: number = parseInt(prompt("1. Frage hinzufügen?\n2. Bestehende Frage beantworten?\n3. Beenden?\n(1/2/3)", "1"));

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

function addQuestion(): void {
    let select: number = parseInt(prompt("Welche Art von Frage wollen sie hinzufügen?\n1. Ja/Nein - Frage\n2. Schätz - Frage\n3. Normale - Frage\n4. MC - Frage\n 5. Text - Frage", "1"));
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

function makeYesNoQuestion(): void {
    let questionText: string = prompt("Wie lautet die Frage?", "Bin ich ein Lappen?");
    let questionAnswer: string = prompt("Ist die Antwort ja oder nein? (yes/no)", "yes");

    let isAnswerCorrect: boolean = true;

    if (questionAnswer == "no")
        isAnswerCorrect = false;

    let newQuestion: YesNoQuestion = new YesNoQuestion(questionText, isAnswerCorrect);
    defaultQuestions.push(newQuestion);
}

function makeGuessQuestion(): void {
    let questionText: string = prompt("Wie lautet die Frage?", "Wie alt bin ich?");
    let answer: number = parseInt(prompt("Genaue Nummer?", "24"));
    let minTolerance: number = parseInt(prompt("Toleranz?", "3"));
    let maxTolerance: number = parseInt(prompt("Toleranz?", "3"));

    let newQustion: GuessQueston = new GuessQueston(questionText, [""], answer, [minTolerance, maxTolerance]);

    defaultQuestions.push(newQustion);
}

function makeNormalQuestion(): void {
    let answer: string[] = [];
    let isNewAnswer: string = "yes";
    let questionText: string = prompt("Wie lautet die Frage?", "Passende Attribute für mich");
    
    while (isNewAnswer == "yes") {
        let anAnswer: string = prompt("Mögliche Antwort", "geil");
        answer.push(anAnswer);
        isNewAnswer = prompt("Neue Antwort", "yes");
    }

    let newQustion: NormalQuestion = new NormalQuestion(questionText, answer, "");
    defaultQuestions.push(newQustion);
}

function makeMCQuestion(): void {
    let _rightAnswers: number = 0;
    let answers: string[] = [];
    let newRightAnswers: string = "yes";
    let newFalseAnswers: string = "yes";
    let questionText: string = prompt("Wie lautet die Frage?", "Passende Attribute für mich");

    while (newRightAnswers == "yes") {
        let rightAnswer: string = prompt("Richtige Antwort?", "geil");
        answers.push(rightAnswer);
        _rightAnswers++;
    }

    while (newFalseAnswers == "yes") {
        let falseAnswer: string = prompt("Falsche Antwort?", "geil");
        answers.push(falseAnswer);
        _rightAnswers++;
    }

    let newQustion: MCQuestion = new MCQuestion(questionText, answers, _rightAnswers);
    defaultQuestions.push(newQustion);

}

function makeTextQuestion(): void {
    let questionText: string = prompt("Von wem ist der Roman 'Musashi'", "Eiji Yoshikawa");
    let answerText: string = prompt("Antwort", "Eiji Yoshikawa");

    let newQustion: TextQuestion = new TextQuestion(questionText, [""], answerText);
    defaultQuestions.push(newQustion);
}

function startQuiz(): void {
    let questionSlot: number = 0;
    questionSlot = Math.floor(Math.random() * defaultQuestions.length);
    let randomQuestion: Question = defaultQuestions[questionSlot];
    randomQuestion.answersCheck();
}


console.log(defaultQuestions);