"use strict";
console.log('Hello World');
console.log('Genieße die Kirschblüten');
console.log('Das Ding is nur für FullHD optimiert');
console.log('Der Track is aus dem Originalsoundtrack des 1997 erschienen Miyazaki-Films "Prinzessin Mononoke", heißt "The journey to the west" und ist gelinde gesagt weltklasse. Ebenso wie der genannte Film. Interpret: Joe Hisashi');
let myCanvas = document.querySelector('#my_canvas');
let ctx = myCanvas.getContext('2d');
let blossomsOnScreen = 245;
let blossomsArray = [];
let w, h;
const framesPerSecond = 50;
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
        ctx.arc(blossomsArray[i].x, blossomsArray[i].y, blossomsArray[i].radius, 0, //Startwinkel
        Math.PI * 2, //Endwinkel
        false //clockwise?
        );
        ctx.fillStyle = '#FFB7C5';
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
    setTimeout(function () {
        ctx.clearRect(0, 0, w, h);
        drawBlossoms();
        moveBlossoms();
        requestAnimationFrame(updateBlossomFall);
    }, 1000 / framesPerSecond);
}
requestAnimationFrame(updateBlossomFall);
createSnowFlakes();
//# sourceMappingURL=Main.js.map