function createGridInput(parentElement){
    // creates the corrresponding input to let the user type a grid scale

    const groupDiv = document.createElement('div');
    groupDiv.classList.add('input-group', 'mb-3');

    const formFloatingDiv = document.createElement('div');
    formFloatingDiv.classList.add('form-floating', 'mb-3');

    const gridInput = document.createElement('input');
    gridInput.classList.add('form-control');
    gridInput.setAttribute('type', 'number');
    gridInput.setAttribute('id', 'grid-input');

    const gridLabel = document.createElement('label');
    gridLabel.textContent = 'Grid factor';
    gridLabel.setAttribute('for', 'grid-input');

    formFloatingDiv.appendChild(gridInput);
    formFloatingDiv.appendChild(gridLabel);

    const confirmBtn = document.createElement('button');
    confirmBtn.classList.add('btn', 'btn-outline-success');
    confirmBtn.setAttribute('type', 'button');
    confirmBtn.setAttribute('id', 'confirm-button');
    confirmBtn.textContent= 'Resize grid';

    groupDiv.appendChild(formFloatingDiv);
    groupDiv.appendChild(confirmBtn);

    parentElement.appendChild(groupDiv);
}

export {createGridInput};