function airTicketCount(ticket, isIncrease) {
    const firstInput = document.getElementById(ticket + "Input");
    const addValue = parseInt(firstInput.value);
    let ticketInput = addValue;
    if (isIncrease == true) {
        ticketInput = addValue + 1;
    }
    if (isIncrease == false && addValue > 0) {
        ticketInput = addValue - 1;
    }
    firstInput.value = ticketInput;
    let ticketTotal = 0;
    if (ticket == "first") {
        ticketTotal = ticketInput * 150;
    }
    if (ticket == "economy") {
        ticketTotal = ticketInput * 100;
    }
    calculateTotal()
}

// Total air ticket Price
function calculateTotal() {
    const firstCount = getValue("first");
    const economyCount = getValue("economy");
    const totalPrice = firstCount * 150 + economyCount * 100;
    document.getElementById("total-price").innerText = "$" + totalPrice;


    //tax Amount Calculation

    const tax = totalPrice * 10 / 100;
    document.getElementById("tax-amount").innerText = "$" + tax;
    const grandTotal = totalPrice + tax;
    document.getElementById("total-amount").innerText = "$" + grandTotal
}
function getValue(ticket) {
    const ticketInput = document.getElementById(ticket + "Input");
    const airTicketCount = parseInt(ticketInput.value);
    return airTicketCount;
}


// confirm area
document.getElementById('area-hide').addEventListener("click", function () {
    // document.getElementById('area-hide').style.display = "none";
    document.getElementById('confirm-message').style.display= "block"
})

document.getElementById('confirm-message').addEventListener("click", function () {
    document.getElementById('area-hide').style.display = "none";
    document.getElementById('confirm-message').style.display= "block"
})

