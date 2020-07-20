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

    public getFullDescription(): string {
        let fullDescription: string = "Du befindest dich" + this.description + ". Du siehst:";
        for (let item of this.items)
            fullDescription += "<br>" + item;
        for (let character of this.characters) {
            if (character.isShown)
                fullDescription += "<br>" + character.name;
        }
        fullDescription += "<br>Was willst du tun?";
        return fullDescription;
    }
}