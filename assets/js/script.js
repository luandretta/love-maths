//Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    // old sintax: for (let i=0; i<buttons.lenght; i++)
    for (let button of buttons){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                alert("You clicked submit");
            } else {
                let gameType = this.getAttribute("data-type");
                runGame(gameType);
            }
        })
    }

    runGame("addition");

})

/**
 * The main game "loop", called when the script is first loaded 
 * and after the user's answer has been processed
 */
function runGame(gameType) {
    //Creates two random numbers between 1 and 25, +1 because the initial number is zero, floor to be intenger
    let num1 = Math.floor(Math.random() * 24) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}`);
        throw `Unknown game type: ${gameType}.Aborting!`;
    }
}

function checkAnswer() {
    
}

function calculateCorrectAnswer() {
    
}

function incrementScore() {
    
}

function incrementWrongAnswer() {
    
}

function displayAdditionQuestion(operand1, operand2) {
    
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand1;
    document.getElementById('operator').textContent = "+";
}

function displaySubtractQuestion() {
    
}

function displayMultiplyQuestion() {
    
}