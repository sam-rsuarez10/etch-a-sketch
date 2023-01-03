function createDivs(container, scale) {
    /* Creates divs for a scaleXscale grid and returns an array
    containing the created divs */
    container.style.setProperty('--grid-rows', scale);
    container.style.setProperty('--grid-cols', scale);
    let cells = [];
    for(let ind = 0; ind < scale*scale; ind++) {
        let div = document.createElement("div");
        div.style.cssText = `border: 0.05rem solid black;`;
        div.classList.add("grid-item");
        cells.push(div);
        container.appendChild(div);
    }

    return cells;
}

export {createDivs}

