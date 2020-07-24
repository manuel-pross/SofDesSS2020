import { CustomConsole } from "./CustomConsole";
import { Level } from "./Level";
import { Place } from "./Place";
import { SimpleCharacter } from "./SimpleCharacter";
import { Item } from "./Item";
import { PlayableCharacter } from "./PlayableCharacter";
import { Observer } from "./Observer";

export class Controller implements Observer {

    public customConsole: CustomConsole = CustomConsole.getInstance();
    public items: Item[] = [new Item("Holzkeule", "eine Holzkeule"), new Item("Pfeil und Bogen", "Pfeil und Bogen"), new Item("Fackel", "eine Fackel")];
    public mainCharacter: PlayableCharacter = new PlayableCharacter("Herakles", "Sohn des Zeus und der Alkmene", 100, "Ich jage den nemeischen Löwen", [this.items[0], this.items[1]], false);
    public level1: Level = new Level(
        [
            [   //firstRow
                new Place("Gebirge", [], [], false),
                new Place("Gebirge", [], [], false),
                new Place("Gebirge", [], [], false),
                new Place("Gebirge", [], [], false),
                new Place("Gebirge", [], [], false),
                new Place("Gebirge", [], [], false),
                new Place("Gebirge", [], [], false),
                new Place("Gebirge", [], [], false),
                new Place("Gebirge", [], [], false)
            ],
            [   //secondRow
                new Place("Felswand", [], [], false),
                new Place("Felswand", [], [], true),
                new Place("Felswand", [], [], true),
                new Place("Felswand", [], [], true),
                new Place(" am Waldrand", 
                          [
                            this.mainCharacter,
                            new SimpleCharacter("einen Wolf", "Grrrrr. Wuff Wuff", 10, true)
                            ], 
                          [
                            this.items[2]
                            ], 
                          true
                        ),
                new Place("Felswand", [], [], true),
                new Place("Felswand", [], [], true),
                new Place("Felswand", [], [], true),
                new Place("Felswand", [], [], false)
            ],
            [   //thirdRow
                new Place("Sumpf", [], [], false),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("Meer", [], [], false)
            ],
            [   //fourthRow
                new Place("Sumpf", [], [], false),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("Meer", [], [], false)
            ],
            [   //fifthRow
                new Place("Sumpf", [], [], false),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("Meer", [], [], false)
            ],
            [   //sixthRow
                new Place("Sumpf", [], [], false),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("Meer", [], [], false)
            ],
            [   //seventhRow
                new Place("Sumpf", [], [], false),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("Meer", [], [], false)
            ],
            [   //eigthRow
                new Place("Sumpf", [], [], false),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("Meer", [], [], false)
            ],
            [   //ninthRow
                new Place("Sumpf", [], [], false),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("dichten Wald", [], [], true),
                new Place("Meer", [], [], false)
            ],
            [   //tenthRow
                new Place("Felswand", [], [], false),
                new Place("Felswand", [], [], true),
                new Place("Felswand", [], [], true),
                new Place("Felswand", [], [], true),
                new Place("Felswand", [], [], true),
                new Place("Felswand", [], [], true),
                new Place("Felswand", [], [], true),
                new Place("Felswand", [], [], true),
                new Place("Felswand", [], [], false)
            ]
        ]);

    public update(_userInput: string): void {
        let placeDescription: string = "";
        if (_userInput == "start" || _userInput == "s") {
            placeDescription += this.level1.getCharacterPosition(this.mainCharacter).getFullDescription();
            this.customConsole.updateTextfield(placeDescription);
        }
    }
} 