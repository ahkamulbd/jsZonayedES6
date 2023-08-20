// ======= Array Destructuring =========

const zarifInfo = ['Abdullah Zarif', 5, 'Kid'];

const [name6, age6, type6] = zarifInfo;

// console.log(name6);
// console.log(age6);
// console.log(type6);


// ======== Object Destructuring =========== 

const amimaObj = {
    nameObj: 'Amima Hoque',
    ageObj: 8,
    professionObj: 'Student'
}

const nameObj5 = amimaObj.nameObj;
const ageObj5 = amimaObj.ageObj;
const professionObj5 = amimaObj.professionObj;

// With Destructuring

const { nameObj, ageObj, professionObj } = amimaObj;
const { nameObj: nameObj6, ageObj: ageObj6, professionObj: professionObj6 } = amimaObj;

// console.log(nameObj5, ageObj5, professionObj5);
// console.log(nameObj, ageObj, professionObj);
// console.log(nameObj6, ageObj6, professionObj6);


// ======== More Destructuring ===========

let comObj = {
    anotherObj: {
        anotherNewObj: {
            title: 'JavaScript ES 6'
        }
    }
}
const { anotherObj: { anotherNewObj: { title } } } = comObj;
const { anotherObj: { anotherNewObj: { title: newTitle } } } = comObj;

console.log(title);
console.log(newTitle);