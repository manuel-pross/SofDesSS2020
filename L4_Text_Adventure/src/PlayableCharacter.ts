import { IntelligentCharacter } from "./IntelligentCharacter";

export class PlayableCharacter extends IntelligentCharacter {

    constructor(_name: string, _selfDescritpion: string, _health: number, _information: string, _inventory: string[]) {
        super(_name, _selfDescritpion, _health, _information, _inventory);
    }

    public quit(): void {
        console.log("quit");
    }

    public commands(): void {
        console.log("commands");
    }

    public look(): void {
        console.log("look");
    }
}