"use strict";
//Klasse zum testen
class Person {
    constructor(_firstName, _lastName, _dateOfBirth) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.dateOfBirth = _dateOfBirth;
    }
    toString() {
        let personsAge = this.getPersonsAge();
        if (personsAge < 0)
            return "Du bist noch nich mal geboren... Krass...";
        return this.firstName + " " + this.lastName + " ist " + personsAge + " Jahre alt.";
    }
    // Getters
    getFirstName() {
        return this.firstName;
    }
    getLastName() {
        return this.lastName;
    }
    getDateOfBirth() {
        return this.dateOfBirth;
    }
    getPersonsAge() {
        let personsAge;
        let actualDate = new Date();
        let birthdayYear = this.dateOfBirth.getFullYear();
        let todaysYear = actualDate.getFullYear();
        let birthdayMonth = this.dateOfBirth.getMonth();
        let todaysMonth = actualDate.getMonth();
        let birthdayDay = this.dateOfBirth.getDay();
        let todaysDay = actualDate.getDay();
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
    setFirstName(_newFirstName) {
        this.firstName = _newFirstName;
    }
    setLastName(_newLastName) {
        this.lastName = _newLastName;
    }
    setDateOfBirth(_newDateOfBirth) {
        this.dateOfBirth = _newDateOfBirth;
    }
}
function irgendSonDreckHalt() {
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
let personsArr = [];
for (let i = 0; i < 5; i++) {
    let newPerson = new Person("Typ " + i, "Lappen " + i, new Date(1996 + i, 3 + i, 4 + i));
    personsArr.push(newPerson);
    if (newPerson.getPersonsAge() > 20)
        console.log(newPerson.toString());
}
console.log(personsArr[2].getFirstName());
//# sourceMappingURL=main.js.map