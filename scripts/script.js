"use strict"

// ****************************** VARIABLE DECLARATIONS *****************************
// Variables for canvas, controls, modes and use of dot.
const canvas = document.querySelector("#canvas");
const slctSize = document.querySelector("#slct-canvas-size");
let selectedSize = slctSize.value;
const colorPicker = document.querySelector("#color-picker");
let dotColor = colorPicker.value;
const btnRainbow = document.querySelector("#btn-rainbow-mode");
let rainbowMode = false;
const btnEraser = document.querySelector("#btn-eraser");
let eraserMode = false;
const btnClearCanvas = document.querySelector("#btn-clear-canvas");
let useDot = false;



// ******************************* FUNCTION DECLARATIONS ****************************
// Creates the dots inside the canvas.
function createCanvasDots(selectedSize) {
    // Sets canvas columns accordingly to selected size.
    canvas.style.gridTemplateColumns = "repeat(" + selectedSize + ", 1fr";        

    // Multiply height by width to set the total dots to create.
    let dotsToDraw = selectedSize * selectedSize;    
    let canvasDot;
    
    // Creates the dots inside the canvas.
    for (let i = 1; i <= dotsToDraw; i++) {
        canvasDot = document.createElement("div");
        canvasDot.className = "canvas-dot";
        canvasDot.id = "dot-" + i;                 
        canvas.appendChild(canvasDot);
        
        // If user hovers the dot and useDot is true, will color or erase the dot.      
        canvasDot.addEventListener("mouseover", function() {                              
            if (useDot) {
                if (!eraserMode) {
                    colorDot(i);
                } else {
                    eraseDot(i);
                } 
            }                       
        });
        
        // Paints or erases a single dot in canvas at double click.
        canvasDot.addEventListener("dblclick", function() {            
            if (!eraserMode) {
                colorDot(i);
            } else {
                eraseDot(i);
            }                          
        });

        // Toggles the use of the dot (interaction with the dot).
        canvasDot.addEventListener("click", function() {
            if (!useDot) {
                useDot = true;
        
            } else {
                useDot = false;
            }          
        });
    }

    // Disables eraser mode so the user, can start drawing at canvas creation.
    // Useful if eraser mode is enabled at the time of clearing or selecting a new size canvas.
    if (eraserMode) {
        toggleEraserMode();
    }
}


// Deletes (removes from DOM) every dot inside the canvas.
function deleteCanvasDots() {
    let dotCount = canvas.querySelectorAll(".canvas-dot").length;
    let dotToDelete;    

    for (let i = 1; i <= dotCount; i++) {        
        dotToDelete = canvas.querySelector("#dot-" + i);        
        dotToDelete.remove();
    }   
}


// Toggles Rainbow mode and applies style to rainbow button.
function toggleRainbowMode() {
    if (!rainbowMode) {
        rainbowMode = true;        
    } else {
        rainbowMode = false;
        dotColor = colorPicker.value;
    }
    btnRainbow.classList.toggle("rainbow-on");  
}


// Toggles Eraser mode and applies style to eraser button.
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
    let rgbColor = "RGB(" + rValue + ", " + gValue + ", " + bValue + ")";
    return rgbColor;
}


// Colors the selected dot.
function colorDot(i) {
    let dotToPaint = document.querySelector("#dot-" + i);

    if (!rainbowMode) {
        dotToPaint.style.backgroundColor = dotColor;
    } else {
        dotColor = generateRandomColor();
        dotToPaint.style.backgroundColor = dotColor;
    }
}


// Erases the selected dot. (Clears the color).
function eraseDot(i) {
    let dotToErase = document.querySelector("#dot-" + i);
    dotToErase.style.background = "none";    
}


// ***************************** POPULATES THE CANVAS AT PAGE LOAD **************************************
// Creates dots inside the canvas accordingly with the default size selected. 
createCanvasDots(selectedSize);

// If user leaves the canvas, the use of dot (interaction) gets disabled.
canvas.addEventListener("mouseleave", function() {
    useDot = false;    
});



// ***************************** GUI ELEMENTS - EVENT LISTENERS **************************************
// SIZE SELECTOR
// When size changes, deletes and creates the canvas dots again.
slctSize.addEventListener("change", function() {
    selectedSize = slctSize.value;
    deleteCanvasDots();
    createCanvasDots(selectedSize);
});


// COLOR PICKER
// Gets the color selected by the user. Disables Rainbow or Eraser modes if they are enabled.
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
// Toggles Rainbow mode and disables Eraser mode if it is enabled.
btnRainbow.addEventListener("click", function() {
    toggleRainbowMode();    
    if (eraserMode) {
        toggleEraserMode();
    }   
});


//ERASER MODE BUTTON
// Toggles Eraser mode and disables Rainbow mode if it is enabled.
btnEraser.addEventListener("click", function() {
    toggleEraserMode();
    if (rainbowMode) {
        toggleRainbowMode();
    }    
});


// CLEAR CANVAS BUTTON
// Deletes and creates the canvas dots again.
btnClearCanvas.addEventListener("click", function() {
    deleteCanvasDots();
    createCanvasDots(selectedSize);
});