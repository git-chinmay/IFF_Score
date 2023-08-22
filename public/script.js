
const impactInput = document.getElementById("impact");
const frequencyInput = document.getElementById("frequency");
const frustrationInput = document.getElementById("frustration");
const ticketNumberInput = document.getElementById("ticketNumber");
const ticketNumberResult = document.getElementById("ticketNumberResult");
const impactValueDisplay = document.getElementById("impactValue");
const frequencyValueDisplay = document.getElementById("frequencyValue");
const frustrationValueDisplay = document.getElementById("frustrationValue");
const iffScoreDisplay = document.getElementById("iffScore");
const calculatesubmit = document.getElementById('calculate')


function calculateTicketIFFScore(impactValue, frequencyValue, frustrationValue){
    const iffScore = (impactValue + frequencyValue) * frustrationValue;
    return iffScore
}

let impact = ""
let freq = ""
let frust = ""

function updateValues() {
    // Fetching the value from the input field
    const impactValue = parseInt(impactInput.value);
    const frequencyValue = parseInt(frequencyInput.value);
    const frustrationValue = parseInt(frustrationInput.value);

    // For displaying the selected input parameter values
    impactValueDisplay.textContent = impactValue;
    frequencyValueDisplay.textContent = frequencyValue;
    frustrationValueDisplay.textContent = frustrationValue;

    return impactValue, frequencyValue, frustrationValue


    // Calculating the IFF score
    // const iffScore = calculateTicketIFFScore(impactValue, frequencyValue, frustrationValue);
    // iffScoreDisplay.textContent = iffScore;
    // updateTicketIFFScore(iffScore);
}

impact, freq, frust = updateValues();
console.log(impact, freq, frust)

let iffScoreArray = [];

function updateTicketIFFScore(iffScore) {
    const ticketNumber = ticketNumberInput.value;
    ticketNumberResult.textContent = ticketNumber || "N/A";

    const ticket_score_pare = `${ticketNumber} : ${iffScore}`
    iffScoreArray.push(ticket_score_pare)
    

    // Update IFF score logic for the ticket here
    // For example: const ticketIFFScore = calculateTicketIFFScore(ticketNumber);
    // Update the "iffScore" display for the ticket
    // iffScoreDisplay.textContent = ticketIFFScore;
}

impactInput.addEventListener("input", updateValues);
frequencyInput.addEventListener("input", updateValues);
frustrationInput.addEventListener("input", updateValues);
ticketNumberInput.addEventListener("input", updateTicketIFFScore);

calculatesubmit.addEventListener("click", (impact, freq, frust)=>{
    const iffScore = calculateTicketIFFScore(impactValue=impact, frequencyValue=freq, frustrationValue=frust);
    iffScoreDisplay.textContent = iffScore;
    updateTicketIFFScore(iffScore)
    console.log(iffScoreArray)
})
