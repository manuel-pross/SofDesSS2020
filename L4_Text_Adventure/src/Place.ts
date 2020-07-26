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
        let fullDescription: string = "Du befindest dich " + this.description + ". Du siehst:";
        for (let item of this.items)
            fullDescription += "<br>" + item.description;
        for (let character of this.characters) {
            if (character.isShown)
                fullDescription += "<br>" + character.name;
        }
        fullDescription += "<br>Was willst du tun?";
        return fullDescription;
    }

    public removeItem(_itemName: string): Item|null {
        let removedItem: Item|null = null;
        for (let i: number = 0; i < this.items.length; i++) {
            if (_itemName.toUpperCase === this.items[i].name.toUpperCase) {
                removedItem = this.items.splice(i, 1)[0];
            }
        }
        return removedItem;
    }

    public removeCharacter(_characterName: string): void {
        for (let i: number = 0; i < this.characters.length; i++) {
            if (_characterName.toUpperCase === this.characters[i].name.toUpperCase)
                this.characters.splice(i, 1);
        }
    }
}