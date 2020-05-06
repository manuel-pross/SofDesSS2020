let subjects: string[] = ["Hermine", "Ron", "Dumbledore", "Hagrid", "McGonnegal", "Snape"];
let objects: string[] = [" zaubert ", " bekämpft ", " liebt ", " zerstört ", " hasst ", " braut "];
let verbs: string[] = ["Voldemort", "Flittwick", "Sprout", "Malfoy", "Bellatrix", "Zaubertränke"];

let poem: string[] = Array(6);

for (let i: number = 0; i < 6; i++) {
    poem.push(getVerse(subjects, objects, verbs));
}
console.log(poem);

function getVerse(subjects: string[], objects: string[], verbs: string[]): string {
    let soon_Verse: string[] = Array(3);

    let randomSubjectInd: number = (Math.floor(Math.random() * subjects.length));
    let randomObjectInd: number = (Math.floor(Math.random() * subjects.length));
    let randomVerbInd: number = (Math.floor(Math.random() * subjects.length));

    soon_Verse.push(subjects[randomSubjectInd]);
    soon_Verse.push(objects[randomVerbInd]);
    soon_Verse.push(verbs[randomObjectInd]);

    let verse: string = soon_Verse.join(" ");

    return verse;
}