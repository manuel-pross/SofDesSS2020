import { Item } from "./Item";
import { ItemType } from "./ItemType";

export class Inventory {
    public items: Item[];

    constructor(_items: Item[]) {
        this.items = _items;
    }

    public getInventory(_withoutFurtherDescription: boolean = false): string {
        let itemsAsString: string = "Im Inventar befinden sich:<br>";
        for (let item of this.items) {
            if (_withoutFurtherDescription)
                itemsAsString += item.namePrefix + "<span class=\"interact\"> " + item.name + "</span><br>";
            else
                if (item.type != ItemType.Supply)
                    itemsAsString += item.namePrefix + "<span class=\"interact\"> " + item.name + "</span>: " + item.description + " (+" + item.attributeValue + " " + item.type + ")<br>";
                else
                itemsAsString += item.namePrefix + " " + item.name + ": " + item.description + " (" + item.type + ")<br>";
        }
        return itemsAsString;
    }

    public removeItem(_itemName: string): Item|null {
        let removedItem: Item|null = null;
        for (let i: number = 0; i < this.items.length; i++) {
            if (_itemName.toUpperCase() === this.items[i].name.toUpperCase()) {
                removedItem = this.items.splice(i, 1)[0];
            }
        }
        return removedItem;
    }

    public removeAllItems(): Item[]|null {
        let removedItems: Item[]|null = null;

        if (this.items[0] != null) {
            removedItems = [];
            for (let i: number = 0; i < this.items.length; i++) {
                removedItems.push(this.items.splice(i, 1)[0]) ;
            }
        }

        return removedItems;
    }

    public addItems(_items: Item[]): void {
        for (let item of _items)
            this.items.push(item);
    }
}