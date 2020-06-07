"use strict";
let firstLection = document.querySelector("#first_lection");
let secondLection = document.querySelector("#second_lection");
let thirdLection = document.querySelector("#third_lection");
console.log(document.querySelector("#first_lection"));
firstLection.addEventListener("click", function () {
    document.querySelector("#section-one").scrollIntoView();
});
secondLection.addEventListener("click", function () {
    document.querySelector("#section-two").scrollIntoView();
});
thirdLection.addEventListener("click", function () {
    document.querySelector("#section-three").scrollIntoView();
});
class IdGenerator {
    constructor() {
        this.nextID = -1;
    } // Müssten wir nicht irgendwie noch verhindern, dass hier in der Klasse ein zweites Objekt erzeugt werden kann?
    static getInstance() {
        return this.instance;
    }
    generateNewID() {
        return ++this.nextID;
    }
}
IdGenerator.instance = new IdGenerator();
class Spielfigur {
}
class Monster extends Spielfigur {
    drohe(_handicaps = "") {
        console.log(_handicaps + "Grrrrrrrrr"); // habe das ganze umgebaut, damit es in einer Zeile ausgegeben wird
    }
}
class Dekorierer extends Spielfigur {
    constructor(_s) {
        super();
        this.meineFigur = _s;
    }
    drohe(_handicaps = "") {
        this.meineFigur.drohe(_handicaps);
    }
}
class HustenDekorierer extends Dekorierer {
    constructor(_s) {
        super(_s);
    }
    drohe(_handicaps = "") {
        super.drohe(_handicaps + "Hust, hust. ");
    }
}
class SchnupfenDekorierer extends Dekorierer {
    constructor(_s) {
        super(_s);
    }
    drohe(_handicaps = "") {
        super.drohe(_handicaps + "Schniff. ");
    }
}
class KotzenDekorierer extends Dekorierer {
    constructor(_s) {
        super(_s);
    }
    drohe(_handicaps = "") {
        super.drohe(_handicaps + "Wüüüüürgh. ");
    }
}
class LispelDekorierer extends Dekorierer {
    constructor(_s) {
        super(_s);
    }
    drohe(_handicaps = "") {
        super.drohe(_handicaps + "isss polier dir gleich die Fresssse! ");
    }
}
class Share {
    constructor() {
        this.observers = [];
    }
    registerObserver(_observer) {
        this.observers.push(_observer);
    }
    removeObserver(_observer) {
        this.observers.splice(this.observers.indexOf(_observer), 1);
    }
    notifyObservers() {
        for (let observer of this.observers) {
            observer.update(this.sharePrice);
        }
    }
    setSharePrice(_sharePrice) {
        this.sharePrice = _sharePrice;
        this.notifyObservers();
    }
    getSharePrice() {
        return this.sharePrice;
    }
}
class SharePriceDisplay {
    constructor(_share) {
        this.subject = _share;
    }
    update(_sharePrice) {
        console.log("Share price is about: " + _sharePrice);
    }
    toString() {
        if (this.subject != null)
            return "There is something to observe";
        return "Nothing to observe";
    }
}
class ShareConsulter {
    constructor(_share) {
        this.subject = _share;
    }
    update(_sharePrice) {
        if (_sharePrice > 50)
            console.log("ShareConsulter: The share price is good you should sell the share now.");
        else {
            console.log("ShareConsulter: The share price is to bad to sell the share right now.");
        }
    }
    toString() {
        if (this.subject != null)
            return "There is something to observe";
        return "Nothing to observe";
    }
}
//# sourceMappingURL=Main.js.map