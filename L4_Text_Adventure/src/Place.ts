import { Character } from "./Character";
import { Inventory } from "./Inventory";

export class Place {
    public descriptionPrefix: string;
    public description: string;
    public characters: Character[];
    public inventory: Inventory;
    public isPassable: boolean;

    constructor(_descriptionPrefix: string, _description: string, _characters: Character[], _inventory: Inventory, _isPassable: boolean) {
        this.descriptionPrefix = _descriptionPrefix;
        this.description = _description;
        this.characters = _characters;
        this.inventory = _inventory;
        this.isPassable = _isPassable;
    }

    public getFullDescription(): string {
        let fullDescription: string = "Du befindest dich " + this.descriptionPrefix + " " +  this.description + ". Du siehst:" + this.inventory.getInventory(true);
        for (let character of this.characters) {
            if (character.isShown)
                fullDescription += character.getSelfDescription();
        }
        fullDescription += "<br>Was willst du tun?";
        return fullDescription;
    }

    public getCharacter(_characterName: string): Character|null {
        let character: Character|null = null;
        for (let i: number = 0; i < this.characters.length; i++) {
            if (_characterName.toUpperCase() === this.characters[i].name.toUpperCase())
                character = this.characters[i];
        }
        return character;
    }

    public removeCharacter(_characterName: string): void {
        for (let i: number = 0; i < this.characters.length; i++) {
            if (_characterName.toUpperCase() === this.characters[i].name.toUpperCase())
                this.characters.splice(i, 1);
        }
    }
}