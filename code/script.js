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
const foodChoice = prompt(`What would you like to eat today? 
Choose something below:
1 - Pizza 
2 - Sallad 
3 - Pasta`,
"enter number")

if (foodChoice < 2) {
	alert(`Cool ${userName}, you chose 🍕Pizza`)
} else if (foodChoice == 2) {
	alert(`Cool ${userName}, you chose 🥗Sallad`)
} else {
	alert(`Cool ${userName}, you chose 🍝Pasta`)	
}

// Step 3 - Subtype choice
let subPizza = undefined
let subSallad = undefined
let subPasta = undefined

if (foodChoice < 2) {
	subPizza = Number(prompt('What kind of pizza would you like? \n1 - Pepperoni \n2 - Africana \n3 - House Special', 'write here'))
} else if (foodChoice == 2) {
	subSallad = Number(prompt('What kind of sallad would you like? \n1 - Nicoise \n2 - Big \n3 - Ceasar', 'write here'))
} else {
  subPasta = Number(prompt('What kind of pasta would you like? \n1 - Alfredo \n2 - Bolognese \n3 - Anjovis', 'write here'))
}

if (subPizza < 2) {
	alert('One Pepperoni Pizza coming up')
} else if (subPizza == 2) {
	alert('One Africana Pizza coming up')
} else if (subPizza > 2) {
	alert('One House Special Pizza coming up')
} else if (subSallad < 2) {
	alert('One Sallad Nicosie 4 U <3')
} else if (subSallad == 2) {
	alert('ONE BIG SALLAD 4 U <3')
} else if (subSallad > 2){
	alert('One Ceasar Sallad 4 U <3')
} else if (subPasta < 2) {
	alert('Pasta ALFREDO!!!!')
} else if (subPasta == 2) {
	alert('Pasta BoLoGnEsE!!!!')
} else {
	alert('Pasta with Anjovis!!!!')
}

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
