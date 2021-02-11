// import functions and grab DOM elements

// initialize state
// no initialize rn
// set event listeners to update state and DOM
// set listeners on each button, do math, and update DOM

const addButton = document.getElementById('addition-sum');
const addInputOne = document.getElementById('addition-input-one');
const addDisplay = document.getElementById('addition-display');
const addInputTwo = document.getElementById('addition-input-two');

addButton.addEventListener('click', () => {
    addDisplay.value = Number(addInputOne.value) + Number(addInputTwo.value);
});

const subButton = document.getElementById('subtraction-answer');
const subInputOne = document.getElementById('subtraction-input-one');
const subDisplay = document.getElementById('subtraction-display');
const subInputTwo = document.getElementById('subtraction-input-two');

subButton.addEventListener('click', () => {
    subDisplay.textcontent = Number(subInputOne.value) - Number(subInputTwo.value);
});
