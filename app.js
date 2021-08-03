/** @type {HTMLCanvasElement} */
let canvas;
let ctx;
let ballX = 0;
let gameSpeed = 30;
let ballSpeedX = 10;

window.onload = function () {
    canvas = document.getElementById('gameCanvas');
    ctx = canvas.getContext('2d');
    setInterval(function () {
        drawscene();
        moveAll();
    }, 1000 / gameSpeed)
}

function drawscene() {
    let peddalHeight = 100
    colorRec(0, 0, canvas.width, canvas.height, 'black'); //Drawing the black background
    colorRec(0, (canvas.height / 2) - peddalHeight / 2, 10, peddalHeight, 'white'); //drawing the left peddal
    colorCircle(ballX, 150, 10, 'white'); //drawing the ball
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
}