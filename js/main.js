import { createDivs } from "./create-divs.js";

function listen_cells() {
    cells.forEach(cell => {
        cell.addEventListener("mouseover", () => {
            if(draw) {
                cell.style.backgroundColor = 'blue';
            } else {
                cell.style.backgroundColor = '';
            }
        });
    });
}

let draw = false; // flag which indicates if the event listener is in color mode

// HTML elements selection
const containerDiv = document.querySelector("#grid");
const drawBtn = document.querySelector("#draw-btn");
const eraseBtn = document.querySelector("#erase-btn");
const clearBtn = document.querySelector("#clear-btn");
const gridBtn = document.querySelector("#grid-btn");

// Create grid
const maxScale = 70;
let gridScale = 16; // rows * cols scale for grid
let cells = createDivs(containerDiv, gridScale);
listen_cells();

// Event Listeners
gridBtn.addEventListener('click', () => {
    // ask user a number scale for grid
    let validScale = false;
    while (!validScale) {
        let inputScale = parseInt(prompt("Type a rows X columns scale for sketchpad"));
        if(inputScale && inputScale <= maxScale) {
            validScale =  true;
            // remove existing cells from grid
            cells.forEach(cell => {
                containerDiv.removeChild(cell);

            });
            // create cells with new scale
            cells = createDivs(containerDiv, inputScale);
            listen_cells();
        }
    }
});

drawBtn.addEventListener('click', () => draw = true);

eraseBtn.addEventListener('click', () => draw = false);

clearBtn.addEventListener('click', () => {
    cells.forEach(cell => cell.style.backgroundColor = '');
});



// how to detect is click is pressed down in javascript?
