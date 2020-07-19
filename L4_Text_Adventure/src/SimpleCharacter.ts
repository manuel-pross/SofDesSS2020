import { Character } from "./Character";

export class SimpleCharacter extends Character {

    constructor(_name: string, _selfDescription: string, _health: number, _isShown: boolean) {
        super(_name, _selfDescription, _health, _isShown);
    }

    public attack(_character: Character): void {
        console.log("attack");
    }
}