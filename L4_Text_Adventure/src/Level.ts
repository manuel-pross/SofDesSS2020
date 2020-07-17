import { Place } from "./Place";

export class Level {
    public places: Place[][];

    constructor(_places: Place[][]) {
        this.places = _places;
    }
}