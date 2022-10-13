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

// Deletes the dots inside the canvas so they can be recreated
function deleteCanvas() {
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
            // Colors or erases de dot
            if (!eraserMode) {
                colorDot(i);
            } else {
                eraseDot(i);
            }
        });        
    }    
}

// Toggles Rainbow mode and applies style to rainbow button
function toggleRainbowMode() {
    if (!rainbowMode) {
        rainbowMode = true;        
    } else {
        rainbowMode = false;
        dotColor = colorPicker.value;
    }
    btnRainbow.classList.toggle("rainbow-on");    
}

// Toggles Eraser mode and applies style to eraser button
function toggleEraserMode() {
    if (!eraserMode) {
        eraserMode = true;
        
    } else {
        eraserMode = false;
        dotColor = colorPicker.value;
    }
    btnEraser.classList.toggle("eraser-on");    
}

// Generates a Random RGB color
function generateRandomColor() {
    let rValue = Math.floor(Math.random() * 256);
    let gValue = Math.floor(Math.random() * 256);
    let bValue = Math.floor(Math.random() * 256);
    let rgbColor = "RGB(" + rValue + ", " + gValue + ", " + bValue;    
    return rgbColor;
}

// Colors the selected dot
function colorDot(i) {
    let currentDot = document.querySelector("#dot-" + i);

    if (!rainbowMode) {
        currentDot.style.backgroundColor = dotColor;
    } else {
        dotColor = generateRandomColor();
        currentDot.style.backgroundColor = dotColor;
    }
}

// Erases the selected dot
function eraseDot(i) {
    let currentDot = document.querySelector("#dot-" + i);
    currentDot.style.background = "none";    
}
// *******************************************************************************



// **************************** RUNTIME START ************************************
// Variables for canvas, controls and modes
const canvas = document.querySelector("#canvas");
const slctSize = document.querySelector("#slct-canvas-size");
const colorPicker = document.querySelector("#color-picker");
const btnRainbow = document.querySelector("#btn-rainbow-mode");
let rainbowMode = false;
const btnEraser = document.querySelector("#btn-eraser");
let eraserMode = false;
const btnClearCanvas = document.querySelector("#btn-clear-canvas");

// Draws default size canvas and adds actions to every dot in the canvas
let selectedSize = slctSize.value;
drawCanvas(selectedSize);
addActionsToDot();

// Gets the default color
let dotColor = colorPicker.value;


// ****************** GUI - EVENT LISTENERS **************************************
// SIZE SELECTOR
// When size changes, deletes all dots, recreates canvas with new size
//and adds listeners to the dots. Disables Eraser mode if it is enabled
slctSize.addEventListener("change", function() {
    deleteCanvas();
    selectedSize = slctSize.value;
    drawCanvas(selectedSize);
    addActionsToDot();
    if (eraserMode) {
        toggleEraserMode();
    }  
});


// COLOR PICKER
// Gets the color selected by the user. Disables Rainbow or Eraser modes if they are enabled
colorPicker.addEventListener("change", function() {
    dotColor = colorPicker.value;
    if (eraserMode) {
        toggleEraserMode();
    }
    if (rainbowMode) {
        toggleRainbowMode();
    }    
});


//RAINBOW MODE BUTTON
// Toggles Rainbow mode and disables Eraser mode if it is enabled
btnRainbow.addEventListener("click", function() {
    toggleRainbowMode();    
    if (eraserMode) {
        toggleEraserMode();
    }   
});


//ERASER MODE BUTTON
// Toggles Eraser mode and disables Rainbow mode if it is enabled
btnEraser.addEventListener("click", function() {
    toggleEraserMode();
    if (rainbowMode) {
        toggleRainbowMode();
    }    
});


// Clears the whole canvas
btnClearCanvas.addEventListener("click", function() {
    deleteCanvas();
    selectedSize = slctSize.value;
    drawCanvas(selectedSize);
    addActionsToDot();
    if (eraserMode) {
        toggleEraserMode();
    }
});