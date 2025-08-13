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
switch (foodChoice) {
  case 1:
		foodName = 'Pizza🍕'
		break
	case 2:
		foodName = 'Salad🥗'
		break
	case 3:
		foodName = 'Pasta🍝'
		break
}

alert(`Cool ${userName}, you chose ${foodName}`)

//Subtype choice and validation
let subChoice = undefined
let subName = undefined

switch (foodChoice) {
	
  // pizza
  case 1:             
		subChoice = Number(prompt('What kind of pizza would you like? \n1 - Pepperoni \n2 - Africana \n3 - House Special', 'write here'))
		switch (subChoice) {
			case 1:
				subName = 'Pepperoni'
				break
			case 2:
				subName = 'Africana'
				break
			case 3:
				subName = 'House Special'
				break
		}
		break
	
  //salad
  case 2:                            
		subChoice = Number(prompt('What kind of salad would you like? \n1 - Nicoise \n2 - Big \n3 - Ceasar', 'write here'))
		switch (subChoice) {
			case 1:
				subName = 'Nicoise'
				break
			case 2:
				subName = 'BIG'
				break
			case 3:
				subName = 'Ceasar'
				break
		}
		break
	
  //pasta
  case 3:
		subChoice = Number(prompt('What kind of pasta would you like? \n1 - Alfredo \n2 - Bolognese \n3 - Anjovis', 'write here'))
		switch (subChoice) {
			case 1:
				subName = 'Alfredo'
				break
			case 2:
				subName = 'BoLoGnEsE'
				break
			case 3:
				subName = 'Anjovis'
				break
		}
		break
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
switch (orderConfirmation) {
	case 1:
		alert('Lovely, your meal will be coming up in a minute 🤤')
		break
	case 2:
		alert('It is ok to change your mind 😇')
		break
	default:
		alert('Invalid choice. Please select 1 for Yes or 2 for No')
}