abstract class Question {
    public questionText: string;
    public type: string;

    constructor(_questionText: string, _type: string) {
        this.questionText = _questionText;
        this.type = _type;
    }

    public abstract compareWithUserAnswer(_userAnswer: string): boolean;
}

class YesNoQuestion extends Question {
    private isAnswerYes: boolean;

    constructor(_questionText: string, _isAnswerYes: boolean) {
        super(_questionText, "YesNoQuestion");
        this.isAnswerYes = _isAnswerYes;
    }

    public compareWithUserAnswer(_userAnswer: string): boolean {
        if (_userAnswer == "y" && this.isAnswerYes)
            return true;
        else
            return false;
    }

    public toString(): string {
        return this.questionText + " (y/n)";
    }
}

class EstimateQuestion extends Question {
    private upperLimit: number;
    private lowerLimit: number;

    constructor(_questionText: string, _upperLimit: number, _lowerLimit: number) {
        super(_questionText, "EstimateQuestion");
        this.upperLimit = _upperLimit;
        this.lowerLimit = _lowerLimit;
    }

    public compareWithUserAnswer(_userAnswer: string): boolean {
        let answerAsNumber: number = parseInt(_userAnswer);
        if (isNaN(answerAsNumber))
            answerAsNumber = 50;
        if (answerAsNumber >= this.lowerLimit && answerAsNumber <= this.upperLimit)
            return true;
        else
            return false;
    }

    public toString(): string {
        return this.questionText + " (Zahlenwert)";
    }
}

class MultipleChoiceQuestion extends Question {
    public possibleAnswers: Answer[];

    constructor(_questionText: string, _possibleAnswers: Answer[]) {
        super(_questionText, "MulitpleChoiceQuestion");
        this.possibleAnswers = _possibleAnswers;
    }

    public validateNewQuestion(): void {
        if (this.countCorrectAnswers() <= 0) {
            this.possibleAnswers[0].IsAnswerCorrect = true;
        }
    }

    public countCorrectAnswers(): number {
        let correctAnswers: number = 0;
        for (let i: number = 0; i < this.possibleAnswers.length; i++) {   
            if (this.possibleAnswers[i].getIsAnswerCorrect)
                correctAnswers++;    
        }
        return correctAnswers;
    }

    public compareWithUserAnswer(_userAnswers: string): boolean {
        let areUserAnswersCorrect: boolean = false;
        let userAnswerAsArray: number[] = _userAnswers.split(",").map(function(_item: string): number {
            if (isNaN(parseInt(_item)) || parseInt(_item) <= 0)
                return 500;
            else 
                return parseInt(_item) - 1;
        });

        if (userAnswerAsArray.length != this.countCorrectAnswers())
            return false;

        if ((new Set(userAnswerAsArray)).size !== userAnswerAsArray.length)
            return false;
        else {
            for (let i: number = 0; i < userAnswerAsArray.length; i++) {
                if (userAnswerAsArray[i] > this.possibleAnswers.length - 1)
                    return false;
                if (this.possibleAnswers[userAnswerAsArray[i]].getIsAnswerCorrect)
                    areUserAnswersCorrect = true;
                else
                    return false;
            }   
            return areUserAnswersCorrect;
        }
    }

    public toString(): string {
        let questionAsOneString: string = this.questionText + "\n";

        for (let i: number = 0; i < this.possibleAnswers.length; i++) {
            questionAsOneString += (i + 1) + ". " + this.possibleAnswers[i].answerText + "\n";
        }

        return questionAsOneString + "\nGeben sie die Nummern der Antworten ein die sie für richtige halten (Bsp: 1,3)";
    }

}

class FreeTextQuestion extends Question {
    private answerText: string;

    constructor(_questionText: string, _answerText: string) {
        super(_questionText, "FreeTextQuestion");
        this.answerText = _answerText;
    }

    compareWithUserAnswer(_userAnswer: string): boolean {
        if (_userAnswer == this.answerText)
            return true;
        else
            return false;
    }

    public toString(): string {
        return this.questionText + " (Freie Texteingabe)";
    }
}

class Answer {
    public answerText: string;
    private isAnswerCorrect: boolean;

    constructor(_answerText: string, _isAnswerCorrect: boolean) {
        this.answerText = _answerText;
        this.isAnswerCorrect = _isAnswerCorrect;
    }

    get getIsAnswerCorrect(): boolean {
        return this.isAnswerCorrect;
    }

    set IsAnswerCorrect(_isAnswerCorrect: boolean) {
        this.isAnswerCorrect = _isAnswerCorrect;
    }
}

let questions: Question[] = [];
let questionsCache: Question[] = [];
let correctAnswers: number = 0;
let questionsLength: number;
startQuiz();

async function startQuiz(): Promise<void> {
    console.log("Start Load");
    let data: any = await load("./questions.json");
    console.log("Done Load");
    console.log("Data: " + data);
    getUserChoice();
}



async function load(_filename: string): Promise<void> {
    console.log("Start Fetch");

    let response: Response = await fetch("./questions.json");
    let text: string = await response.text();
    let jsonArray: any[] = JSON.parse(text);

    for (let i: number = 0; i < jsonArray.length; i++) {    

        switch (jsonArray[i].type) {
            case "YesNoQuestion":
                questions[i] = new YesNoQuestion(jsonArray[i].questionText, jsonArray[i].isAnswerYes);
                break;
            case "EstimateQuestion":
                questions[i] = new EstimateQuestion(jsonArray[i].questionText, jsonArray[i].upperLimit, jsonArray[i].lowerLimit);
                break;
            case "MultipleChoiceQuestion":
                let questionText: string = jsonArray[i].questionText;
                let newMultipleChoiceQuestion: MultipleChoiceQuestion = new MultipleChoiceQuestion(questionText, []);
                for (let j: number = 0; j < jsonArray[i].possibleAnswers.length; j++) {
                    let answerText: string = jsonArray[i].possibleAnswers[j].answerText;
                    let isAnswerCorrect: boolean = jsonArray[i].possibleAnswers[j].isAnswerCorrect;
                    newMultipleChoiceQuestion.possibleAnswers.push(new Answer(answerText, isAnswerCorrect));
                }
                questions[i] = newMultipleChoiceQuestion;
                break;         
            default:
                questions[i] = new FreeTextQuestion(jsonArray[i].questionText, jsonArray[i].answerText);
                break;
        }
    }
    questionsCache = Array.from(questions);
    questionsLength = questions.length;
}

function save(_content: string, _filename: string): void {
    let blob: Blob = new Blob([_content], { type: "text/plain" });
    let url: string = window.URL.createObjectURL(blob);
    //*/ using anchor element for download
    let downloader: HTMLAnchorElement;
    downloader = document.createElement("a");
    downloader.setAttribute("href", url);
    downloader.setAttribute("download", _filename);
    document.body.appendChild(downloader);
    downloader.click();
    document.body.removeChild(downloader);
    window.URL.revokeObjectURL(url);
  }

function getUserChoice(): void {
    let choice: number = parseInt(prompt("1. Bestehende Frage beantworten?\n2. Neue Frage hinzufügen?\n3. Beenden?\n(1/2/3)", "1"));
    
    if (isNaN(choice) || choice > 3 || choice < 1)
        choice = 4;

    switch (choice) {
        case 1: 
            if (questions.length > 0)
                askQuestion();
            else {
                console.log("Alle Fragen wurden beantwortet");
                console.log("Richtig beantwortete Fragen: " + correctAnswers + " von " + questionsLength);
                save(JSON.stringify(questionsCache), "questions.json");
            }
            break;
        case 2: 
            generateNewQuestion();
            questionsLength++;
            break;
        case 3:
            console.log("Richtig beantwortete Fragen: " + correctAnswers + " von " + questionsLength);
            save(JSON.stringify(questionsCache), "questions.json");
            break;
        default:
            console.log("Inkorrekte Eingabe");
            getUserChoice();
            break;
    }
}

function generateNewQuestion(): void {
    let choice: number = parseInt(prompt("Was für eine Art Frage wollen sie erstellen?\n1. Ja/Nein Frage\n2. Schätz Frage?\n3. Multiple Choice Frage?\n4. Freitext Frage\n(1/2/3/4)\nHinweis: Bei Falscheingabe wird automatisch '4' ausgewählt", "4"));

    if (isNaN(choice) || choice > 4 || choice < 1)
        choice = 4;
    let newQuestionText: string = "";

    switch (choice) {
        case 1:
            newQuestionText = prompt("Wie lautet die neue Ja/Nein Frage?", "Ist Mayonaise ein Instrument?");
            let newQuestionAnswerAsString: string = prompt("Ist die entsprechende Antwort darauf ja oder nein? (y/n)\nHinweis: Bei Falscheingabe wird automatisch 'y' gesetzt.", "y");
            let newQuestionAnswerAsBoolean: boolean = false;

            if (newQuestionAnswerAsString != "y" && newQuestionAnswerAsString != "n")
                newQuestionAnswerAsString = "y";

            newQuestionAnswerAsString == "y" ? newQuestionAnswerAsBoolean = true : newQuestionAnswerAsBoolean = false;
            questions.push(new YesNoQuestion(newQuestionText, newQuestionAnswerAsBoolean));
            break;
        case 2:
            newQuestionText = prompt("Wie lautet die neue Schätzfrage?", "Wie viele Fenster habe ich im Zimmer?");
            let upperLimit: number = parseInt(prompt("Oberes Limit der Schätzung? Hinweis: Bei Falscheingabe wird automatisch '50' gesetzt. Bei falscher Reihenfolge der Limits werden sie getauscht.", "50"));
            let lowerLimit: number = parseInt(prompt("Unteres Limit der Schätzung? Bei Falscheingabe wird automatisch '25' gesetzt. Bei falscher Reihenfolge der Limits werden sie getauscht.", "25"));

            if (isNaN(upperLimit))
                upperLimit = 50;
            if (isNaN(lowerLimit))
                lowerLimit = 25;

            if (upperLimit < lowerLimit) {
                lowerLimit = [upperLimit, upperLimit = lowerLimit][0];
            }

            questions.push(new EstimateQuestion(newQuestionText, upperLimit, lowerLimit));
            break;
        case 3:
            newQuestionText = prompt("Wie lautet die neue Multiple Choice Frage?", "Welche der folgenden Aussagen ist richtig?");
            let answerPossibilities: number = parseInt(prompt("Wie viele Antwortmöglichkeiten hat die Frage? (2 - 6)\n Hinweis: Bei Falscheingabe wird automatisch '2' gesetzt", "2"));

            if (isNaN(answerPossibilities) || answerPossibilities > 6 || answerPossibilities < 2)
                answerPossibilities = 2;

            let newQuestion: MultipleChoiceQuestion = new MultipleChoiceQuestion(newQuestionText, new Array(answerPossibilities));

            for (let i: number = 0; i < answerPossibilities; i++) {
                let newAnswerText: string = prompt("Wie lautet die " + (i + 1) + ". Antwort?\n Hinweis: Markieren sie die richtigen Antworten mit einem Leerzeichen und 'y' an letzter Stelle (Siehe Textfeld).", "Manuel ist Bombe y");

                if (newAnswerText.slice(-2) == " y") {
                    newAnswerText = newAnswerText.substring(0, newAnswerText.length - 2);         
                    newQuestion.possibleAnswers[i] = new Answer(newAnswerText, true);
                } else
                newQuestion.possibleAnswers[i] = new Answer(newAnswerText, false);
            }

            newQuestion.validateNewQuestion();
            questions.push(newQuestion);
            break;
        default:
            newQuestionText = prompt("Wie lautet die neue Freitext Frage?", "Vervollständigen sie den Satz: Manuel ist der...");
            let newAnswerText: string = prompt("Wie lautet die genaue/einzige Antwortmöglichkeit?", "Boss");

            questions.push(new FreeTextQuestion(newQuestionText, newAnswerText));
            break;
    }
    getUserChoice();
}

function askQuestion(): void {
    let randomQuestionInd: number = Math.floor(Math.random() * questions.length);
    let randomQuestion: Question = questions[randomQuestionInd];

    if (!JSON.stringify(questionsCache).includes(randomQuestion.questionText))
        questionsCache.push(randomQuestion);
    questions.splice(randomQuestionInd, 1);

    let userAnswer: string = prompt(randomQuestion.toString(), "Ihre Antwort");

    if (randomQuestion.compareWithUserAnswer(userAnswer)) {
        correctAnswers++;
        console.log("Richtig!");
    } else {
        console.log("Falsch");
    }

    getUserChoice();
}