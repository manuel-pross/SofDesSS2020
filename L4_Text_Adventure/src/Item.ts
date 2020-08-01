import { ItemType } from "./ItemType";

export class Item {
    public namePrefix: string;
    public name: string;
    public description: string;
    public type: ItemType;
    public attributeValue: number;

    constructor(_namePrefix: string, _name: string, _description: string, _type: ItemType, _attributeValue: number = 0) {
        this.namePrefix = _namePrefix;
        this.name = _name;
        this.description = _description;
        this.type = _type;
        this.attributeValue = _attributeValue;
    }
}