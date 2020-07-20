import { Place } from "./Place";
import { Character } from "./Character";

export class Level {
    public places: Place[][];

    constructor(_places: Place[][]) {
        this.places = _places;
    }

    public getCharacterPosition(_character: Character): Place {
        let horizontalPosition: number = 0;
        let vertikalPosition: number = 0;
        for (let i: number = 0; i < this.places.length; i++) {
            let place: Place[] = this.places[i];
            for (let j: number = 0; j < place.length; j++) {
                if (place[j].characters[0] != null) {
                    for (let character of place[j].characters) {
                        if (_character === character) {
                            horizontalPosition = i;
                            vertikalPosition = j;
                        }
                    }
                }
            }
        }
        return this.places[horizontalPosition][vertikalPosition];
    }

}