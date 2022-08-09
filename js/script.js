let container = document.getElementById("grid");

function makeGrid() {
    let id = 0;
    for (let row = 0; row < 4; row++) {
        let rows = document.createElement("div");
        rows.setAttribute("class", "row");
        rows.setAttribute("id", row)
        container.append(rows);
        for (let col = 0; col < 4; col++) {
            let cell = document.createElement("div");
            cell.setAttribute("id", id++);
            cell.setAttribute("class", "cell");
            cell.innerHTML = "CELL";
            cell.style.display = "inline";
            rows.appendChild(cell);
        }
    }
}

makeGrid();
