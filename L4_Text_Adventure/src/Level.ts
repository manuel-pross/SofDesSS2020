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

    public moveCharacter(_character: Character, _direction: string): boolean {
        let hasPositionChanged: boolean = true;
        let newPositionX: number = 0;
        let newPositionY: number = 0;
        for (let i: number = 0; i < this.places.length; i++) {
            for (let j: number = 0; j < this.places[i].length; j++) {
                for (let k: number = 0; k < this.places[i][j].characters.length; k++) {
                    if (_character.name === this.places[i][j].characters[k].name) {

                        switch (_direction) {
                            case "north":
                                if (this.places[i - 1][j].isPassable) {
                                    this.places[i][j].removeCharacter(_character.name); // Muss einzeln aufgerufen werden, weil sonst der Character entfernt wird, auch wenn das nächste Feld nicht passierbar ist
                                    newPositionX = j;
                                    newPositionY = i - 1;
                                } else {
                                    hasPositionChanged = false;
                                }
                                break;
                            case "east":
                                if (this.places[i][j + 1].isPassable) {
                                    this.places[i][j].removeCharacter(_character.name);
                                    newPositionX = j + 1;
                                    newPositionY = i;
                                } else {
                                    hasPositionChanged = false;
                                }
                                break;
                            case "south":
                                if (this.places[i + 1][j].isPassable) {
                                    this.places[i][j].removeCharacter(_character.name);
                                    newPositionX = j;
                                    newPositionY = i + 1;
                                } else {
                                    hasPositionChanged = false;
                                }
                                break;
                            default:
                                if (this.places[i][j - 1].isPassable) {
                                    this.places[i][j].removeCharacter(_character.name);
                                    newPositionX = j - 1;
                                    newPositionY = i;
                                } else {
                                    hasPositionChanged = false;
                                }
                                break;
                        }                
                    }
                }
            }
        }
        this.places[newPositionY][newPositionX].characters.push(_character);
        return hasPositionChanged;
    }

}