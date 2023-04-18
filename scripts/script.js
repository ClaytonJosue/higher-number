// input
let input = document.querySelector(".form_input");

// buttons
let addButton = document.querySelector(".add_button");
addButton.addEventListener("click", addNumber);

const clearButton = document.querySelector(".clear_button");
clearButton.addEventListener("click", clearNumbers);

// number list
let numberList = document.querySelector(".number_list");

// create add number function

let numbers = [];

function addNumber(event) {
	event.preventDefault()
	numbers.push(Number(input.value));
	input.value = "";
	input.focus();
	numberList.innerHTML = numbers;
	console.log(numbers);
}

// create clear numbers function

function clearNumbers(event) {
	event.preventDefault();
	numbers = [];
	console.log(numbers);
	numberList.innerHTML = numbers;
	input.focus();
}
