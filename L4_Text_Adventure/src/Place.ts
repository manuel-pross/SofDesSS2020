import { Character } from "./Character";

export class Place {
    public description: string;
    public characters: Character[];
    public items: string[];
    public isPassable: boolean;

    constructor(_description: string, _characters: Character[], _items: string[], _isPassable: boolean) {
        this.description = _description;
        this.characters = _characters;
        this.items = _items;
        this.isPassable = _isPassable;
    }
}