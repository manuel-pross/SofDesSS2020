import { CustomConsole } from "./CustomConsole";
import { Level } from "./Level";
import { Place } from "./Place";
import { SimpleCharacter } from "./SimpleCharacter";
import { Item } from "./Item";
import { Observer } from "./Observer";
import { Direction } from "./Direction";
import { Inventory } from "./Inventory";
import { IntelligentCharacter } from "./IntelligentCharacter";

export class Controller implements Observer {

    public customConsole: CustomConsole = CustomConsole.getInstance();
    public items: Item[] = [new Item("Holzkeule", "eine Holzkeule"), new Item("Pfeil und Bogen", "Pfeil und Bogen"), new Item("Fackel", "eine Fackel")];
    public mainCharacter: IntelligentCharacter = new IntelligentCharacter("Herakles", "Sohn des Zeus und der Alkmene", 100, "Ich jage den nemeischen Löwen", new Inventory([this.items[0], this.items[1]]), false);
    public level1: Level = new Level(
        [
            [   //firstRow
                new Place("Gebirge", [], new Inventory([]), false),
                new Place("Gebirge", [], new Inventory([]), false),
                new Place("Gebirge", [], new Inventory([]), false),
                new Place("Gebirge", [], new Inventory([]), false),
                new Place("Gebirge", [], new Inventory([]), false),
                new Place("Gebirge", [], new Inventory([]), false),
                new Place("Gebirge", [], new Inventory([]), false),
                new Place("Gebirge", [], new Inventory([]), false),
                new Place("Gebirge", [], new Inventory([]), false)
            ],
            [   //secondRow
                new Place("Felswand", [], new Inventory([]), false),
                new Place("Felswand", [], new Inventory([]), false),
                new Place("Felswand", [], new Inventory([]), false),
                new Place("Felswand", [], new Inventory([]), false),
                new Place(" am Waldrand", 
                          [
                            this.mainCharacter,
                            new SimpleCharacter("einen Wolf", "Grrrrr. Wuff Wuff", 10, true)
                            ], 
                          new Inventory([this.items[2]]), 
                          true
                        ),
                new Place("Felswand", [], new Inventory([]), false),
                new Place("Felswand", [], new Inventory([]), false),
                new Place("Felswand", [], new Inventory([]), false),
                new Place("Felswand", [], new Inventory([]), false)
            ],
            [   //thirdRow
                new Place("Sumpf", [], new Inventory([]), false),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("Meer", [], new Inventory([]), false)
            ],
            [   //fourthRow
                new Place("Sumpf", [], new Inventory([]), false),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("Meer", [], new Inventory([]), false)
            ],
            [   //fifthRow
                new Place("Sumpf", [], new Inventory([]), false),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("Meer", [], new Inventory([]), false)
            ],
            [   //sixthRow
                new Place("Sumpf", [], new Inventory([]), false),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("Meer", [], new Inventory([]), false)
            ],
            [   //seventhRow
                new Place("Sumpf", [], new Inventory([]), false),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("Meer", [], new Inventory([]), false)
            ],
            [   //eigthRow
                new Place("Sumpf", [], new Inventory([]), false),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("Meer", [], new Inventory([]), false)
            ],
            [   //ninthRow
                new Place("Sumpf", [], new Inventory([]), false),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("dichten Wald", [], new Inventory([]), true),
                new Place("Meer", [], new Inventory([]), false)
            ],
            [   //tenthRow
                new Place("Felswand", [], new Inventory([]), false),
                new Place("Felswand", [], new Inventory([]), true),
                new Place("Felswand", [], new Inventory([]), true),
                new Place("Felswand", [], new Inventory([]), true),
                new Place("Felswand", [], new Inventory([]), true),
                new Place("Felswand", [], new Inventory([]), true),
                new Place("Felswand", [], new Inventory([]), true),
                new Place("Felswand", [], new Inventory([]), true),
                new Place("Felswand", [], new Inventory([]), false)
            ]
        ]);

        public update(_userInput: string): void {
            let placeDescription: string = "";
            let mainCharacterPlace: Place = this.level1.getCharacterPosition(this.mainCharacter);
            //let mainCharacterPlaceItems: = this.level1.getCharacterPosition(this.mainCharacter).get
            if (_userInput == "start" || _userInput == "s") {
                placeDescription = mainCharacterPlace.getFullDescription();
                this.customConsole.updateTextfield(placeDescription);
            } else if (_userInput == "commands" || _userInput == "c") {
                this.customConsole.updateTextfield("<p class=\"custom__commands\">commands(c), look(l), inventory(i), take(t) item, drop(d) item, quit(q)</p>");
            } else if (_userInput == "look" || _userInput == "l") {
                placeDescription = mainCharacterPlace.getFullDescription();
                this.customConsole.updateTextfield(placeDescription);
            } else if (_userInput == "inventory" || _userInput == "i") {
                this.customConsole.updateTextfield(this.mainCharacter.inventory.getInventory());
            } else if (_userInput.substring(0, 5) == "take " || _userInput.substring(0, 2) == "t ") {
                let item: Item|null = mainCharacterPlace.items.removeItem(_userInput.substring(_userInput.indexOf(" ") + 1, _userInput.length));
                if (item != null)
                    this.mainCharacter.inventory.addItem(item);
                placeDescription = mainCharacterPlace.getFullDescription();
                this.customConsole.updateTextfield(placeDescription);
            } 
            else if (_userInput == "north" || _userInput == "n" || _userInput == "east" || _userInput == "e" || _userInput == "s" || _userInput == "south" || _userInput == "west" || _userInput == "w") {

                if (_userInput == "n")
                    _userInput = Direction.North;
                else if (_userInput == "e")
                    _userInput = Direction.East;
                else if (_userInput == "s")
                    _userInput = Direction.South;
                else if (_userInput == "w")
                    _userInput = Direction.West;

                let hasPositionChanged: boolean = this.level1.moveCharacter(this.mainCharacter, _userInput);

                if (hasPositionChanged) {
                    placeDescription = this.level1.getCharacterPosition(this.mainCharacter).getFullDescription();
                    this.customConsole.updateTextfield(placeDescription);
                } else 
                    this.customConsole.updateTextfield("Dieses Gelände ist unpassierbar. Was möchtest du tun?");
            }
        }

} 