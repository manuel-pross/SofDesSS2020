import { Character } from "./Character";

export class SimpleCharacter extends Character {

    constructor(_name: string, _selfDescription: string, _health: number) {
        super(_name, _selfDescription, _health);
    }

    public attack(_character: Character): void {
        console.log("attack");
    }
}