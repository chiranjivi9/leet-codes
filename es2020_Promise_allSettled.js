
/* 
    https://javascript.plainenglish.io/4-useful-javascript-es2020-features-that-you-should-know-5d690430cf6e

    The function Promise.allSettled() is used when we have multiple promises. 
    It’s useful to check if all promises are settled, which means that all the promises 
    are being resolved or rejected.
    
    The function allSettled() takes an array of promises as an argument. It returns a new
    promise in the form of an array containing all the statuses for each promise we passed to it.
    
*/

let tryingPromiseAllSettled = () => {
    const promise1 = new Promise((resolve, reject) => {
        resolve('The Promise number 1 was resolved')
      })
      const promise2 = new Promise((resolve, reject) => {
        reject('The Promise number 2 was rejected')
      })
      const promise3 = new Promise((resolve, reject) => {
        resolve('The Promise number 3 was resolved')
      })
      // Using allSettled().
      Promise.allSettled([promise1, promise2, promise3])
       .then(result => console.log(result))
       .catch(err => console.log(err))
      //output:
      [
        {status: "fulfilled", value: "The Promise number 1 was resolved"},
        {status: "rejected", reason: "The Promise number 2 was rejected"},
        {status: "fulfilled", value: "The Promise number 3 was resolved"}
      ]
}

tryingPromiseAllSettled();