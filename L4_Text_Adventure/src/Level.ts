import { Place } from "./Place";
import { Character } from "./Character";
import { IntelligentCharacter } from "./IntelligentCharacter";
import { Direction } from "./Direction";
import { Inventory } from "./Inventory";
import { CharacterType } from "./CharacterType";

export class Level {
    public places: Place[][];

    constructor(_places: Place[][]) {
        this.places = _places;
    }

    public getMainCharacterPosition(): Place {
        let horizontalPosition: number = 0;
        let vertikalPosition: number = 0;
        for (let i: number = 0; i < this.places.length; i++) {
            let place: Place[] = this.places[i];
            for (let j: number = 0; j < place.length; j++) {
                if (place[j].characters[0] != null) {
                    for (let character of place[j].characters) {
                        if (!character.isShown) {
                            horizontalPosition = i;
                            vertikalPosition = j;
                        }
                    }
                }
            }
        }
        return this.places[horizontalPosition][vertikalPosition];
    }

    public moveCharacter(_character: Character|undefined, _direction: string): boolean {
        let hasPositionChanged: boolean = false;
        let newPositionX: number = 0;
        let newPositionY: number = 0;

        if (_character != undefined) {
            for (let i: number = 0; i < this.places.length; i++) {
                for (let j: number = 0; j < this.places[i].length; j++) {
                    for (let k: number = 0; k < this.places[i][j].characters.length; k++) {
                        if (_character.name === this.places[i][j].characters[k].name) {
                            if (!hasPositionChanged) {
                                switch (_direction) {
                                    case "north":
                                        if (this.places[i - 1][j].isPassable) { 
                                            this.places[i][j].removeCharacter(_character.name); // Muss einzeln aufgerufen werden, weil sonst der Character entfernt wird, auch wenn das nächste Feld nicht passierbar ist
                                            newPositionX = j;
                                            newPositionY = i - 1;
                                            this.places[newPositionY][newPositionX].characters.push(_character);
                                            hasPositionChanged = true;
                                        }
                                        break;
                                    case "east":
                                        if (this.places[i][j + 1].isPassable) {
                                            this.places[i][j].removeCharacter(_character.name);
                                            newPositionX = j + 1;
                                            newPositionY = i;
                                            this.places[newPositionY][newPositionX].characters.push(_character);
                                            hasPositionChanged = true;
                                        }
                                        break;
                                    case "south":
                                        if (this.places[i + 1][j].isPassable) {
                                            this.places[i][j].removeCharacter(_character.name);
                                            newPositionX = j;
                                            newPositionY = i + 1;
                                            this.places[newPositionY][newPositionX].characters.push(_character);
                                            hasPositionChanged = true;
                                        }
                                        break;
                                    default:
                                        if (this.places[i][j - 1].isPassable) {
                                            this.places[i][j].removeCharacter(_character.name);
                                            newPositionX = j - 1;
                                            newPositionY = i;
                                            this.places[newPositionY][newPositionX].characters.push(_character);
                                            hasPositionChanged = true;
                                        }
                                        break;
                                }                
                            }
                        }
                    }
                }
            }
        }
        return hasPositionChanged;
    }

    public moveCharactersRandomly(_directions: Direction[]): void {
        let randomDirection: string = _directions[Math.floor(Math.random() * _directions.length)];
        let charactersToMove: Character[] = this.getAllMovingCharacters();
        for (let character of charactersToMove) {
            this.moveCharacter(character, randomDirection);
        }
    }

    private getAllMovingCharacters(): Character[] {
        let allIntelligentCharacters: IntelligentCharacter[] = [];
        for (let i: number = 0; i < this.places.length; i++) {
            for (let j: number = 0; j < this.places[i].length; j++) {
                for (let k: number = 0; k < this.places[i][j].characters.length; k++) {
                    if (this.places[i][j].characters[k].characterType == CharacterType.IntelligentCharacter && this.places[i][j].characters[k].isShown) {
                        let intelligentCharacter: IntelligentCharacter = <IntelligentCharacter> this.places[i][j].characters[k];
                        if (intelligentCharacter.isMovingIndependently)
                            allIntelligentCharacters.push(intelligentCharacter);
                    }
                }
            }
        }
        return allIntelligentCharacters;
    }

}