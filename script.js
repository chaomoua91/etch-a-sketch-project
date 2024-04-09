const gridSide = 600;
let rows = 16;
let cols = 16;

const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = sketchArea.style.height = `${gridSide}px`;

function changeBackgroundColor () {
    this.style.backgroundColor = "orange";
}


function createGridCells () {
    for (let i = 0; i < (rows * cols); i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width =  `${(gridSide / cols) - 2}px`;
        gridCell.style.height = `${(gridSide / rows) - 2}px`;

        gridCell.classList.add("cell");

        sketchArea.appendChild(gridCell);

        gridCell.addEventListener("mouseover", changeBackgroundColor); 
    }

}

createGridCells();