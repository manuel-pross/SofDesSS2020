import { CustomConsole } from "./CustomConsole";
import { Level } from "./Level";
import { Place } from "./Place";
import { SimpleCharacter } from "./SimpleCharacter";
import { IntelligentCharacter } from "./IntelligentCharacter";
import { PlayableCharacter } from "./PlayableCharacter";
import { Observer } from "./Observer";

export class Controller implements Observer {

    public customConsole: CustomConsole = CustomConsole.getInstance();
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
                new Place("dichten Wald", [new PlayableCharacter("Herakles", "Sohn des Zeus und der Alkmene", 100, "Ich jage den nemeischen Löwen", ["Holzkeule", "Pfeil und Bogen"])], [], true),
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
        // if (_userInput == "start" || _userInput == "s")
        //     this.startGame();
        // // else {
        // //     switch (_userInput) {
        // //         case "look":
                    
        // //             break;
            
        // //         default:
        // //             break;
        // //     }
        // // }
    }
} 