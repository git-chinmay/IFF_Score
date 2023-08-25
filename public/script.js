
const impactInput = document.getElementById("impact");
const frequencyInput = document.getElementById("frequency");
const frustrationInput = document.getElementById("frustration");
const ticketNumberInput = document.getElementById("ticketNumber");
const ticketNumberResult = document.getElementById("ticketNumberResult");
const impactValueDisplay = document.getElementById("impactValue");
const frequencyValueDisplay = document.getElementById("frequencyValue");
const frustrationValueDisplay = document.getElementById("frustrationValue");
const iffScoreDisplay = document.getElementById("iffScore");
const calculatesubmit = document.getElementById('calculate');
const addButton = document.getElementById("addButton");


// Varibale initialisations
// Store ticket scores in an array
let iffScoreArray = [];

// To calculate the IFF Score
function calculateTicketIFFScore(impactValue, frequencyValue, frustrationValue){
    const iffScore = (impactValue + frequencyValue) * frustrationValue;
	console.log("calculateTicketIFFScore", iffScore);
    return iffScore
}


// To update the selected input value realtime
function updateValues() {
    // Fetching the value from the input field
    const impactValue = parseInt(impactInput.value);
    const frequencyValue = parseInt(frequencyInput.value);
    const frustrationValue = parseInt(frustrationInput.value);

	console.log("updateValues", impactValue);
    // For displaying the selected input parameter values
    impactValueDisplay.textContent = impactValue;
    frequencyValueDisplay.textContent = frequencyValue;
    frustrationValueDisplay.textContent = frustrationValue;

}


// To update ticket IFF score
function updateTicketIFFScore(iffScore) {
    const ticketNumber = ticketNumberInput.value;
    ticketNumberResult.textContent = ticketNumber || "N/A";

    const ticket_score_pair = `${ticketNumber} : ${iffScore}`;
    iffScoreArray.push(ticket_score_pair);
}


// Event listener for the Calculate button
calculatesubmit.addEventListener("click", () => {
    const impactValue = parseInt(impactInput.value);
    const frequencyValue = parseInt(frequencyInput.value);
    const frustrationValue = parseInt(frustrationInput.value);

    const iffScore = calculateTicketIFFScore(impactValue, frequencyValue, frustrationValue);
    iffScoreDisplay.textContent = iffScore;

    updateTicketIFFScore(iffScore);
    console.log(iffScoreArray);
});


// // ADD button functionality
addButton.addEventListener("click", () => {
    const rightContainer = document.querySelector('.right-container');
    
    // Remove the existing scoresContainer if it exists
    const existingScoresContainer = document.querySelector('.scores-container');
    if (existingScoresContainer) {
        rightContainer.removeChild(existingScoresContainer);
    }

    // Create a new scoresContainer
    const scoresContainer = document.createElement("div");
    scoresContainer.classList.add('scores-container'); // Add a class for identification

    const uniqueScoresSet = new Set();

    // Remove duplicates from the score array
    iffScoreArray.forEach(score => uniqueScoresSet.add(score));

    // Convert the set back to an array and sort it in descending order
    const uniqueScoresArray = Array.from(uniqueScoresSet).sort((a, b) => {
        const valueA = parseInt(a.split(":")[1]);
        const valueB = parseInt(b.split(":")[1]);
        return valueB - valueA;
    });

    // console.log("@@@@@", uniqueScoresArray);
    uniqueScoresArray.forEach(score => {
        const scoreElement = document.createElement("p");
        scoreElement.textContent = score;
        scoresContainer.appendChild(scoreElement);
    });

    // Append the new scoresContainer
    rightContainer.appendChild(scoresContainer);
});





// Display the slider input selection realtime
impactInput.addEventListener("input", updateValues);
frequencyInput.addEventListener("input", updateValues);
frustrationInput.addEventListener("input", updateValues);