import { CustomConsole } from "./CustomConsole";
import { Controller } from "./Controller";

namespace TextAdventure {

    const controller: Controller = new Controller(); 
    const customConsole: CustomConsole = CustomConsole.getInstance();
    const introductionText: string = "Willkommen zum TextAdventure in der griechischen Mythologie. Du schlüpfst in die Rolle von Herakles und sollst den nemeischen Löwen in den agrolischen Wäldern jagen und töten. Zur Bewegung stehen dir die tasten north(n), east(e), south(s), und west(w) zur Verfügung.";

    customConsole.registerObserver(controller);

    customConsole.updateTextfield(introductionText + " Folgende Kommandos stehen zur Auswahl: <p class=\"success\">commands(c), look(l), inventory(i), take(t) item, drop(d) item, speak(s) character, use(u) item, quit(q)</p>");
}