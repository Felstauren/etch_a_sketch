// variables
grid = document.querySelector("#grid")
let randomColor = false




createGrid();
changeColor();

// Funktion Grid
 function createGrid() {
    let AnzahlCell = prompt("Please enter the number of cells you want to:")
    document.querySelector("#gridSize").innerText = `Grid Size: ${AnzahlCell}`

    const gridSize = 440
    const cellSize = (gridSize / AnzahlCell)


    if (AnzahlCell <= 100) {
        for(let i = 0; i < AnzahlCell * AnzahlCell; i++){
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = `${cellSize}px`;
            cell.style.height = `${cellSize}px`;
            grid.appendChild(cell);
        }
    } else {
        alert("Please enter a number less or equal to 100");
        createGrid();
    }       
}



// random Color --> Button
document.querySelector("#randomColor").addEventListener("click", e => {
    if (!randomColor) {
        randomChangeColor();
        randomColor = true;
    } else {
        changeColor();
        randomColor = false;

    }
    console.log(randomColor)
});

function randomChangeColor() {
    document.addEventListener("mouseover", e => {
        r = Math.floor(Math.random() *255)
        g = Math.floor(Math.random() *255)
        b = Math.floor(Math.random() *255)
        if(e.target.classList.contains("cell")){
            e.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
            e.target.style.transition = "background-color 0.3s ease";
            e.target.style.cursor = "pointer";
        }
    })
    
}


function changeColor() {
    document.addEventListener("mouseover", e => {
        if(e.target.classList.contains("cell")){
            e.target.style.backgroundColor = "blue";
            e.target.style.transition = "background-color 0.3s ease";
            e.target.style.cursor = "pointer";
        }
    })
}

// generate new Grid --> Button
document.querySelector("#btn").addEventListener("click", e => {
    grid.innerHTML = "";
    createGrid();
});


// color dark --> Button

document.querySelector("#btnDark").addEventListener("click", e => {
    colordark();
});


function colordark() {
    document.addEventListener("mouseover", e => {
        if(e.target.classList.contains("cell")){
            let opacity = parseFloat(e.target.style.opacity) || 1
            console.log(opacity);
            if (opacity > 0 && opacity < 2) {
                opacity += 0.1
                console.log(opacity);
            } else if (opacity === 2) {
                e.target.style.backgroundColor = "black"
            }
            e.target.style.opacity = opacity;
        }})
}



