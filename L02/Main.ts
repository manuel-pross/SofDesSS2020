console.log('');
console.log('%c Hello World!', 'font-weight: bold; font-size: 50px;color: red; text-shadow: 3px 3px 0 rgb(217,31,38) , 6px 6px 0 rgb(226,91,14) , 9px 9px 0 rgb(245,221,8) , 12px 12px 0 rgb(5,148,68) , 15px 15px 0 rgb(2,135,206) , 18px 18px 0 rgb(4,77,145) , 21px 21px 0 rgb(42,21,113)');
console.log('Genieße die Kirschblüten');
console.log('Das Ding is nur für FullHD optimiert');
console.log('Würde ja gerne noch nen passenden Soundtrack einbauen. Aber krieg ich von der GEMA eventuell einen vorn Latz');

let myCanvas = <HTMLCanvasElement> document.querySelector('#my_canvas')
let ctx = myCanvas.getContext('2d');
let blossomsOnScreen = 245;
let blossomsArray = [];
let w,h;
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
    setTimeout(function() { 
        ctx.clearRect(0, 0, w, h);
        drawBlossoms();
        moveBlossoms();
        requestAnimationFrame(updateBlossomFall);
    },1000 / framesPerSecond)
}

requestAnimationFrame(updateBlossomFall);
createSnowFlakes();
