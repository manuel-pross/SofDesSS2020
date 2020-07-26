import { Character } from "./Character";
import { Inventory } from "./Inventory";

export class Place {
    public description: string;
    public characters: Character[];
    public items: Inventory;
    public isPassable: boolean;

    constructor(_description: string, _characters: Character[], _items: Inventory, _isPassable: boolean) {
        this.description = _description;
        this.characters = _characters;
        this.items = _items;
        this.isPassable = _isPassable;
    }

    public getFullDescription(): string {
        let fullDescription: string = "Du befindest dich " + this.description + ". Du siehst:";
        for (let character of this.characters) {
            if (character.isShown)
                fullDescription += "<br>" + character.name;
        }
        fullDescription += "<br>Was willst du tun?";
        return fullDescription;
    }

    public removeCharacter(_characterName: string): void {
        for (let i: number = 0; i < this.characters.length; i++) {
            if (_characterName.toUpperCase === this.characters[i].name.toUpperCase)
                this.characters.splice(i, 1);
        }
    }
}