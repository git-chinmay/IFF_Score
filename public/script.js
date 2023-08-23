
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
const addButton = document.createElement("button");



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

// ADD button functionality
addButton.textContent = "ADD";
addButton.addEventListener("click", () => {
    iffScoreArray.forEach(score => {
        const scoreElement = document.createElement("p");
        scoreElement.textContent = score;
        document.body.appendChild(scoreElement);
    });

    // Clear the array after displaying the scores
    // iffScoreArray = [];
});
document.body.appendChild(addButton);


impactInput.addEventListener("input", updateValues);
frequencyInput.addEventListener("input", updateValues);
frustrationInput.addEventListener("input", updateValues);
// ticketNumberInput.addEventListener("input", updateTicketIFFScore);