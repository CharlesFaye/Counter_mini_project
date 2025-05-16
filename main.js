let number = document.getElementById('number');
const addBtn = document.querySelector('#buttons button:first-of-type');
const reduceBtn = document.querySelector('#buttons button:nth-of-type(2)');
const resetBtn = document.querySelector('#buttons button:last-of-type');

let fromStringToNumber = Number(number.textContent);
fromStringToNumber = 0;
/**
 * Increments the value of `fromStringToNumber` by one and updates the `number` element's text content.
 *
 * @function
 * @returns {void}
 */
const addOneToCounter = () => {
     number.textContent = ++fromStringToNumber;
}

/**
 * Decrements the value of `fromStringToNumber` by one if it is greater than zero,
 * and updates the `number` element's text content with the new value.
 * Does nothing if `fromStringToNumber` is less than or equal to zero.
 */
const reduceOneToCounter = () => {
    if(fromStringToNumber <= 0) {
        return
    }
    number.textContent = --fromStringToNumber;
}
/**
 * Resets the counter value to zero and updates the displayed number.
 * 
 * Sets `fromStringToNumber` to 0 and updates the `number` element's text content to 0.
 */
const resetCounter = () => {
    fromStringToNumber = 0;
    number.textContent = 0;
}
addBtn.addEventListener('click', addOneToCounter);
reduceBtn.addEventListener('click', reduceOneToCounter);
resetBtn.addEventListener('click', resetCounter);
