import { Character } from "./Character";
import { Inventory} from "./Inventory";
import { ItemType } from "./ItemType";

export class IntelligentCharacter extends Character {
    public information: string;
    public inventory: Inventory;
    public isMovingIndependently: boolean;
    public wantsToTrade: boolean;

    constructor(_namePrefix: string, _name: string, _selfDescription: string, _health: number, _basicAttack: number, _basicDefense: number, _information: string, _inventory: Inventory, _isShown: boolean, _characterType: string, _isMovingIndependently: boolean, _wantsToTrade: boolean) {
        super(_namePrefix, _name, _selfDescription, _health, _basicAttack, _basicDefense, _isShown, _characterType);
        this.information = _information;
        this.inventory = _inventory;
        this.isMovingIndependently = _isMovingIndependently;
        this.wantsToTrade = _wantsToTrade;
    }

    public giveItems(_character: IntelligentCharacter|undefined): void {
        if (_character != undefined) {
            for (let item of this.inventory.items)
            _character.inventory.items.push(item);
        }
    }

    public useItem(_itemName: string): boolean {
        let isItemUsable: boolean = false;
        for (let i: number = 0; i < this.inventory.items.length; i++) {
            if (_itemName.toUpperCase() === this.inventory.items[i].name.toUpperCase()) {
                if (this.inventory.items[i].type == ItemType.Healing) {
                    this.health += this.inventory.items[i].attributeValue;
                    this.inventory.items.splice(i, 1);
                    isItemUsable = true;
                }
            }
        } 
        return isItemUsable;
    }

    public getCommulatedAttack(): number {
        let commulatedAttack: number = this.basicAttack;
        for (let item of this.inventory.items) {
            if (item.type === ItemType.Attack)
                commulatedAttack += item.attributeValue;
        }
        return commulatedAttack;
    }

    public getCommulatedDefense(): number {
        let commulatedDefense: number = this.basicDefense;
        for (let item of this.inventory.items) {
            if (item.type === ItemType.Defense)
                commulatedDefense += item.attributeValue;
        }
        return commulatedDefense;
    }
}