const removeFromArray = function(array, ...nums) {
    const newArray = []
    for (item of array) {
        if (!nums.includes(item)) newArray.push(item)
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
