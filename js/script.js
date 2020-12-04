//search for the msg and replace it 
/*let diceRoll = getRandomDiceRoll()

let theMsg = document.querySelector(`.msg`)
theMsg.textContent = `You rolled: ${diceRoll}`

// replace src and alt attribute
//Option: 1     (Better way)
let theFace = document.querySelector(`.face`)
theFace.setAttribute(`src` , `img/dice${diceRoll}.svg`)
theFace.setAttribute(`alt` , `Rolled ${diceRoll}`)

//or
//OPTION 2:
// replace "dice" div (innerHTML)

let theDice = document.querySelector(`.dice`)
theDice.innerHTML = `<img src="img/dice${diceRoll}.svg" , alt="Rolled ${diceRoll}" class="face">`*/


let theMsg = document.querySelector(`.msg`)
let theFace = document.querySelector(`.face`)
let theFaceOne = document.querySelector(`.face-1`)
 
let theRollDice = function() {
    let diceRoll = getRandomDiceRoll()
    let diceRoll2 = getRandomDiceRoll()
    let totalRoll = diceRoll + diceRoll2
    let textMsg = ``
    if (totalRoll === 2) {
         textMsg = `Snake Eyes`
    }
    else if (totalRoll === 2) {
        textMsg = `Snake Eyes`
   }
    else if (totalRoll === 3) {
    textMsg = `Ace Deuce`
    }
    else if (diceRoll === 2 && diceRoll2 === 2) {
        textMsg = `Hard Four`
    }
    else if (totalRoll === 4) {
        textMsg = `Easy Four`
    }
    else if (totalRoll === 5) {
        textMsg = `Five (Fever Five)`
    }
    else if (diceRoll === 3 && diceRoll2 === 3) {
        textMsg = `Hard Six`
    }
    else if (totalRoll === 6) {
        textMsg = `Easy Six`
    }
    else if (totalRoll === 7) {
        textMsg = `Natural or Seven Out`
    }
    else if (diceRoll === 4 && diceRoll2 === 4) {
        textMsg = `Hard Eight`
    }
    else if (totalRoll === 8) {
        textMsg = `Easy Eight`
    }
    else if (totalRoll === 9) {
        textMsg = `Nine (Nina)`
    }
    else if (diceRoll === 5 && diceRoll2 === 5) {
        textMsg = `Hard Ten`
    }
    else if (totalRoll === 10) {
        textMsg = `Easy Ten`
    }
    else if (totalRoll === 11) {
        textMsg = `Yo (Yo-leven)`
    }
    else if (totalRoll === 12) {
        textMsg = `Boxcars or Midnight` 
    }
    else {
         textMsg = totalRoll
    }

    theMsg.textContent = `You rolled: ${textMsg}` 
    theFace.setAttribute(`src` , `img/dice${diceRoll}.svg`)
    theFace.setAttribute(`alt` , `Rolled ${diceRoll}`) 
    theFaceOne.setAttribute(`src` , `img/dice${diceRoll2}.svg`)
    theFaceOne.setAttribute(`alt` , `Rolled ${diceRoll2}`) 
}


// Here's a test roll, check the console!
//console.log(getRandomDiceRoll())

// 1) Call getRandomDiceRoll() and store the result as a variable named "diceRoll"

// 2) Update user interface (document), showing the diceface (svg image) that matches the roll number

// 3) Use `diceRoll` to update the label "You rolled: #" (replacing # with the roll)

// 4) Wrap the dice roll procedure in a function named rollTheDice(), call it from the console to test


