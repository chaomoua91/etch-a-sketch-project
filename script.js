document.addEventListener("DOMContentLoaded", function () {
    createBoard(16);
    let selectButton = document.querySelector("#popup");
    selectButton.addEventListener("click", function () {
        let size = getSize();
        createBoard(size);
    })
}
)

function createBoard (size) {
    let board = document.querySelector("#sketch-area");

    board.style.gridTemplateColumns = `repeat (${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat (${size}, 1fr)`;

    let numDivs = size * size;

    for (let i = 0; i < numDivs; i++) {
        let div = document.createElement("div");
        div.style.backgroundColor = "black"
        board.insertAdjacentElement("beforeend", div)
    }

}




function getSize () {
    let input = prompt ("Select the size of the drawing grid.");
    let message = document.querySelector("#message");
    if (input === "") {
        message.innerHTML = "Please provide a number";
    } else if (input < 0 || input > 100) {
        message.innerHTML = "Provide a number between 1 and 100"
    } else {
        message.innerHTML = "Let's Draw!"
        return input;
    }
}
