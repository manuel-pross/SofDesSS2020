export class CustomConsole {
    private static instance: CustomConsole; //Ein Singleton macht hier Sinn, da ich nur eine Instanz der Klasse existieren soll
    public siteBody: HTMLBodyElement | null = document.querySelector("#body"); //Musste hier zusätzlich null als Typ mit angeben, weil es auch sein kann, dass kein body existiert
    public consoleText: HTMLElement | null = document.querySelector("#custom");
    public consoleInput: HTMLInputElement | null = document.querySelector("#customInput");

    private constructor() {
        window.addEventListener("click", this.focusInputField);
        this.consoleInput?.addEventListener("keydown", this.handleInput);
    }

    public static getInstance(): CustomConsole {
        if (CustomConsole.instance == null)
            CustomConsole.instance = new CustomConsole();

        return CustomConsole.instance;
    }

    public update(_text: string): void {
        this.focusInputField();
        this.consoleText!.innerHTML = _text + "<p class=\"custom__commands\">commands(c), look(l), inventory(i), take(t) item, drop(d) item, quit(q)</p>";
    }

    private handleInput(_event: KeyboardEvent): string {
        let inputText: string | undefined = "";
        if (_event.keyCode == 13) {
            this.consoleInput = document.querySelector("#customInput"); // Muss mir das Input Field immer neu rausziehen, hängt wohl damit zusammen dass eventlisteners asynchron sind
            inputText = this.consoleInput?.value;
            if (inputText == undefined)
                inputText = "";
        }
        return inputText;
    }

    private focusInputField(): void {
        this.consoleInput = document.querySelector("#customInput"); // Muss mir das Input Field immer neu rausziehen, hängt wohl damit zusammen dass eventlisteners asynchron sind
        this.consoleInput?.focus();
    }
}