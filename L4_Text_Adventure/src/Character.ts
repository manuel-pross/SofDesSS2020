export abstract class Character {
    public namePrefix: string;
    public name: string;
    public selfDescription: string;
    public health: number;
    public basicAttack: number;
    public basicDefense: number;
    public isShown: boolean;
    public characterType: string; //Nötig für die Speicherung

    constructor(_namePrefix: string, _name: string, _selfDescription: string, _health: number, _basicAttack: number, _basicDefense: number, _isShown: boolean, _characterType: string) {
        this.namePrefix = _namePrefix;
        this.name = _name;
        this.selfDescription = _selfDescription;
        this.health = _health;
        this.basicAttack = _basicAttack;
        this.basicDefense = _basicDefense;
        this.isShown = _isShown;
        this.characterType = _characterType;
    }

    public getSelfDescription(): string {
        return "<br>" + this.namePrefix + "<span class=\"interact\"> " + this.name + "</span>: " + this.selfDescription;
    }

    public attack(_character: Character): boolean {
        let isEnemyDefeated: boolean = false;
        let commulatedAttack: number = this.getCommulatedAttack();
        let enemyDefense: number = _character.getCommulatedDefense();

        let damage: number = commulatedAttack - enemyDefense;

        if (damage < 0)
            damage = 0;

        _character.health = _character.health - damage;

        if (_character.health <= 0)
            isEnemyDefeated = true;
        
        return isEnemyDefeated;
    }
    
    abstract getCommulatedAttack(): number;
    abstract getCommulatedDefense(): number;
}