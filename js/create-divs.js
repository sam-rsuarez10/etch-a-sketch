function createDivs(container, rows, cols) {
    /* Creates divs for a rowsXcols grid and returns an array
    containing the created divs */
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    let cells = [];
    for(let ind = 0; ind < rows*cols; ind++) {
        let div = document.createElement("div");
        div.style.cssText = `border: 0.1rem solid black;`;
        div.classList.add("grid-item");
        cells.push(div);
        container.appendChild(div);
    }

    return cells;
}

export {createDivs}

