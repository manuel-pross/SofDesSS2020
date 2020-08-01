import { Character } from "./Character";


export class SimpleCharacter extends Character {

    constructor(_name: string, _namePrefix: string, _selfDescription: string, _health: number, _basicAttack: number, _basicDefense: number, _isShown: boolean, _characterType: string) {
        super(_name, _namePrefix, _selfDescription, _health, _basicAttack, _basicDefense, _isShown, _characterType);
    }

    public getCommulatedAttack(): number {
        return this.basicAttack;
    }

    public getCommulatedDefense(): number {
        return this.basicDefense;
    }
}