var gameData = {
    numbers: 0,
    numbersPerClick: 1,
    // variables about the bignumber shop item
    bigNumbers: 0,
    bigNumberCost: 10, 
    bigNumbersProduction: 0,
    bigNumbersMultiplier: 1
}

function numberButtonClick() {
    // change the number by the numbersPerClick
    gameData.numbers += gameData.numbersPerClick
    //update the webpage
    updateMainNumber()
}

function buyBigNumberButtonClick() {
    // check if you have enough money to buy a big number
    if (gameData.numbers >= gameData.bigNumberCost) {
        // if you do, subtract the cost from the total money
        gameData.numbers -= gameData.bigNumberCost
        // you get 1 big number
        gameData.bigNumbers++
        // update the big number cost
        gameData.bigNumberCost = Math.round(10 * (1.3 ** gameData.bigNumbers))

        // update the webpage
        updateMainNumber()
        document.getElementById("big-number-display").innerHTML = "you have " + gameData.bigNumbers + " big numbers"
        document.getElementById("big-number-cost-display").innerHTML = "big number cost: " + gameData.bigNumberCost
    }
}

// just a function to update the main number count to not type it multiple times
function updateMainNumber() {
    document.getElementById("number-display").innerHTML = "numbers: " + gameData.numbers   
}

var productionLoop = window.setInterval(function(){
    gameData.numbers += (gameData.bigNumbers * 0.2) * gameData.bigNumbersMultiplier
    updateMainNumber()
}, 1000)