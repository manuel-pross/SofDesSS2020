import { CustomConsole } from "./CustomConsole";
import { Level } from "./Level";
import { Place } from "./Place";
import { SimpleCharacter } from "./SimpleCharacter";
import { IntelligentCharacter } from "./IntelligentCharacter";
import { PlayableCharacter } from "./PlayableCharacter";
import { Controller } from "./Controller";

namespace TextAdventure {
    const controller: Controller = new Controller(); 
    const customConsole: CustomConsole = CustomConsole.getInstance();

    customConsole.registerObserver(controller);

    customConsole.updateTextfield("Willkommen. Möchtest du starten?<p class=\"custom__commands\">start(s)</p>");
}