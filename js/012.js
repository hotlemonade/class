let numbers = [1,3,7,2,5, 9, 10, 21]
let doubles = [] 
numbers.forEach(num => {
    doubles.push(num * 2)
})

// console.log(doubles)

let nums = numbers.sort( (a,b) => a - b );
console.log(nums)
nums = numbers.sort((a,b) => b - a);
console.log(nums)

let doubles2 = numbers.map( num => num * 2)
console.log(doubles2)

let result = numbers.filter( ( num ) => num > 10  );
console.log(result)

let result2 = numbers.filter( num => num % 3 === 0 )
console.log(result2)


let a = [1,2,3]
let b = [4,5,6]

// let abs = a.concat(b)
let abs = [...a,...b]
console.log(abs)


let user = 'DragoN';
let newUser = [...user].filter( (x,i) => x === x.toLowerCase()).join('')  
console.log(newUser)

let arr = ['a','b','kids','kids','c','kids','kids','d','apple']
// let kids = arr.filter(kid => kid.length > 3).length;
let kids = arr.filter(x => x === 'kids').length;

console.log(kids)