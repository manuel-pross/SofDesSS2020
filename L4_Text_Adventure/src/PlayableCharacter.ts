import { IntelligentCharacter } from "./IntelligentCharacter";
import { Item } from "./Item";

export class PlayableCharacter extends IntelligentCharacter {

    constructor(_name: string, _selfDescritpion: string, _health: number, _information: string, _inventory: Item[], _isShown: boolean) {
        super(_name, _selfDescritpion, _health, _information, _inventory, _isShown);
    }

    public getInventory(): string { //Man könnte noch eine klasse mit Inventory machen und dort die Methode nur einmal definieren
        let inventory: string = "";
        for (let item of this.inventory) {
            inventory += item.name + "<br>";
        }
        return inventory;
    }
}