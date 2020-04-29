"use strict";
let sentence = prompt("Na? welchen Satz möchtest verdrehen?", "Die Maus frisst Käse");
twistWordsOnly(sentence);
twistSentenceOnly(sentence);
twistSentenceAndWords(sentence);
function twistWordsOnly(sentence) {
    let words = sentence.split(" ");
    let twisted = "";
    for (let i = 0; i < words.length; i++) {
        for (let j = words[i].length - 1; j >= 0; j--) {
            if (j !== 0) {
                twisted += words[i][j];
            }
            else {
                twisted += words[i][j] + " ";
            }
        }
    }
    console.log(twisted);
}
function twistSentenceOnly(sentence) {
    let words = sentence.split(" ");
    let twisted = "";
    for (let i = words.length - 1; i >= 0; i--) {
        if (i !== 0) {
            twisted += words[i] + " ";
        }
        else {
            twisted += words[i];
        }
    }
    console.log(twisted);
}
function twistSentenceAndWords(sentence) {
    let twisted = "";
    for (let i = sentence.length - 1; i >= 0; i--) {
        twisted += sentence[i];
    }
    console.log(twisted);
}
//# sourceMappingURL=Main.js.map