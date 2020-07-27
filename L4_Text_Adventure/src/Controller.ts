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
        ]
    );

    public update(_userInput: string): void {
    }

} 