const GRIDSIDE = 600;
let length = 16;
let currentColor = "black"; 
let isDrawing = false; 

const sketch = document.querySelector("#sketch");
const slider = document.querySelector("#slider");
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value} Resolution`;
sketch.style.width = sketch.style.height = `${GRIDSIDE}px`;

function changeColor() {
    if (isDrawing) {
        this.style.backgroundColor = currentColor;
    }
}

function createdGridCells(length) {
    const numOfSquares = length * length;
    const widthAndHeight = `${(GRIDSIDE / length) - 2.25}px`;

    for (let i = 0; i < numOfSquares; i++) {
        const gridCell = document.createElement("div");

        gridCell.style.width = gridCell.style.height = widthAndHeight;
        gridCell.classList.add("cell");

        sketch.append(gridCell);
        gridCell.addEventListener("mousedown", function () {
            isDrawing = true;
            changeColor.call(this);
        });
        gridCell.addEventListener("mousemove", changeColor);
    }
}

function removeGridCells() {
    while (sketch.firstChild) {
        sketch.removeChild(sketch.firstChild);
    }
}

slider.oninput = function () {
    let txt = `${this.value} x ${this.value} Resolution`;
    sliderValue.innerHTML = txt;
    removeGridCells();
    createdGridCells(this.value);
}

const colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("change", function () {
    currentColor = this.value;
});


document.addEventListener("mouseup", function () {
    isDrawing = false;
});

createdGridCells(16);
