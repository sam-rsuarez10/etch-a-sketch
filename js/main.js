import { createDivs } from "./create-divs.js";

const containerDiv = document.querySelector("#grid");

let cells = createDivs(containerDiv, 25, 25);
let draw = true; // flag which indicates if the event listener is in color mode
cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        if(draw) {
            cell.style.backgroundColor = 'blue';
        } else {
            cell.style.backgroundColor = 'white';
        }
    });
});