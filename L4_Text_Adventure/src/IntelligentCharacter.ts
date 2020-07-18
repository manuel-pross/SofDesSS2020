import { Character } from "./Character";

export class IntelligentCharacter extends Character {
    public inventory: string[];

    constructor(_name: string, _selfDescritpion: string, _health: number, _information: string, _inventory: string[]) {
        super(_name, _selfDescritpion, _health);
        this.inventory = _inventory;
    }

    public walk(_direction: string): void {
        console.log("walk" + _direction);
    }

    public take(_item: string): void {
        console.log("take" + _item);
    }

    public drop(_item: string): void {
        console.log("drop" + _item);
    }

    public showInventory(): string {
        return "inventory";
    }

    public attack(_character: Character): void {
        console.log("attack");
    }
}