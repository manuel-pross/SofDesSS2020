namespace MeinZeug {
    interface Person {

        name: string; //Warum kann ich hier keinen Accessmodifier angeben?
        age: number;
    
        //kann ich hier nicht irgendeine Art von abstraktem Konstruktor definieren den die Unterklassen per super() aufrufen?
    
        getTitleAdress(): string;
    
    }
    
    class Female implements Person {
    
        name: string; //Warum muss ich hier die Attribute nochmal aufschreiben? Ich implementiere doch das Interface in dem sie bekannt sind. Müssten sie dann hier nicht bekannt sein?
        age: number;
    
        constructor(_name: string, _age: number) {
            this.name = _name;
            this.age = _age;
        }
    
        public getTitleAdress(): string {
            return "Sehr geehrte Frau " + this.name;
        }
    }
    
    class Male implements Person {
        
        name: string;
        age: number;
    
        constructor(_name: string, _age: number) {
            this.name = _name;
            this.age = _age;
        }
    
        public getTitleAdress(): string {
            return "Sehr geehrter Herr " + this.name;
        }
    }
    
    class MyContainer {
    
        private _theObjects: Object[]; //Code Conventions werden hier nicht eingehalten
        private size: number;
    
        constructor(_theObjects: Object[]) {
            this._theObjects = _theObjects; //Typecasting läuft wohl automatisch
            this.size = _theObjects.length; 
        }
    
        public add(_o: Object): void {
            let oldArray: Object[] = this._theObjects;
            this._theObjects = new Array(this.size + 1);
            for (let i: number = 0; i < this.size; i++) {
                this._theObjects[i] = oldArray[i];
            }
            this._theObjects[this._theObjects.length - 1] = _o;
            this.size++;
        }

        public getAt(i: number): Object {
            return this._theObjects[i];
        }

        public count(): number {
            return this.size;
        }
    }

    let firstContainer: MyContainer = new MyContainer([2, new Male("Lauchgestalt", 99), new Female("Körperclaudia", 77)]);
    console.log(firstContainer);
    firstContainer.add(15);
    console.log(firstContainer);
}

