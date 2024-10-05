const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = nums.filter((num) => num > 4)
                    .map((num) => num + 10)
                    .map((num) => num * 10)
                    .filter((num) => num > 165)
console.log(newNums);




// const newNums1 = []
// const newNums = nums.filter((num) => {
 
//     if (num >= 4) {
//     return  newNums1.push(num+10)
//     }

// })


// console.log(newNums);
