"use strict";
var MeinZeug;
(function (MeinZeug) {
    class Female {
        constructor(_name, _age) {
            this.name = _name;
            this.age = _age;
        }
        getTitleAdress() {
            return "Sehr geehrte Frau " + this.name;
        }
    }
    class Male {
        constructor(_name, _age) {
            this.name = _name;
            this.age = _age;
        }
        getTitleAdress() {
            return "Sehr geehrter Herr " + this.name;
        }
    }
    class MyContainer {
        constructor(_theObjects) {
            this._theObjects = _theObjects; //Typecasting läuft wohl automatisch
            this.size = _theObjects.length;
        }
        add(_o) {
            let oldArray = this._theObjects;
            this._theObjects = new Array(this.size + 1);
            for (let i = 0; i < this.size; i++) {
                this._theObjects[i] = oldArray[i];
            }
            this._theObjects[this._theObjects.length - 1] = _o;
            this.size++;
        }
        getAt(i) {
            return this._theObjects[i];
        }
        count() {
            return this.size;
        }
    }
    let firstContainer = new MyContainer([2, new Male("Lauchgestalt", 99), new Female("Körperclaudia", 77)]);
    console.log(firstContainer);
    firstContainer.add(15);
    console.log(firstContainer);
})(MeinZeug || (MeinZeug = {}));
//# sourceMappingURL=Main.js.map