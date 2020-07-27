import { Item } from "./Item";

export class Inventory {
    public items: Item[];

    constructor(_items: Item[]) {
        this.items = _items;
    }

    public getInventory(): string {
        let itemsAsString: string = "";
        for (let item of this.items) {
            itemsAsString += "<br>" + item.description;
        }
        return itemsAsString;
    }

    public removeItem(_itemName: string): Item|null {
        let removedItem: Item|null = null;
        for (let i: number = 0; i < this.items.length; i++) {
            if (_itemName.toUpperCase === this.items[i].name.toUpperCase) {
                removedItem = this.items.splice(i, 1)[0];
            }
        }
        return removedItem;
    }

    public addItem(_item: Item): void {
        this.items.push(_item);
    }
}