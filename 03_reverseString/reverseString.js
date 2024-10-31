const reverseString = function(word) {
    const reversed = [];
    for (letter of word) {
        reversed.unshift(letter);
    }
    return reversed.join('');
};

// Do not edit below this line
module.exports = reverseString;
