// input
let input = document.querySelector(".form_input");

// buttons
let addButton = document.querySelector(".add_button");
addButton.addEventListener("click", addNumber);

// create add number function

let numbers = [];

function addNumber(event) {
	event.preventDefault()
	numbers.push(Number(input.value));
	input.value = "";
	input.focus();
	console.log(numbers);
}
