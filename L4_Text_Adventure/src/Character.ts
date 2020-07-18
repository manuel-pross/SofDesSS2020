export abstract class Character {
    public name: string;
    public selfDescription: string;
    public health: number;

    constructor(_name: string, _selfDescritpion: string, _health: number) {
        this.name = _name;
        this.selfDescription = _selfDescritpion;
        this.health = _health;
    }

    abstract attack(_character: Character): void;
}