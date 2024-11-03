function getAge (death, birth) {
    if (!death) {
        death= new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(array) {
    const currentYear = new Date().getFullYear();
    return oldest = array.reduce((old, current) => {
        const oldAge = getAge(old.yearOfDeath, old.yearOfBirth);
        const age = getAge(current.yearOfDeath, current.yearOfBirth);
        return age > oldAge ? current : old;
    });
};


// Do not edit below this line
module.exports = findTheOldest;
