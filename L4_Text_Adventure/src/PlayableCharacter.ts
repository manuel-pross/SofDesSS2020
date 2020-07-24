import { IntelligentCharacter } from "./IntelligentCharacter";

export class PlayableCharacter extends IntelligentCharacter {

    constructor(_name: string, _selfDescritpion: string, _health: number, _information: string, _inventory: string[], _isShown: boolean) {
        super(_name, _selfDescritpion, _health, _information, _inventory, _isShown);
    }
}