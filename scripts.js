js

//COIN FLIP ALGORITHM
for (let i = 0; i < 5; i++) {
    var coinFlip = Math.round(Math.random());

    if (coinFlip === 1) {
        console.log("Heads")
    } else {
        console.log("Tails")
    }
}
//COIN FLIP FUNCTION
function flip() {
  for (let i = 0; i < 5; i++) {
    var coinFlip = Math.round(Math.random());

    if (coinFlip === 1) {
        console.log("Heads")
    } else {
        console.log("Tails")
    }
}
}
//PASSING DATA INTO FUNCTION
function logsPerson(name, city, color) {
    console.log('Hi, my name is Alex','I am from Bayonne, NJ','My favorite color is green.');
}

logsPerson()
