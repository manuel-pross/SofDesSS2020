import { Character } from "./Character";
import { Item } from "./Item";

export class IntelligentCharacter extends Character {
    public inventory: Item[];

    constructor(_name: string, _selfDescritpion: string, _health: number, _information: string, _inventory: Item[], _isShown: boolean) {
        super(_name, _selfDescritpion, _health, _isShown);
        this.inventory = _inventory;
    }
    public attack(_character: Character): void {
        console.log("attack");
    }
}