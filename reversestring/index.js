// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    var reversed = '';
    for (char of str) {
        reversed = char + reversed;
    }
    return reversed;

}

module.exports = reverse;

// Method one
// Turn 'str' into an array
// Call 'reverse' method on the array
// Join the array back into a string
// Return the result

// Method two
// loop through the string