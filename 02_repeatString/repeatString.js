const repeatString = function(str, num) {
    let strResult = '';
    if (num >= 0) {
        for (let i = 1; i <= num; i++) {
            strResult+= str;
        }
    } else {
        strResult = 'ERROR';
    }
    return strResult;
};

// Do not edit below this line
module.exports = repeatString;
