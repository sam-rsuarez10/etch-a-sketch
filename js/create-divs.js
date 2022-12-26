function createDivs(container, rows, cols) {
    // Creates divs for rows x cols grid
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);

    for(let ind = 0; ind < rows*cols; ind++) {
        let div = document.createElement("div");
        div.style.cssText = `border: 0.1rem solid black`;
        div.classList.add("grid-item");
        div.textContent = ind + 1;
        container.appendChild(div);
    }
}

export {createDivs}

