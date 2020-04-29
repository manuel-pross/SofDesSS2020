"use strict";
let input = prompt("Satz eingeben", "Die Maus frisst Käse");
let reverseCharsVar = reverseChars(input);
reverseWords(reverseCharsVar);
function reverseChars(satz) {
    let returnSatz;
    for (let i = 1; i != satz.length; i++) {
        returnSatz += satz[satz.length - i];
    }
    console.log(returnSatz);
    return returnSatz;
}
function reverseWords(satz) {
    let returnSatz;
    let splitSatz = satz.split(" ");
    for (let i = 1; i != splitSatz.length; i++) {
        returnSatz += satz[splitSatz.length - i] + " ";
    }
    console.log(returnSatz.trim());
}
//# sourceMappingURL=Maint.js.map