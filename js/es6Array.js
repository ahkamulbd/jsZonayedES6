//var numbers = [100, 10, 20, 30, 40, 50, 60, 70, 80, 90];

// for (var i = 0; i < numbers.length; i++) {
//     //if (numbers[i] === 50) break;
//     if (i === 7) break;
//     //console.log(`Index: ${i}  Value: ${numbers[i]}`);
// }

// for (number of numbers) {
//     //if (number === 50) break;
//     if (numbers.indexOf(number) > 5) break;
//     //console.log(`Value: ${number}`);
// }


var numbers = [100, 10, 20, 30, 40, 50, 60, 70, 80, 90];

var findNum = numbers.map(function (theNum) {
    return theNum === 60;
})

console.log(findNum);

console.log(findNum.indexOf(true));

console.log(numbers[findNum.indexOf(true)]);
