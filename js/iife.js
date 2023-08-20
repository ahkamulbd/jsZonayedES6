//IIFE - Immediately Invoked Function Expression 

(function directCallingFunction() {
    let message = 'This is a New Message';
    //console.log(message);
})();

{
    let a = 5;
    let b = 6;
    const pi = 3.1416;
    // console.log(a + b + pi);
}
//console.log(a + b + pi);

// {
//     var myName = function () {
//         var a = 'Arkam';
//         console.log(a);
//     }
// }
// myName();

{
    let myName = function () {
        let a = 'Arkam';
        console.log(a);
    }
}
myName();