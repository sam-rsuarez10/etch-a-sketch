function createDivs(container, width, height) {
    // Creates divs for 16x16 grid
    const divWidth = width / 16 - 1;
    const divHeight = height / 16 - 1;

    for(let ind = 0; ind < 256; ind++) {
        let div = document.createElement("div");
        div.style.cssText = `width: ${divWidth}px; height: ${divHeight}px; border: 1px solid black`;
        div.classList.add("grid-div");
        container.appendChild(div);
    }
}

export {createDivs}