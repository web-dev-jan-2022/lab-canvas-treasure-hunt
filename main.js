// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1

const size = 50
const x = 500
const y = 500

function drawLimits() {
    //Y axis
    context.beginPath();
    context.moveTo(0, 0);
    context.lineTo(0, 500);
    context.stroke();

    context.beginPath();
    context.moveTo(0, 500);
    context.lineTo(500, 500);
    context.stroke();

    //X axis
    context.beginPath();
    context.moveTo(500, 500);
    context.lineTo(500, 0);
    context.stroke();

    context.beginPath();
    context.moveTo(500, 0);
    context.lineTo(0, 0);
    context.stroke();
}

function drawVerticalLines(position) {
    context.beginPath();
    context.moveTo(position, 0);
    context.lineTo(position, y);
    context.stroke();

}


function drawHorizontalLines(position) {
    context.beginPath();
    context.moveTo(0, position);
    context.lineTo(x, position);
    context.stroke();

}

function drawGrid() {
    drawLimits()

    let position = size
     while (position < x) {
        drawVerticalLines(position)
        drawHorizontalLines(position)
        position += size
     }
}

function drawEverything() {
  drawGrid();
  // drawPlayer()
  // drawTreasure()
}

drawEverything();