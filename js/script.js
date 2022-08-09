let container = document.getElementById("grid");

let button = document.getElementsByClassName("adjust");
button[0].onclick = function() {
    console.log("clicked");
    let size = window.prompt("\t\t\t\tWhat size would you like the grid?\n\t\t\t\t     (must be between 1 and 100)");
    destroyGrid();
    makeGrid(size);
}

function makeGrid(size) {
    let id = 0;
    for (let row = 0; row < size; row++) {
        let rows = document.createElement("div");
        rows.setAttribute("class", "row");
        rows.setAttribute("id", row)
        container.append(rows);
        for (let col = 0; col < size; col++) {
            let cell = document.createElement("div");
            cell.setAttribute("id", id++);
            cell.setAttribute("class", "cell");
            cell.style.display = "inline";
            rows.appendChild(cell);
        }
    }
}

function destroyGrid() {
    while (container.hasChildNodes()) {
        container.removeChild(container.children[0]);
    }
}

makeGrid(4);
