// main.js
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

const width = canvas.width;
const height = canvas.height;

// Iteration 1

const size = 50
const x = 500
const y = 500

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