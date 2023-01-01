import { createDivs } from "./create-divs.js";

// HTML elements selection
const containerDiv = document.querySelector("#grid");
const drawBtn = document.querySelector("#draw-btn");
const eraseBtn = document.querySelector("#erase-btn");

// Create grid
let cells = createDivs(containerDiv, 16, 16);

let draw = false; // flag which indicates if the event listener is in color mode

// Event Listeners
drawBtn.addEventListener('click', () => draw = true);
eraseBtn.addEventListener('click', () => draw = false);

cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        if(draw) {
            cell.style.backgroundColor = 'blue';
        } else {
            cell.style.backgroundColor = '';
        }
    });
});

// how to detect is click is pressed down in javascript?
