const palindromes = function (word) {
    word = [...word.toLowerCase()];
    let reversedWord = '';
    for (let i= word.length - 1; i >= 0; i--) {
        if (word.at(i) == ' ' || 
            word.at(i) == '.' || 
            word.at(i) == ',' || 
            word.at(i) == '!' ||
            word.at(i) == '¡')
            {
            word.splice(i,1);
        } else {
            reversedWord += word.at(i);
        }
    }
    return word.join('') == reversedWord;
};

console.log(palindromes('A car, a man, a maraca.'));

// Do not edit below this line
module.exports = palindromes;
