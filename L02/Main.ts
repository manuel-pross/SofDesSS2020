console.log('Hello World');
const firstName = prompt('Hello World. Willkommen. Wie heißt du denn?', 'Kevin');
let alphaKevin = prompt('Was Kevin? Dein Ernst? HAHAHAHAHAHAHA. Du Opfer. So ein richtiger Alphakevien oder wie?', 'Ja');
let personAge = prompt('Dacht ich mir xD Und wie alt bist du', '18');
let personAgeAsNumber = +personAge;

let answer;
if(personAgeAsNumber < 18)
    answer = prompt('Dann schnell weg von der Seite. Das is nix für dich', '18');
else {
    if(personAgeAsNumber > 65)
        answer = prompt('Rentner oder was? Nix besseres zu tun?', 'nein');
    else
        answer = prompt('Ok dann weiter viel Spaß auf der Seite. Unter F12 im Consolenreiter darfst du noch meinen Hello-World-Consoleneintrag bewundern. Oder hast keinen Bock', 'nein');
}

if(answer == 'nein') {
    let answer2 = prompt('Wie auch immer möge Covid dir gnädig sein', 'Danke. Für nichts...');
    document.body.innerHTML += '<p>Immer wieder gerne ;)</p>';
    console.log(answer2);
}
