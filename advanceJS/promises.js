// const promiseOne = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("PromiseOne has executed");
//   }, 1000);
// });

// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (error) {
//       resolve({ userName: "Ajay", userEmail: "ajay@gmail.com" });
//     } else {
//       reject("ERROR: Something went wrong");
//     }
//   }, 1000);
// });

// promiseTwo
//   .then(function (user) {
//     console.log(user);
//     return user.userName;
//   })
//   .then(function (userName) {
//     console.log(userName);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("The promise is either resolved or rejected");
//   });

// const promiseFive = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     let error = true;
//     if (!error) {
//       resolve({ userName: "Ajay", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// const promiseFive = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let error = true;
//     if (!error) {
//       resolve({ userName: "Ajay", password: "123" });
//     } else {
//       reject("ERROR: JS went wrong");
//     }
//   }, 1000);
// });

// promiseFive
//   .then(function (user) {
//     console.log(user);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

// async function consumePromiseFive() {
//   try {
//     const response = await promiseFive;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseFive()

fetch(" https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json()
})  
.then(function (data) {
    // const dataResponse = data.json();
    console.log(data);
  })
  .catch(() => {
    console.log("ERROR:", error);
  });
