const sumAll = function(...nums) {
    nums.sort();
    let sum = 0;

    if (nums[0] < 0 || 
        nums[0]%1 != 0 ||
        nums[1]%1 != 0 ||
        typeof(nums[0]) != "number" ||
        typeof(nums[1]) != "number"
    ) {
        return 'ERROR'
    };
    
    while (nums[0] <= nums.at(-1)){
        sum+= nums[0];
        nums[0]++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
