// Program where a customer can order food, specify choice, put in if the meal is for a child or adult and finaly confirm.

// Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const userName = prompt("🍭 Hi, what is your name?", "write here")
alert(
  `Welcome to our hub, ${userName}!🏜️`
)

// food choice with input validation
const foodChoice = Number(prompt(`What would you like to eat today? 
Choose something below:
1 - Pizza 
2 - Salad 
3 - Pasta`,
"enter number"))

let foodName = undefined
if (foodChoice === 1) {
    foodName = 'Pizza🍕'
} else if (foodChoice === 2) {
    foodName = 'Salad🥗'
} else {
	foodName = 'Pasta🍝'
}

alert(`Cool ${userName}, you chose ${foodName}`)

//Subtype choice and validation
let subChoice = undefined
let subName = undefined

if (foodChoice === 1) {
	subChoice = Number(prompt('What kind of pizza would you like? \n1 - Pepperoni \n2 - Africana \n3 - House Special', 'write here'))
} else if (foodChoice === 2) {
	subChoice = Number(prompt('What kind of salad would you like? \n1 - Nicoise \n2 - Big \n3 - Ceasar', 'write here'))
} else {
  subChoice = Number(prompt('What kind of pasta would you like? \n1 - Alfredo \n2 - Bolognese \n3 - Anjovis', 'write here'))
}

if (foodChoice === 1) {                 //pizza menu
	if (subChoice === 1) {
		subName = 'Pepperoni'
	} else if (subChoice === 2) {   
		subName = 'Africana'
	} else {
		subName = 'House Special'
	}
} else if (foodChoice === 2) {          //Salad menu
	if (subChoice === 1){
		subName = 'Nicoise'
	} else if (subChoice === 2) {
		subName = 'BIG'
	} else {
		subName = 'Ceasar'
	}
} else {                               //pasta menu
	if (subChoice === 1){
		subName = 'Alfredo'
	} else if (subChoice === 2) {
		subName = 'BoLoGnEsE'
	} else {
		subName = 'Anjovis'
	}
}

alert (`One ${subName} ${foodName} coming up!!`)

// Input age and get cost information
const age = Number(prompt('Is the meal for a child or an adult?', 'age'))
if (age >= 18) {
  alert('Adult portion ordered! This will cost you $22')
} else {
  alert('Oh it is for a child? Well then you get the meal for free!!')
}

// Order confirmation
const orderConfirmation = Number(prompt('Is this what you want to order? Type a number to confirm\n1 - yes\n2 - no'))

if (orderConfirmation === 1) {
  alert('Lovely, your meal will be coming up in a minute 🤤')
} else if (orderConfirmation === 2) {
  alert('It is ok to change your mind 😇')
} else {
  alert('Invalid choice. Please select 1 for Yes or 2 for No')
}