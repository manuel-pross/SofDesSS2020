"use strict";
let subjects = ["Hermine", "Ron", "Dumbledore", "Hagrid", "McGonnegal", "Snape"];
let objects = [" zaubert ", " bekämpft ", " liebt ", " zerstört ", " hasst ", " braut "];
let verbs = ["Voldemort", "Flittwick", "Sprout", "Malfoy", "Bellatrix", "Zaubertränke"];
let poem = Array(6);
for (let i = 0; i < 6; i++) {
    poem.push(getVerse(subjects, objects, verbs));
}
console.log(poem);
function getVerse(subjects, objects, verbs) {
    let soon_Verse = Array(3);
    let randomSubjectInd = (Math.floor(Math.random() * subjects.length));
    let randomObjectInd = (Math.floor(Math.random() * subjects.length));
    let randomVerbInd = (Math.floor(Math.random() * subjects.length));
    soon_Verse.push(subjects[randomSubjectInd]);
    soon_Verse.push(objects[randomVerbInd]);
    soon_Verse.push(verbs[randomObjectInd]);
    let verse = soon_Verse.join(" ");
    return verse;
}
//# sourceMappingURL=main.js.map