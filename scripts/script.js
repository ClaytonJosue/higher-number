// input
let input = document.querySelector(".form_input");

// buttons
let addButton = document.querySelector(".add_button");
addButton.addEventListener("click", addNumber);

const clearButton = document.querySelector(".clear_button");
clearButton.addEventListener("click", clearNumbers);

const checkButton = document.querySelector(".check_button");
checkButton.addEventListener("click", checkNumbers);

// number list
let numberList = document.querySelector(".number_list");

// max number 
let maxNumberCheked = document.querySelector(".number");

// typed numbers
let typedNumbers = document.querySelector(".numbers-typed")

// create add number function

let numbers = [];

function addNumber(event) {
	event.preventDefault()
	numbers.push(Number(input.value));
	input.value = "";
	input.focus();
	numberList.innerHTML = numbers;
	typedNumbers.classList.remove("disabled")
	console.log(numbers);

	if (numbers.length >= 5) {
		addButton.disabled = true;
	}
}

// create clear numbers function

function clearNumbers(event) {
	event.preventDefault();
	numbers = [];
	console.log(numbers);
	numberList.innerHTML = numbers;
	maxNumberCheked.innerHTML = "";
	typedNumbers.classList.add("disabled")
	input.focus();
	addButton.disabled = false;
}

// create check numbers function 

function checkNumbers(event) {
	event.preventDefault();

	var maxNumber = numbers.reduce((num1, num2) => {
		return Math.max(num1, num2);
	})

	maxNumberCheked.innerHTML = maxNumber;
}