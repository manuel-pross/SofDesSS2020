import { Character } from "./Character";
import { Inventory} from "./Inventory";

export class IntelligentCharacter extends Character {
    public inventory: Inventory;

    constructor(_name: string, _selfDescritpion: string, _health: number, _information: string, _inventory: Inventory, _isShown: boolean) {
        super(_name, _selfDescritpion, _health, _isShown);
        this.inventory = _inventory;
    }
    public attack(_character: Character): void {
        console.log("attack");
    }
}