import { createDivs } from "./create-divs.js";
import { createGridInput } from "./create-grid-scale.js";

function activate_cell(cell, color){
    // colors cell with given color o erases a colored cell
    if(draw) {
        cell.style.backgroundColor = color;
    } else {
        cell.style.backgroundColor = '';
    }
}

function listen_cells(color) {
    // Fills cells with given color if mouseover or click event is triggered and draw flad is set to true
    cells.forEach(cell => {
        cell.addEventListener('mousedown', () => {
            clickdown = true;
        });
        
        cell.addEventListener('mouseup', () => {
            clickdown = false;
        });

        cell.addEventListener('click', () => activate_cell(cell, color));

        cell.addEventListener('mouseover', () => {
            if (clickdown) {
                activate_cell(cell, color);
            }
        });
    });
}

let draw = false; // flag which indicates if the event listener is in color mode
let draw_color = '#000000';

// HTML elements selection
const containerDiv = document.querySelector("#grid");
const drawBtn = document.querySelector("#draw-btn");
const eraseBtn = document.querySelector("#erase-btn");
const clearBtn = document.querySelector("#clear-btn");
const gridBtn = document.querySelector("#grid-btn");
const colorInput = document.querySelector("#color-input");
const gridInputDiv = document.querySelector(".change-grid-container");

colorInput.value = draw_color;

let clickdown = false;


// Create grid
const maxScale = 70;
let gridScale = 16; // rows * cols scale for grid
let cells = createDivs(containerDiv, gridScale);

listen_cells(draw_color);

let displayedGridInput = false; // flag which indicates if the input foor the grid scale is already displayed
// Event Listeners
gridBtn.addEventListener('click', () => {
    // ask user a number scale factor for grid
    let validScale = false;
    if (!displayedGridInput) {
        createGridInput(gridInputDiv);
        displayedGridInput = true;
    }
    /*while (!validScale) {
        let inputScale = parseInt(prompt("Type a rows X columns scale for sketchpad"));
        if(inputScale && inputScale <= maxScale) {
            validScale =  true;
            // remove existing cells from grid
            cells.forEach(cell => {
                containerDiv.removeChild(cell);

            });
            // create cells with new scale
            cells = createDivs(containerDiv, inputScale);
            listen_cells(draw_color);
        }
    }*/
});

drawBtn.addEventListener('click', () => draw = true);

eraseBtn.addEventListener('click', () => draw = false);

clearBtn.addEventListener('click', () => {
    cells.forEach(cell => cell.style.backgroundColor = '');
});

colorInput.addEventListener('input', () => {
    draw_color = colorInput.value;
    listen_cells(draw_color);
});
