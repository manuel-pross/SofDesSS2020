export abstract class Character {
    public selfDescription: string;
    public health: number;

    constructor(_selfDescritpion: string, _health: number) {
        this.selfDescription = _selfDescritpion;
        this.health = _health;
    }

    abstract attack(_character: Character): void;
}