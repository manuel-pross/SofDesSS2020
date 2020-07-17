export class CustomConsole {
    private static instance: CustomConsole; //Ein Singleton macht hier Sinn, da ich nur eine Instanz der Klasse existieren soll
    public siteBody: HTMLBodyElement | null = document.querySelector("#body"); //Musste hier zusätzlich null als Typ mit angeben, weil es auch sein kann, dass kein body existiert

    private constructor() {}

    public static getInstance(): CustomConsole {
        if (CustomConsole.instance == null)
            CustomConsole.instance = new CustomConsole();

        return CustomConsole.instance;
    }

    public update(_text: string): void {
        if (this.siteBody === null)
            throw new Error("No body found");
        else {
            this.siteBody.insertAdjacentHTML("beforeend", "<p>" + _text +  "</p>");
            this.siteBody.insertAdjacentHTML("beforeend", "<input class=\"custom__input\"></input>");
        }
    }
}