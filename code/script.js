// Start here

// Step 1 - Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)

const userName = prompt("🍭 Hi, what is your name?", "write here")
alert(
  `Welcome to our hub, ${userName}!🏜️`
)

// Step 2 - Food choice
const pizza = "🍕Pizza"
const sallad = "🥗Sallad"
const pasta = "🍝Pasta"

let foodChoice = prompt(`What would you like to eat today? \nChoose something below: \n1 - ${pizza} \n2- ${sallad} \n3 - ${pasta}`, "enter number")

if (foodChoice === 1) {
  foodChoice = pizza
} else if (foodChoice === 2) {
  foodChoice = sallad
} else {
  foodChoice = pasta
}

alert (
  `Cool ${userName}, you chose ${foodChoice}`
)


// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
