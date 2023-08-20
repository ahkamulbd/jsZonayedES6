var aFunction = function () {
    console.log(`A demo ES 5 Function Expression`);
}
//aFunction();

const aFunction6 = () => console.log(`A Demo ES 6 Function Expression`);

//aFunction6();

/* ==== Example 1 ===== */

const dob = [1996, 1986, 2017, 1989];

const currentAgeES5 = dob.map(function (oneDob) {
    return 2023 - oneDob;
});
//console.log(currentAgeES5);

const currentAgeES6 = dob.map((oneDob) => 2033 - oneDob);
//console.log(currentAgeES6);


/* ==== Example 2 ===== */

const currentAgeES6TwoPara = dob.map((oneDob, index) => `${index} : ${2023 - oneDob}`);
//console.log(currentAgeES6TwoPara);

/* ==== Example 2 ===== */

const currentAgeES6MultiLine = dob.map(oneDob => {
    const age = 2023 - oneDob;
    return age;
});
console.log(currentAgeES6MultiLine);


