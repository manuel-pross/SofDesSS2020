//Klasse zum testen
class Person {
    protected firstName: string;
    protected lastName: string;
    protected dateOfBirth: Date;

    constructor(_firstName: string, _lastName: string, _dateOfBirth: Date) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.dateOfBirth = _dateOfBirth;
    }

    toString(): string {
        let personsAge: number = this.getPersonsAge();

        if (personsAge < 0)
            return "Du bist noch nich mal geboren... Krass...";

        return this.firstName + " " + this.lastName + " ist " + personsAge + " Jahre alt." ;
    }

    // Getters
    getFirstName(): string {
        return this.firstName;
    }

    getLastName(): string {
        return this.lastName;
    }

    getDateOfBirth(): Date {
        return this.dateOfBirth;
    }

    getPersonsAge(): number {

        let personsAge: number;
        let actualDate: Date = new Date();

        let birthdayYear: number = this.dateOfBirth.getFullYear();
        let todaysYear: number = actualDate.getFullYear();

        let birthdayMonth: number = this.dateOfBirth.getMonth();
        let todaysMonth: number = actualDate.getMonth();

        let birthdayDay: number = this.dateOfBirth.getDay();
        let todaysDay: number = actualDate.getDay();

        personsAge = todaysYear - birthdayYear;

        if (personsAge >= 0) {
            irgendSonDreckHalt();
        }

        if (birthdayMonth >= todaysMonth && birthdayDay <= todaysDay) {
            personsAge--;
        }

        return personsAge;
    }

    //Setters
    setFirstName(_newFirstName: string): void {
        this.firstName = _newFirstName;
    }

    setLastName(_newLastName: string): void {
        this.lastName = _newLastName;
    }

    setDateOfBirth(_newDateOfBirth: Date): void {
        this.dateOfBirth = _newDateOfBirth;
    }
}

function irgendSonDreckHalt(): void {
    console.log("Kacke");
}

// let numberArr: number[] = [1, 4, 7, 3, 0, 1];
// let stringArr: string[] = ["Boss", "Chef", "Kaiser", "King", "Babo"];
// let soEinTyp: Person = new Person("Manuel", "Pross", new Date(1995, 11, 19));

// console.log(numberArr.toString());
// console.log(stringArr.toString());
// console.log(soEinTyp.toString());

//Output numberArr.toString(): 1,4,7,3,0,1
//Output stringArr.toString(): Boss,Chef,Kaiser,King,Babo
//Output Person.toString(): [object Object] 

let personsArr: Person[] = [];

for (let i: number = 0; i < 5; i++) {
    let newPerson: Person = new Person("Typ " + i, "Lappen " + i, new Date(1996 + i, 3 + i, 4 + i));  
    personsArr.push(newPerson);

    if (newPerson.getPersonsAge() > 20)
        console.log(newPerson.toString());
}

console.log(personsArr[2].getFirstName());