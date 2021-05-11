/*
    https://javascript.plainenglish.io/4-useful-javascript-es2020-features-that-you-should-know-5d690430cf6e
    Optional Chaining:
    
    Optional chaining is useful when you have a big object that
    contains other nested objects and you want to check if some
    properties are available on that object without getting an error.
    
    The optional chaining `?.` is used to check if a value or a property
    before `?.` is null or undefined . If it is, it returns undefined .
    Otherwise, it just returns the value.

*/


// let tryingOptionalChaining = () => {
//     const human1 = {
//         name: 'Adam',
//         age: 20,
//         car: {
//             model: 'Honda'
//         }
//     }

//     console.log(humans.lastName(), ' ---> should return an Error.');
//     console.log(human1?.age, ' ---> should return the age: 20');
//     console.log(human1.car.model?.name, ' ---> should return an undefined')
//     console.log(human1.car.model.name, ' ---> should throw an error')
// }

// tryingOptionalChaining();