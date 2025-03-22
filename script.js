function generateTable() {
    const numberInput = document.getElementById("myInput").value
    const outputDiv = document.getElementById("output")
    const errorMessage = document.getElementById("error-message")
    outputDiv.innerHTML = ""
    errorMessage.innerText = ""

    if (!numberInput || isNaN(numberInput)) {
        errorMessage.innerText = "Please enter a valid number!"
        return
    }

    const num = parseInt(numberInput)
    if (num <= 0) {
        errorMessage.innerText = "Please enter a number greater than 0!"
        return
    }

    let tableHTML = "<h3> Multiplication Table of " + num + "</h3>"
    for (let i = 1; i <= 10; i++) {
        tableHTML += `<p>${num} x ${i} = ${num * i}</p>`
    }
    outputDiv.innerHTML = tableHTML
}

document.getElementById("generateBtn").addEventListener("click", generateTable)