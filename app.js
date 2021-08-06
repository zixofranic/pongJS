/** @type {HTMLCanvasElement} */
let canvas;
let ctx;
let gameSpeed = 30;
let ballX = 50;
let ballSpeedX = 10;
let ballY = 25;
let ballSpeedY = 10;
let paddle1Y = 250;
const paddleHeight = 100

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    setInterval(function () {
        drawscene();
        moveAll();
    }, 1000 / gameSpeed)
    canvas.addEventListener("mousemove",
    function (evt) {
        let mousePos = CalculateMousePos(evt);
        paddle1Y = mousePos.y - (paddleHeight / 2);
    });
}

function CalculateMousePos(evt) {
    let rec = canvas.getBoundingClientRect();
    let root = document.documentElement;
    let mouseX = evt.clientX - rec.left - root.scrollLeft;
    var mouseY = evt.clientY - rec.top - root.scrollTop; 


    return {
        x: mouseX,
        y: mouseY
    }
}

function drawscene() {
    colorRec(0, 0, canvas.width, canvas.height, 'black'); //Drawing the black background
    colorRec(10, paddle1Y, 10, paddleHeight, 'white'); //drawing the left peddal
    colorCircle(ballX, ballY, 5, 'white'); //drawing the ball
}

// reusable circle drawing function
function colorCircle(xLoc, yLoc, ballRadius, drawColor) {
    ctx.fillStyle = drawColor;
    ctx.beginPath();
    ctx.arc(xLoc, yLoc, ballRadius, 0, Math.PI * 2, true);
    ctx.fill();
}


function colorRec(topX, topY, width, height, drawColor) {
    ctx.fillStyle = drawColor;
    ctx.fillRect(topX, topY, width, height);
}


function moveAll() {
    ballX = ballX + ballSpeedX;
    if (ballX < 0 || ballX > canvas.width) {
        ballSpeedX = -ballSpeedX;
    }
    ballY = ballY + ballSpeedY;
    if (ballY < 0 || ballY > canvas.height) {
        ballSpeedY = -ballSpeedY;
    }
}