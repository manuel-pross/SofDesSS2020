import { Subject } from "./Subject";
import { Observer } from "./Observer";

export class CustomConsole implements Subject {
    private static instance: CustomConsole; //Ein Singleton macht hier Sinn, da ich nur eine Instanz der Klasse existieren soll
    private static userInput: string = ""; // Musste das static machen, weil sonst bei der ausführung von update() der string wieder auf "" ist
    public siteBody: HTMLBodyElement | null = document.querySelector("#body"); //Musste hier zusätzlich null als Typ mit angeben, weil es auch sein kann, dass kein body existiert
    public consoleText: HTMLElement | null = document.querySelector("#custom");
    public consoleInput: HTMLInputElement | null = document.querySelector("#customInput");
    public observers: Observer[] = [];

    private constructor() {
        window.addEventListener("click", this.focusInputField);
        
        this.consoleInput?.addEventListener("keydown", this.handleInput);
    }

    public static getInstance(): CustomConsole {
        if (CustomConsole.instance == null)
            CustomConsole.instance = new CustomConsole();

        return CustomConsole.instance;
    }

    public updateTextfield(_text: string): void {
        this.focusInputField();
        this.consoleText!.innerHTML = _text + "<p class=\"custom__commands\">commands(c), look(l), inventory(i), take(t) item, drop(d) item, quit(q)</p>";
    }

    public registerObserver(_observer: Observer): void {
        this.observers.push(_observer);
    }

    public removeObserver(_observer: Observer): void {
        this.observers.splice(this.observers.indexOf(_observer), 1);
    }

    public notifyObservers(): void {
        for (let observer of this.observers)
            observer.update(CustomConsole.userInput);
    }

    private handleInput(_event: KeyboardEvent): void {
        let inputText: string | undefined = "";
        if (_event.keyCode == 13) {
            this.consoleInput = document.querySelector("#customInput"); // Muss mir das Input Field immer neu rausziehen, hängt wohl damit zusammen dass eventlisteners asynchron sind
            inputText = this.consoleInput?.value;
            if (inputText == undefined)
                inputText = "";
            CustomConsole.userInput = inputText;
            CustomConsole.instance.notifyObservers();
        }
    }

    private focusInputField(): void {
        this.consoleInput = document.querySelector("#customInput"); // Muss mir das Input Field immer neu rausziehen, hängt wohl damit zusammen dass eventlisteners asynchron sind
        this.consoleInput?.focus();
    }
}