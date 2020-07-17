import { CustomConsole } from "./CustomConsole";
import { Level } from "./Level";
import { Place } from "./Place";
import { SimpleCharacter } from "./SimpleCharacter";
import { IntelligentCharacter } from "./IntelligentCharacter";
import { PlayableCharacter } from "./PlayableCharacter";

namespace TextAdventure {

    const customConsole: CustomConsole = CustomConsole.getInstance();

    customConsole.update("Willkommen zum Textadventure in der griechischen Mythologie. Du schlüpfst in die Rolle von Herakles und musst die ihm auferlegten Aufgaben von Eurystheus auferlegen Aufgaben meistern<br>Wir starten mit der Jagd nach auf den nemeischen Löwen in den lernäischen Wäldern.<br>Du stehst am Waldrand was willst du tun?"); 

    let herakles: PlayableCharacter = new PlayableCharacter("Herakles, der größte Heros der griechischen Mythologie", 100, "Ich bin Herakles. Sohn des Zeus und der Alkmene", ["Holzkeule", "Pfeil und Bogen"]);

    let level1: Level = new Level(
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
                new Place("dichten Wald", [herakles], [], true),
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
    
    console.log(level1);
}