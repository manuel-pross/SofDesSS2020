import { Character } from "./Character";

export class SimpleCharacter extends Character {

    public attack(_character: Character): void {
        console.log("attack");
    }
}