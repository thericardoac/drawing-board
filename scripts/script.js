"use strict"

// ******************************* FUNCTION DECLARATIONS ****************************
// Draws canvas and its dots
function drawCanvas(selectedSize) {    
    // Sets canvas columns accordingly to selected size
    canvas.style.gridTemplateColumns = "repeat(" + selectedSize + ", 1fr";
    
    // Multiply height by width to set the total dots to draw
    let dotsToDraw = selectedSize * selectedSize;    
    for (let i = 1; i <= dotsToDraw; i++) {
        let canvasDot = document.createElement("div");
        canvasDot.className = "canvas-dot";
        canvasDot.id = "dot-" + i;      
        canvas.appendChild(canvasDot);
    }
}

// Deletes the dots inside the canvas
function deleteDots() {
    let dotCount = document.querySelectorAll(".canvas-dot").length;
    let currentDot;    

    for (let i = 1; i <= dotCount; i++) {        
        currentDot = document.querySelector("#dot-" + i);        
        currentDot.remove();
    }    
}

// Adds EventListener to every dot
function addActionsToDot() {
    let dotCount = document.querySelectorAll(".canvas-dot").length;
    let currentDot;    

    for (let i = 1; i <= dotCount; i++) {        
        currentDot = document.querySelector("#dot-" + i);        
        currentDot.addEventListener("click", function() {
            console.log("You clicked dot #" + i);
        });
    }    
}
// *******************************************************************************



// **************************** RUNTIME START ************************************
const canvas = document.querySelector("#canvas");
const slctSize = document.querySelector("#slct-canvas-size");
const colorPicker = document.querySelector("#color-picker");

// Draws default size canvas and adds actions to every dot in the canvas
let selectedSize = slctSize.value;
drawCanvas(selectedSize);
addActionsToDot();

// Gets the default color
let dotColor = colorPicker.value;
console.log(dotColor);



// ****************** GUI - EVENT LISTENERS **************************************
// When select value changes, deletes all dots, recreates canvas with new size
//and adds listeners to the dots
slctSize.addEventListener("change", function() {
    deleteDots();
    selectedSize = slctSize.value;
    drawCanvas(selectedSize);
    addActionsToDot();
});

// Gets the color selected by the user
colorPicker.addEventListener("change", function() {
    dotColor = colorPicker.value;
    console.log(dotColor);
});