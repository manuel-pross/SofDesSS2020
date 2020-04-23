console.log('');
console.log('%cHello World!', 'font-weight: bold; font-size: 10px;color: #FFB7C5; text-shadow: 0px 0px 10px rgb(0,0,0)');
console.log('%cGenieße die Kirschblüten', 'font-weight: italic; font-size: 15px;color: red;');
console.log('%cDas Ding is nur für FullHD optimiert' , 'font-weight: bold; font-size: 10px;color: blue;');
console.log('%cWürde ja gerne noch nen passenden Soundtrack einbauen. Aber dann krieg ich von der GEMA eventuell einen vorn Latz', 'font-weight: italic; font-size: 15px;color: green; text-shadow: 0px 0px 10px rgb(0,0,0)');

if (window.innerHeight < 1080 && window.innerWidth < 1920) 
    console.log('Du hast nich mindestens FullHD!?! Ernsthaft?!? Im Jahre 2020!?! Dann kannst du die Animation eben nicht in voller Pracht genießen. HA!')
else
    console.log('Mindestens FullHD? Guter Junge :)')

const myCanvas = <HTMLCanvasElement> document.querySelector('#my_canvas')
const ctx = myCanvas.getContext('2d');
const blossomsOnScreen = 245;
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

function createBlossoms() {
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
createBlossoms();
