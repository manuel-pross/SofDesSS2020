import { Character } from "./Character";
import { Item } from "./Item";

export class Place {
    public description: string;
    public characters: Character[];
    public items: Item[];
    public isPassable: boolean;

    constructor(_description: string, _characters: Character[], _items: Item[], _isPassable: boolean) {
        this.description = _description;
        this.characters = _characters;
        this.items = _items;
        this.isPassable = _isPassable;
    }

    public getFullDescription(): string {
        let fullDescription: string = "Du befindest dich" + this.description + ". Du siehst:";
        for (let item of this.items)
            fullDescription += "<br>" + item.description;
        for (let character of this.characters) {
            if (character.isShown)
                fullDescription += "<br>" + character.name;
        }
        fullDescription += "<br>Was willst du tun?";
        return fullDescription;
    }

    public removeItem(_itemName: string): void {
        for (let i: number = 0; i < this.items.length; i++) {
            if (_itemName.toUpperCase === this.items[i].name.toUpperCase)
                this.items.splice(i, 1);
        }
    }
}