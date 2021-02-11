// import functions and grab DOM elements

// initialize state
// no initialize rn
// set event listeners to update state and DOM
// set listeners on each button, do math, and update DOM

const addButton = document.getElementById('addition-answer');
const addInputOne = document.getElementById('addition-input-one');
const addDisplay = document.getElementById('addition-display');
const addInputTwo = document.getElementById('addition-input-two');

addButton.addEventListener('click', () => {
    addDisplay.textContent = Number(addInputOne.value) + Number(addInputTwo.value);
});

const subButton = document.getElementById('subtraction-answer');
const subInputOne = document.getElementById('subtraction-input-one');
const subDisplay = document.getElementById('subtraction-display');
const subInputTwo = document.getElementById('subtraction-input-two');

subButton.addEventListener('click', () => {
    subDisplay.textContent = Number(subInputOne.value) - Number(subInputTwo.value);
});

const multiplyButton = document.getElementById('multiplication-answer');
const multiplyInputOne = document.getElementById('multiplication-input-one');
const multiplyDisplay = document.getElementById('multiplication-display');
const multiplyInputTwo = document.getElementById('multiplication-input-two');

multiplyButton.addEventListener('click', () => {
    multiplyDisplay.textContent = Number(multiplyInputOne.value) * Number(multiplyInputTwo.value);
});
const divideButton = document.getElementById('division-answer');
const divideInputOne = document.getElementById('division-input-one');
const divideDisplay = document.getElementById('division-display');
const divideInputTwo = document.getElementById('division-input-two');

divideButton.addEventListener('click', () => {
    divideDisplay.textContent = Number(divideInputOne.value) / Number(divideInputTwo.value);
});
