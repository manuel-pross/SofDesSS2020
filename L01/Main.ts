let sentence: string = prompt("Na? welchen Satz möchtest verdrehen?", "Die Maus frisst Käse");
twistWordsOnly(sentence);
twistSentenceOnly(sentence);
twistSentenceAndWords(sentence);
function twistWordsOnly(sentence: string): void {
    let words: string[] = sentence.split(" ");
    let twisted: string = "";
    for (let i: number = 0; i < words.length; i++) {
        for (let j: number = words[i].length - 1; j >= 0; j--) {
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
function twistSentenceOnly(sentence: string): void {
    let words: string[] = sentence.split(" ");
    let twisted: string = "";
    for (let i: number = words.length - 1; i >= 0; i--) {
        if (i !== 0) {
            twisted += words[i] + " ";
        }
        else {
            twisted += words[i];
        }
    }
    console.log(twisted);
}
function twistSentenceAndWords(sentence: string): void {
    let twisted: string = "";
    for (let i: number = sentence.length - 1; i >= 0; i--) {
        twisted += sentence[i];
    }
    console.log(twisted);
}