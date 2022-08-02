const findTheOldest = function(people) {
    let sortedAges = people.sort((a, b) => {
        if (!a.yearOfDeath) {
            a.yearOfDeath = new Date().getFullYear();
        } else if (!b.yearOfDeath) {
            b.yearOfDeath = new Date().getFullYear();
        };
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        if (aAge > bAge) return -1;
        else return 1;
    });
    return sortedAges[0];
};

// Do not edit below this line
module.exports = findTheOldest;
