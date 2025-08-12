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
2 - Salad 
3 - Pasta`,
"enter number")

if (foodChoice < 2) {
	alert(`Cool ${userName}, you chose 🍕Pizza`)
} else if (foodChoice == 2) {
	alert(`Cool ${userName}, you chose 🥗Salad`)
} else {
	alert(`Cool ${userName}, you chose 🍝Pasta`)	
}

// Step 3 - Subtype choice
let subPizza = undefined
let subSalad = undefined
let subPasta = undefined

if (foodChoice < 2) {
	subPizza = Number(prompt('What kind of pizza would you like? \n1 - Pepperoni \n2 - Africana \n3 - House Special', 'write here'))
} else if (foodChoice == 2) {
	subSalad = Number(prompt('What kind of salad would you like? \n1 - Nicoise \n2 - Big \n3 - Ceasar', 'write here'))
} else {
  subPasta = Number(prompt('What kind of pasta would you like? \n1 - Alfredo \n2 - Bolognese \n3 - Anjovis', 'write here'))
}

if (subPizza < 2) {
	alert('One Pepperoni Pizza coming up')
} else if (subPizza == 2) {
	alert('One Africana Pizza coming up')
} else if (subPizza > 2) {
	alert('One House Special Pizza coming up')
} else if (subSalad < 2) {
	alert('One Salad Nicosie 4 U <3')
} else if (subSalad == 2) {
	alert('ONE BIG SALAD 4 U <3')
} else if (subSalad > 2){
	alert('One Ceasar Salad 4 U <3')
} else if (subPasta < 2) {
	alert('Pasta ALFREDO!!!!')
} else if (subPasta == 2) {
	alert('Pasta BoLoGnEsE!!!!')
} else {
	alert('Pasta with Anjovis!!!!')
}

// Step 4 - Age
const age = Number(prompt('Is the meal for a child or an adult?', 'age'))
let confirmation = undefined

if (age >= 18) {
  alert('Adult portion ordered! This will cost you $22')
} else {
  alert('Oh it is for a child? Well then you get the meal for free!!')
}

confirmation = Number(prompt('Is this what you want to order? Type a number to confirm\n1 - yes\n2 - no'))

if (confirmation === 1) {
  alert('Lovely, your meal will be coming up in a minute 🤤')
} else if (confirmation === 2) {
  alert('It is ok to change your mind 😇')
} else {
  alert('Invalid choice. Please select 1 for Yes or 2 for No')
}






// Step 5 - Order confirmation
// Your code goes here
