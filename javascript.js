const container = document.querySelector(".container");
const grid = document.querySelector(".grid");
const clearButton = document.querySelector(".clear");

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

// DEFAULT GRID (16x16)

gererateGrid(16);

grid.addEventListener("click", () => {
    let gridSize = prompt("Please input the number of cells per side for your grid.", 0);
    if (gridSize > 100) {
        alert("Grids cannot exceed 100 cells per side. Please input a valid number.");
    }
    else{
        container.innerHTML = "";
        gererateGrid(gridSize);
    }
});

// Clears the colored squares from the grid. Number of cells remains the same.

clearButton.addEventListener("click", () => {
    let cellsNumber = document.querySelectorAll(".cell").length;
    container.innerHTML = "";
    gererateGrid(Math.sqrt(cellsNumber));
});

// Generates Grid using the number of cells per side as input. 

function gererateGrid(num) {
    for (let i = 0; i < num; i++) {
        let row = document.createElement('div');
        row.className = "row";
        for (let j = 0; j < num; j++) {
            let cell = document.createElement('div');
            cell.className = "cell";
            cell.style.width = `${640/num}px`;
            cell.style.height = `${640/num}px`;
            cell.addEventListener('mouseover', changeCellColor);
            cell.addEventListener('mousedown', changeCellColor);
            row.appendChild(cell);
        }                
        container.appendChild(row);
    }
}

// Changes cell color as long as the right mouse button is pressed down within the grid.
function changeCellColor(e) {
    if (e.type === 'mouseover' && !mouseDown) return;
    e.target.style.backgroundColor = "rgb(61, 40, 23)";
}
 

