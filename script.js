const GRIDSIDE = 600;
let length = 16;


const sketch = document.querySelector("#sketch");
const sliderSketch = document.querySelector("#slider-sketch");
const slider = document.querySelector("#slider")
const sliderValue = document.querySelector("#slider-value");

sliderValue.textContent = `${slider.value} x ${slider.value} Resolution`
sketch.style.width = sketch.style.height = `${GRIDSIDE}px`;

function changeColor(){
    this.style.backgroundColor = "black"
}

function createdGridCells(length){
    const numOfSquares = (length * length);
    const widthAndHeight = `${(GRIDSIDE / length) - 2.25}px`;
    
    for (let i = 0; i < numOfSquares; i++){
        const gridCell = document.createElement("div");
        
        gridCell.style.width = gridCell.style.height = widthAndHeight;
        gridCell.classList.add("cell");

        sketch.append(gridCell);
        gridCell.addEventListener("mouseover", changeColor);
    }
}

function removeGridCells(){
    while(sketch.firstChild){
        sketch.removeChild(sketch.firstChild);
    }
}

slider.oninput = function(){
    let txt = `${this.value} x ${this.value} Resolution`;
    sliderValue.innerHTML = txt;
    removeGridCells();
    createdGridCells(this.value);
}
createdGridCells(16);
