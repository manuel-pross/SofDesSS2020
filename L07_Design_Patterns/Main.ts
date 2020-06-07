
let firstLection: HTMLButtonElement = document.querySelector("#first_lection");
let secondLection: HTMLButtonElement = document.querySelector("#second_lection");
let thirdLection: HTMLButtonElement = document.querySelector("#third_lection");

console.log(document.querySelector("#first_lection"));

firstLection.addEventListener("click", function(): void {
    document.querySelector("#section-one").scrollIntoView();
});

secondLection.addEventListener("click", function(): void {
    document.querySelector("#section-two").scrollIntoView();
});

thirdLection.addEventListener("click", function(): void {
    document.querySelector("#section-three").scrollIntoView();
});




class IdGenerator {
    private static readonly instance: IdGenerator = new IdGenerator();
    public nextID: number = -1;

    private constructor() {} // Müssten wir nicht irgendwie noch verhindern, dass hier in der Klasse ein zweites Objekt erzeugt werden kann?
    
    public static getInstance(): IdGenerator {
        return this.instance;
    }

    public generateNewID(): number {
        return ++this.nextID;
    }
}





abstract class Spielfigur { // Im Wikipediaartikel ist das ein Interface
    public abstract drohe(_handicaps?: string): void;
}

class Monster extends Spielfigur {

    public drohe(_handicaps: string = ""): void {
        console.log(_handicaps + "Grrrrrrrrr"); // habe das ganze umgebaut, damit es in einer Zeile ausgegeben wird
    }
}

abstract class Dekorierer extends Spielfigur {

    private meineFigur: Spielfigur;

    constructor(_s: Spielfigur) {
        super();
        this.meineFigur = _s;
    }

    public drohe(_handicaps: string = ""): void {
        this.meineFigur.drohe(_handicaps);
    }
}

class HustenDekorierer extends Dekorierer {

    constructor(_s: Spielfigur) {
        super(_s);
    }

    public drohe(_handicaps: string = ""): void {
        super.drohe(_handicaps + "Hust, hust. ");
    }
}

class SchnupfenDekorierer extends Dekorierer {

    constructor(_s: Spielfigur) {
        super(_s);
    }

    public drohe(_handicaps: string = ""): void {
        super.drohe(_handicaps + "Schniff. ");
    }
}

class KotzenDekorierer extends Dekorierer {

    constructor(_s: Spielfigur) {
        super(_s);
    }

    public drohe(_handicaps: string = ""): void {
        super.drohe(_handicaps + "Wüüüüürgh. ");
    }
}

class LispelDekorierer extends Dekorierer {

    constructor(_s: Spielfigur) {
        super(_s);
    }

    public drohe(_handicaps: string = ""): void {
        super.drohe(_handicaps + "isss polier dir gleich die Fresssse! ");
    }
}

// let meinMonster: Spielfigur = new Monster();
// meinMonster.drohe();

// let meinVerhustetesMonster: Spielfigur  = new HustenDekorierer(meinMonster);
// meinVerhustetesMonster.drohe();

// let meinVerschnupftesMonster: Spielfigur  = new SchnupfenDekorierer(meinMonster);
// meinVerschnupftesMonster.drohe();

// let meinVerschnupftesVerhustetesMonster: Spielfigur  = new SchnupfenDekorierer(new HustenDekorierer(meinMonster));
// meinVerschnupftesVerhustetesMonster.drohe();

// let meinVerhustesVerschnupftesVerkotztesLispelndesMonster: Spielfigur = new HustenDekorierer(new SchnupfenDekorierer(new KotzenDekorierer(new LispelDekorierer(meinMonster))));
// meinVerhustesVerschnupftesVerkotztesLispelndesMonster.drohe();

// console.log(meinVerhustesVerschnupftesVerkotztesLispelndesMonster);


interface Subject {
    registerObserver(_observer: Observer): void;

    removeObserver(_observer: Observer): void;

    notifyObservers(): void;
}

interface Observer {
    update(_temp: number): void;
}

class Share implements Subject {
    private sharePrice: number;
    private observers: Observer[] = [];

    public registerObserver(_observer: Observer): void {
        this.observers.push(_observer);
    }

    public removeObserver(_observer: Observer): void {
        this.observers.splice(this.observers.indexOf(_observer), 1);
    }

    public notifyObservers(): void {
        for (let observer of this.observers) {
            observer.update(this.sharePrice);
        }
    }

    public setSharePrice(_sharePrice: number): void {
        this.sharePrice = _sharePrice;
        this.notifyObservers();
    }

    public getSharePrice(): number {
        return this.sharePrice;
    }
}

class SharePriceDisplay implements Observer {
    private subject: Subject;

    constructor(_share: Share) {
        this.subject = _share;
    }

    public update(_sharePrice: number): void {
        console.log("Share price is about: " + _sharePrice);
    }

    public toString(): string { // Ich muss hier die subject Variable irgendwie benutzen sonst kann ichs nich compilieren
        if (this.subject != null)
            return "There is something to observe";
        return "Nothing to observe";
    }
}

class ShareConsulter implements Observer {
    private subject: Subject;

    constructor(_share: Share) {
        this.subject = _share;
    }

    public update(_sharePrice: number): void {
        if (_sharePrice > 50)
            console.log("ShareConsulter: The share price is good you should sell the share now.");
        else {
            console.log("ShareConsulter: The share price is to bad to sell the share right now.");
        }
    }

    public toString(): string { // Ich muss hier die subject Variable irgendwie benutzen sonst kann ichs nich compilieren
        if (this.subject != null)
            return "There is something to observe";
        return "Nothing to observe";
    }
}

// let share: Share = new Share();

// let sharePriceDisplay: SharePriceDisplay =  new SharePriceDisplay(share);
// let shareConsulter: ShareConsulter = new ShareConsulter(share);

// share.registerObserver(sharePriceDisplay);
// share.registerObserver(shareConsulter);

// setTimeout(function(): void {
//     share.setSharePrice(20);
// },         2000);
// setTimeout(function(): void {
//     share.setSharePrice(30);
// },         4000); // Manchmal geht mir TS aufn Sack... warum muss ich das so weit alignen?
// setTimeout(function(): void {
//     share.setSharePrice(60);
// },         6000);


// let wordsCollection: string[] = ["Lappen", "Lauch", "Hämpfling", "Schmalhans", "Körperclaudia", "AfterEffectsAndreas", "PhotoshopPhilipp", "IndesignIlse", "LightroomLukas", "IllustratorIrene"];
// // tslint:disable-next-line: no-any
// const iterator: any = wordsCollection[Symbol.iterator]; //Wusste mir hier nicht anders zu helfen als mit any...
// while (iterator.hasMoreElements()) {
//     console.log(iterator.current().value);
//     console.log(iterator.next().value);
//}