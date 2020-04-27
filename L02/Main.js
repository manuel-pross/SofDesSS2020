"use strict";
class CherryBlossom {
    constructor(x, y, speedX, speedY, radius) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.radius = radius;
    }
    getX() {
        return this.y;
    }
    getY() {
        return this.x;
    }
    getSpeedX() {
        return this.speedX;
    }
    getSpeedY() {
        return this.speedY;
    }
    getRadius() {
        return this.radius;
    }
    setX(x) {
        this.x = x;
    }
    setY(y) {
        this.y = y;
    }
    setSpeedX(speedX) {
        this.speedX = speedX;
    }
    setSpeedY(speedY) {
        this.speedY = speedY;
    }
    setRadius(radius) {
        this.radius = radius;
    }
}
/******************************************************************
     VARS
******************************************************************/
const myCanvas = document.querySelector('#my_canvas');
const ctx = myCanvas.getContext('2d');
const blossomsOnScreen = 245;
let blossomsArray = [];
let h;
let w;
const framesPerSecond = 60;
w = myCanvas.width = document.body.clientWidth;
h = myCanvas.height = window.innerHeight;
let isAnimationStopped = false;
let playButton = document.querySelector('#play-button');
let infoText = document.querySelector('#info-text');
/******************************************************************
     EVENTS
******************************************************************/
requestAnimationFrame(updateBlossomFall);
createBlossoms();
console.log('%cHello World!', 'font-weight: bold; font-size: 10px;color: #FFB7C5; text-shadow: 0px 0px 10px rgb(0,0,0)');
console.log('%cGenieße die Kirschblüten', 'font-weight: italic; font-size: 15px;color: red;');
console.log('%cDas Ding is nur für FullHD optimiert', 'font-weight: bold; font-size: 10px;color: blue;');
console.log('%cWürde ja gerne noch nen passenden Soundtrack einbauen. Aber dann krieg ich von der GEMA eventuell einen vorn Latz', 'font-weight: italic; font-size: 15px;color: green; text-shadow: 0px 0px 10px rgb(0,0,0)');
if (window.innerHeight < 1080 && window.innerWidth < 1920)
    console.log('Du hast nich mindestens FullHD!?! Ernsthaft?!? Im Jahre 2020!?! Dann kannst du die Animation eben nicht in voller Pracht genießen. HA!');
else
    console.log('Mindestens FullHD? Guter Junge :)');
window.addEventListener('resize', clientResize);
document.querySelector('#stop-button').addEventListener('click', function () {
    blossomsArray = [];
    isAnimationStopped = true;
});
playButton.addEventListener('click', function (event) {
    if (!isAnimationStopped)
        event.preventDefault();
    else {
        isAnimationStopped = false;
        requestAnimationFrame(updateBlossomFall);
        createBlossoms();
    }
});
document.querySelector('#info-button').addEventListener('click', function () {
    if (infoText.classList.toString().includes('is-visible')) {
        isAnimationStopped = false;
        requestAnimationFrame(updateBlossomFall);
        createBlossoms();
        infoText.classList.toggle('is-visible');
        playButton.disabled = false;
    }
    else {
        blossomsArray = [];
        isAnimationStopped = true;
        infoText.classList.toggle('is-visible');
        playButton.disabled = true;
    }
});
/******************************************************************
    FUNCTIONS
******************************************************************/
function random(min, max) {
    return min + Math.random() * (max - min + 1);
}
function clientResize() {
    w = myCanvas.width = document.body.clientWidth;
    h = myCanvas.height = window.innerHeight;
}
function createBlossoms() {
    for (let i = 0; i < blossomsOnScreen; i++) {
        let cherryBlossom = new CherryBlossom(Math.random() * w, Math.random() * h, random(-11, 11), random(7, 15), random(0.5, 8));
        blossomsArray.push(cherryBlossom);
    }
}
function drawBlossoms() {
    for (let i = 0; i < blossomsArray.length; i++) {
        ctx.beginPath();
        ctx.arc(blossomsArray[i].x, blossomsArray[i].y, blossomsArray[i].getRadius(), 0, //Startwinkel
        Math.PI * 2, //Endwinkel
        false //clockwise?
        );
        ctx.fillStyle = '#FFB7C5';
        ctx.fill();
    }
}
function moveBlossoms() {
    for (let i = 0; i < blossomsArray.length; i++) {
        blossomsArray[i].x += blossomsArray[i].getSpeedX();
        blossomsArray[i].y += blossomsArray[i].getSpeedY();
        if (blossomsArray[i].y > h) {
            blossomsArray[i].x = Math.random() * w * 1.5;
            blossomsArray[i].y = -50;
        }
    }
}
function updateBlossomFall() {
    setTimeout(function () {
        ctx.clearRect(0, 0, w, h);
        drawBlossoms();
        moveBlossoms();
        if (!isAnimationStopped)
            requestAnimationFrame(updateBlossomFall);
    }, 1000 / framesPerSecond);
}
//# sourceMappingURL=Main.js.map