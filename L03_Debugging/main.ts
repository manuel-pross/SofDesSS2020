//Klasse zum testen
// class Person {
//     protected firstName: string;
//     protected lastName: string;
//     protected dateOfBirth: Date;

//     constructor(_firstName: string, _lastName: string, _dateOfBirth: Date) {
//         this.firstName = _firstName;
//         this.lastName = _lastName;
//         this.dateOfBirth = _dateOfBirth;
//     }

//     toString(): string {
//         let personsAge: number = this.getPersonsAge();

//         if (personsAge < 0)
//             return "Du bist noch nich mal geboren... Krass...";

//         return this.firstName + " " + this.lastName + " ist " + personsAge + " Jahre alt." ;
//     }

//     // Getters
//     getFirstName(): string {
//         return this.firstName;
//     }

//     getLastName(): string {
//         return this.lastName;
//     }

//     getDateOfBirth(): Date {
//         return this.dateOfBirth;
//     }

//     getPersonsAge(): number {

//         let personsAge: number;
//         let actualDate: Date = new Date();

//         let birthdayYear: number = this.dateOfBirth.getFullYear();
//         let todaysYear: number = actualDate.getFullYear();

//         let birthdayMonth: number = this.dateOfBirth.getMonth();
//         let todaysMonth: number = actualDate.getMonth();

//         let birthdayDay: number = this.dateOfBirth.getDay();
//         let todaysDay: number = actualDate.getDay();

//         personsAge = todaysYear - birthdayYear;

//         if (personsAge >= 0) {
//             irgendSonDreckHalt();
//         }

//         if (birthdayMonth >= todaysMonth && birthdayDay <= todaysDay) {
//             personsAge--;
//         }

//         return personsAge;
//     }

//     //Setters
//     setFirstName(_newFirstName: string): void {
//         this.firstName = _newFirstName;
//     }

//     setLastName(_newLastName: string): void {
//         this.lastName = _newLastName;
//     }

//     setDateOfBirth(_newDateOfBirth: Date): void {
//         this.dateOfBirth = _newDateOfBirth;
//     }
// }

// function irgendSonDreckHalt(): void {
//     console.log("Kacke");
// }

// let numberArr: number[] = [1, 4, 7, 3, 0, 1];
// let stringArr: string[] = ["Boss", "Chef", "Kaiser", "King", "Babo"];
// let soEinTyp: Person = new Person("Manuel", "Pross", new Date(1995, 11, 19));

// console.log(numberArr.toString());
// console.log(stringArr.toString());
// console.log(soEinTyp.toString());

//Output numberArr.toString(): 1,4,7,3,0,1
//Output stringArr.toString(): Boss,Chef,Kaiser,King,Babo
//Output Person.toString(): [object Object] 

// let personsArr: Person[] = [];

// for (let i: number = 0; i < 5; i++) {
//     let newPerson: Person = new Person("Typ " + i, "Lappen " + i, new Date(1996 + i, 3 + i, 4 + i));  
//     personsArr.push(newPerson);

//     if (newPerson.getPersonsAge() > 20)
//         console.log(newPerson.toString());
// }

// console.log(personsArr[2].getFirstName());

class Person {
    public firstName: string;
    public lastName: string;
    public dateOfBirth: Date;

    public mom: Person;
    public dad: Person; //Frage: Warum darf bzw. kann ich hier kein let oder const angeben

    constructor(_firstName: string, _lastName: string, _dateOfBirth: Date, _mom: Person, _dad: Person) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.dateOfBirth = _dateOfBirth;
        this.mom = _mom;
        this.dad = _dad;
    }
}

class Familytree {

    public static find(person: Person): Person {
        let ret: Person = null;
        if (person == null) // Dass musste ich noch einbauen, weil ich sonst eine nullpointer exception bekomme. Hier ist die Funktion: Pause on Exceptions sehr nützlich
            return null;
        if (person.lastName == "Battenberg")
            return person;
        ret = Familytree.find(person.mom); //Warum muss ich hier den Klassennamen angeben. Ich ging davon aus, dass man das nur braucht wenn man eine static Methode außerhalb der entsprechenden Klasse aufruft. Im C# Code im Repo ist das auch so
        if (ret != null)
            return ret;
        ret = Familytree.find(person.dad);
        return ret;
    }

    public static buildTree(): Person {
        let willi: Person = new Person("Willi", "Cambridge", new Date(1982, 7, 21), null, null);
        let diana: Person = new Person("Diana", "Spencer", new Date(1961, 7, 1), null, null);
        let franzi: Person = new Person("Franzi", "Roche", new Date(1936, 1, 20), null, null);
        let ruth: Person = new Person("Ruth", "Gill", new Date(1908, 6, 7), null, null);
        let moritz: Person = new Person("Moritz", "Roche", new Date(1885, 7, 8), null, null);
        let eddie: Person = new Person("Eddie", "Spencer", new Date(1924, 1, 24), null, null);
        let cynthia: Person = new Person("Cynthia", "Hamilton", new Date(1897, 8, 16), null, null);
        let albert: Person = new Person("Albert", "Spencer", new Date(1892, 5, 23), null, null);
        let charlie: Person = new Person("Charlie", "Wales", new Date(1948, 11, 14), null, null);
        let sarah: Person = new Person("Sarah", "Windsor", new Date(1926, 4, 21), null, null); //else geht leider nicht weil ts/js kein namespacing hat xD
        let lisbeth: Person = new Person("Lisbeth", "Bowes-Lyon", new Date(1900, 8, 4), null, null);
        let schorsch: Person = new Person("Schorsch-Albert", "York", new Date(1895, 12, 14), null, null);
        let philip: Person = new Person("Philip", "Battenberg", new Date(1921, 6, 10), null, null);
        let alice: Person = new Person("Alice", "Battenberg", new Date(1885, 2, 25), null, null);
        let andi: Person = new Person("Andi", "ElGreco", new Date(1882, 2, 1), null, null);

        willi.mom = diana;
        diana.mom = franzi;
        franzi.mom = ruth;
        franzi.dad = moritz;
        diana.dad = eddie;
        eddie.mom = cynthia;
        eddie.dad = albert;
        willi.dad = charlie;
        charlie.mom = sarah;
        sarah.mom = lisbeth;
        sarah.dad = schorsch;
        charlie.dad = philip;
        philip.mom = alice;
        philip.dad = andi;

        return willi;
    }
}

//Main

let rootPerson: Person = Familytree.buildTree();
let found: Person = Familytree.find(rootPerson);
console.log(found);