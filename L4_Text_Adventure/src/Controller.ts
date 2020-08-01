import { CustomConsole } from "./CustomConsole";
import { Level } from "./Level";
import { Place } from "./Place";
import { Character } from "./Character";
import { SimpleCharacter } from "./SimpleCharacter";
import { IntelligentCharacter } from "./IntelligentCharacter";
import { Item } from "./Item";
import { Observer } from "./Observer";
import { Direction } from "./Direction";
import { Inventory } from "./Inventory";
import { ItemType } from "./ItemType";
import { CharacterType } from "./CharacterType";

export class Controller implements Observer {

    private customConsole: CustomConsole = CustomConsole.getInstance();
    private mainCharacter: IntelligentCharacter | undefined;
    private level1: Level = new Level([[], [], [], [], [], [], [], [], [], []]);

    constructor() {
        
        let cachedLevel: string|null = localStorage?.getItem("cachedLevel");

        if (cachedLevel == null)
            cachedLevel = "";

        if (cachedLevel == "")
            this.getJSON();

        else
            this.reconstructLevel(JSON.parse(cachedLevel));
    }

    public update(_userInput: string = ""): void {
        let consoleOutput: string = "";
        let mainCharacterPlace: Place = this.level1.getMainCharacterPosition();

        if (_userInput == "commands" || _userInput == "c") {
            consoleOutput = "<p class=\"success\">commands(c), look(l), inventory(i), take(t) item, drop(d) item, use(u) item, speak(s) character, quit(q)</p>";
        } else if (_userInput == "look" || _userInput == "l") {
            consoleOutput = mainCharacterPlace.getFullDescription();
        } else if (_userInput == "inventory" || _userInput == "i") {
            consoleOutput = this.mainCharacter!.inventory.getInventory(true);
        } else if (_userInput.substring(0, 5) == "take " || _userInput.substring(0, 2) == "t ") {
            consoleOutput = this.takeItem(mainCharacterPlace, _userInput);
        } else if (_userInput.substring(0, 5) == "drop " || _userInput.substring(0, 2) == "d ") {
            consoleOutput = this.dropItem(mainCharacterPlace, _userInput);
        } else if (_userInput == "north" || _userInput == "n" || _userInput == "east" || _userInput == "e" || _userInput == "south" || _userInput == "s" || _userInput == "west" || _userInput == "w") {
            consoleOutput = this.move(_userInput);
        } else if (_userInput.substring(0, 7) == "attack " || _userInput.substring(0, 2) == "a ") {
            consoleOutput = this.attack(mainCharacterPlace, _userInput);
        } else if (_userInput.substring(0, 6) == "speak " || _userInput.substring(0, 2) == "s ") {
            consoleOutput = this.speak(mainCharacterPlace, _userInput); 
        } else if (_userInput.substring(0, 4) == "use " || _userInput.substring(0, 2) == "u ") {
            consoleOutput = this.use(_userInput); 
        } else if (_userInput == "quit" || _userInput == "q") {
            consoleOutput = this.safe(this.level1); 
        } else 
            consoleOutput = "<p class=\"failure\">Kommando existiert nicht</p>";

        this.customConsole.updateTextfield(consoleOutput);

        if (this.customConsole.consoleText?.innerHTML == "<p class=\"failure\">Du wurdest besiegt</p>") {
            this.customConsole.disabeleInputField();
        }         
    }

    private takeItem(_mainCharacterPlace: Place, _userInput: string): string {
        let consoleOutput: string = "";
        let item: Item|null = _mainCharacterPlace.inventory.removeItem(_userInput.substring(_userInput.indexOf(" ") + 1, _userInput.length));
        if (item != null) {
            this.mainCharacter!.inventory.addItems([item]);
            consoleOutput = _mainCharacterPlace.getFullDescription();
        } else
            consoleOutput = "<p class=\"failure\">Hier gibt es kein solches Item</p>";

        return consoleOutput;
    }

    private dropItem(_mainCharacterPlace: Place, _userInput: string): string {
        let consoleOutput: string = "";
        let item: Item|null = this.mainCharacter!.inventory.removeItem(_userInput.substring(_userInput.indexOf(" ") + 1, _userInput.length));
        if (item != null) {
            _mainCharacterPlace.inventory.addItems([item]);
            consoleOutput = _mainCharacterPlace.getFullDescription();
        } else
        consoleOutput = "<p class=\"failure\">Im Inventar gibt es kein solches Item</p>";

        return consoleOutput;
    }

    private move(_userInput: string): string {
        let consoleOutput: string = "";
        if (_userInput == "n")
            _userInput = Direction.North;
        else if (_userInput == "e")
            _userInput = Direction.East;
        else if (_userInput == "s")
            _userInput = Direction.South;
        else if (_userInput == "w")
            _userInput = Direction.West;

        let hasPositionChanged: boolean = this.level1.moveCharacter(this.mainCharacter, _userInput);
        this.level1.moveCharactersRandomly([Direction.North, Direction.East, Direction.South, Direction.West]);

        if (hasPositionChanged) {
            consoleOutput = this.level1.getMainCharacterPosition().getFullDescription(); //hier muss ich den aktuellen Standort neu raussuchen, da er sich geändert hat
            this.customConsole.updateTextfield(consoleOutput);
        } else 
            consoleOutput = "Dieses Gelände ist unpassierbar. Was möchtest du tun?";

        console.log(this.level1);
        return consoleOutput;
    }

    private attack(_mainCharacterPlace: Place, _userInput: string): string {
        let consoleOutput: string = "";
        let isEnemyDefeated: boolean = false;
        let isMainCharacterDefeated: boolean = false;
        let attackedCharacter: Character|null = _mainCharacterPlace.getCharacter(_userInput.substring(_userInput.indexOf(" ") + 1, _userInput.length));
        if (attackedCharacter != null) {
            isEnemyDefeated = this.mainCharacter!.attack(attackedCharacter);

            if (isEnemyDefeated) {
                if (attackedCharacter.characterType == CharacterType.IntelligentCharacter) {
                    let newIntelligentCharacter: IntelligentCharacter = <IntelligentCharacter> attackedCharacter;
                    _mainCharacterPlace.inventory.addItems(newIntelligentCharacter.inventory.items);
                }
                _mainCharacterPlace.removeCharacter(attackedCharacter.name);
                consoleOutput = "<p class=\"success\">" + attackedCharacter.name + " besiegt.</p>" + _mainCharacterPlace.getFullDescription();
            } else {
                isMainCharacterDefeated = attackedCharacter.attack(<Character> this.mainCharacter);
                consoleOutput = "Gegnerische Gesundheit: " + attackedCharacter.health + "<br>" + "Eigene Gesundheit: " + this.mainCharacter?.health;
            }
            if (isMainCharacterDefeated) {
                consoleOutput = "<p class=\"failure\">Du wurdest besiegt</p>";
            }
        } else
            consoleOutput = "<p class=\"failure\">Der Charakter existiert nicht</p>";  

        return consoleOutput;
    }

    private speak(_mainCharacterPlace: Place, _userInput: string): string {
        let consoleOutput: string = "";
        let talkedCharacter: Character | IntelligentCharacter | null = _mainCharacterPlace.getCharacter(_userInput.substring(_userInput.indexOf(" ") + 1, _userInput.length));

        if (talkedCharacter != null) {
            if (talkedCharacter.characterType == CharacterType.IntelligentCharacter) {
                let talkedCharacterIntelligent: IntelligentCharacter = <IntelligentCharacter> talkedCharacter;
                consoleOutput += talkedCharacterIntelligent.information;

                if (talkedCharacterIntelligent.wantsToTrade)
                    talkedCharacterIntelligent.giveItems(this.mainCharacter);

                if (talkedCharacter.health <= 0)
                    _mainCharacterPlace.removeCharacter(talkedCharacter.name);
            } else {
                consoleOutput = "<p class=\"failure\">Der Charakter spricht wohl nur die Sprache der Gewalt</p>";
            }
        } else 
            consoleOutput = "<p class=\"failure\">Der Charakter existiert nicht</p>";


        return consoleOutput;
    }

    private use(_userInput: string): string {
        let consoleOutput: string = "";
        let isItemUsable: boolean|undefined = this.mainCharacter?.useItem(_userInput.substring(_userInput.indexOf(" ") + 1, _userInput.length));;
        
        if (isItemUsable != undefined) {
            if (isItemUsable)
                consoleOutput = "<p class=\"success\">Lebensenergie: " + this.mainCharacter?.health + "</p>";
            else
                consoleOutput = "<p class=\"failure\">Item kann nicht benutzt werden </p>";
        } else {
            consoleOutput = "<p class=\"failure\">Item existiert nicht im Inventar</p>";
        }
        return consoleOutput;
    }

    private safe(_level: Level): string {
        localStorage.setItem("cachedLevel", JSON.stringify(_level));
        this.customConsole.disabeleInputField();
        return "<p class=\"success\">Das Spiel wurde beendet und der Fortschritt gespeichert</p>";
    }

    private reconstructLevel(_jsonObject: any): void {

        for (let i: number = 0; i < _jsonObject.places.length; i++) {
            for (let j: number = 0; j < _jsonObject.places[i].length; j++) {
                this.level1.places[i][j] = new Place(_jsonObject.places[i][j].descriptionPrefix, _jsonObject.places[i][j].description, [], new Inventory([]), _jsonObject.places[i][j].isPassable);
                for (let k: number = 0; k < _jsonObject.places[i][j].characters.length; k++) {

                    if (_jsonObject.places[i][j].characters[k].characterType == CharacterType.IntelligentCharacter) {

                        let items: Item[] = [];
                        for (let l: number = 0; l < _jsonObject.places[i][j].characters[k].inventory.items.length; l++)
                            items.push(_jsonObject.places[i][j].characters[k].inventory.items[l]);

                        let newIntelligentCharacter: IntelligentCharacter = new IntelligentCharacter(_jsonObject.places[i][j].characters[k].namePrefix, _jsonObject.places[i][j].characters[k].name, _jsonObject.places[i][j].characters[k].selfDescription, _jsonObject.places[i][j].characters[k].health, _jsonObject.places[i][j].characters[k].basicAttack, _jsonObject.places[i][j].characters[k].basicDefense, _jsonObject.places[i][j].characters[k].information, new Inventory(items), _jsonObject.places[i][j].characters[k].isShown, _jsonObject.places[i][j].characters[k].characterType, _jsonObject.places[i][j].characters[k].isMovingIndependently, _jsonObject.places[i][j].characters[k].wantsToTrade);

                        if (!_jsonObject.places[i][j].characters[k].isShown) {
                            this.mainCharacter = new IntelligentCharacter(_jsonObject.places[i][j].characters[k].namePrefix, _jsonObject.places[i][j].characters[k].name, _jsonObject.places[i][j].characters[k].selfDescription, _jsonObject.places[i][j].characters[k].health, _jsonObject.places[i][j].characters[k].basicAttack, _jsonObject.places[i][j].characters[k].basicDefense, _jsonObject.places[i][j].characters[k].information, new Inventory(items), _jsonObject.places[i][j].characters[k].isShown, _jsonObject.places[i][j].characters[k].characterType, _jsonObject.places[i][j].characters[k].isMovingIndependently, _jsonObject.places[i][j].characters[k].wantsToTrade);
                            newIntelligentCharacter = this.mainCharacter;
                        }
                        this.level1.places[i][j].characters[k] = newIntelligentCharacter;

                    } else if (_jsonObject.places[i][j].characters[k].characterType == CharacterType.SimpleCharacter) {
                        let newSimpleCharacter: SimpleCharacter = new SimpleCharacter(_jsonObject.places[i][j].characters[k].namePrefix, _jsonObject.places[i][j].characters[k].name, _jsonObject.places[i][j].characters[k].selfDescription, _jsonObject.places[i][j].characters[k].health, _jsonObject.places[i][j].characters[k].basicAttack, _jsonObject.places[i][j].characters[k].basicDefense, _jsonObject.places[i][j].characters[k].isShown, _jsonObject.places[i][j].characters[k].characterType);
                        this.level1.places[i][j].characters[k] = newSimpleCharacter;
                    }
                }

                for (let m: number = 0; m < _jsonObject.places[i][j].inventory.items.length; m++) {   
                    this.level1.places[i][j].inventory.items.push(_jsonObject.places[i][j].inventory.items[m]);
                }
            }
        }
    }

    private async getJSON(): Promise<void> {
        let data: any = await this.load("../src/level1.json");
    }

    private async load(_filename: string): Promise<void> {
    
        let response: Response = await fetch("../src/level1.json");
        let text: string = await response.text();
        let jsonObject: any = JSON.parse(text);

        this.reconstructLevel(jsonObject);
    }
} 