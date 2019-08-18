// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    //short form
    return str.split('').reduce((rev, char) => char + rev, '');

    // return str.split('').reduce((reversed, character) => {
    //     return character + reversed;
    // }, '');
}

module.exports = reverse;

// function reverse(str) {
//     arr = str.split('');
//     arr.reverse();
//     return arr.join('');
// }

// function reverse(str) {
//     var reversed = '';
//     for (let char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }