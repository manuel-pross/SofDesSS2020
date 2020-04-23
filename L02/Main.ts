console.log('Hello World');

let myCanvas = <HTMLCanvasElement> document.querySelector('#my_canvas')
let ctx = myCanvas.getContext('2d');
let blossomsOnScreen = 245;
let blossomsArray = [];
let w,h;
w = myCanvas.width = document.body.clientWidth;
h = myCanvas.height = window.innerHeight;

function random(min, max) {
    return min + Math.random() * (max - min + 1);
}

function clientResize() {
    w = myCanvas.width = document.body.clientWidth;
    h = myCanvas.height = window.innerHeight;
}

window.addEventListener('resize', clientResize);

function createSnowFlakes() {
    for (let i = 0; i < blossomsOnScreen; i++) {
        blossomsArray.push({
            x: Math.random() * w,
            y: Math.random() * h,
            speedX: random(-11, 11),
            speedY: random(7, 15),
            radius: random(0.5, 4.2)
        });
        
    }
}

function drawBlossoms() {
    for (let i = 0; i < blossomsArray.length; i++) {
        ctx.beginPath();
        ctx.arc(
            blossomsArray[i].x,
            blossomsArray[i].y,
            blossomsArray[i].radius,
            0, //Startwinkel
            Math.PI*2, //Endwinkel
            false //clockwise?
        );
        ctx.fillStyle = '#FFB7C5'
        ctx.fill();
    }
}

function moveBlossoms() {
    for (let i = 0; i < blossomsArray.length; i++) {
        blossomsArray[i].x += blossomsArray[i].speedX;
        blossomsArray[i].y += blossomsArray[i].speedY;

        if (blossomsArray[i].y > h) {
            blossomsArray[i].x = Math.random() * w * 1.5;
            blossomsArray[i].y = -50;
        }
        
    }
}

function updateBlossomFall() {
    ctx.clearRect(0, 0, w, h);
    drawBlossoms();
    moveBlossoms();
}

setInterval(updateBlossomFall, 50);
createSnowFlakes();

// const firstName = prompt('Hello World. Willkommen. Wie heißt du denn?', 'Kevin');
// let alphaKevin = prompt('Was Kevin? Dein Ernst? HAHAHAHAHAHAHA. Du Opfer. So ein richtiger Alphakevien oder wie?', 'Ja');
// let personAge = prompt('Dacht ich mir xD Und wie alt bist du', '18');
// let personAgeAsNumber = +personAge;

// let answer;
// if(personAgeAsNumber < 18)
//     answer = prompt('Dann schnell weg von der Seite. Das is nix für dich', '18');
// else {
//     if(personAgeAsNumber > 65)
//         answer = prompt('Rentner oder was? Nix besseres zu tun?', 'nein');
//     else
//         answer = prompt('Ok dann weiter viel Spaß auf der Seite. Unter F12 im Consolenreiter darfst du noch meinen Hello-World-Consoleneintrag bewundern. Oder hast keinen Bock', 'nein');
// }

// if(answer == 'nein') {
//     let answer2 = prompt('Wie auch immer möge Covid dir gnädig sein', 'Danke. Für nichts...');
//     document.body.innerHTML += '<p>Reicht das für nen Joker?</p>';
//     console.log(answer2);
// }
