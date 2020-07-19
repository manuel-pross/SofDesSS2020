export abstract class Character {
    public name: string;
    public selfDescription: string;
    public health: number;
    public isShown: boolean;

    constructor(_name: string, _selfDescritpion: string, _health: number, _isShown: boolean) {
        this.name = _name;
        this.selfDescription = _selfDescritpion;
        this.health = _health;
        this.isShown = _isShown;
    }

    abstract attack(_character: Character): void;
}