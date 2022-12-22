import { createDivs } from "./create-divs.js";

const screenWidth = screen.width;
const screenHeight = screen.height;
const containerDiv = document.querySelector("#grid");
//containerDiv.style.cssText = `width: ${screenWidth}; height: ${screenHeight}`;

createDivs(containerDiv, screenWidth, screenHeight);