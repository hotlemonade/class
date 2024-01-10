let arr = ['tree','tree','flower','tree','flower','branch','og']


let result = arr.map(x => x !== 'tree' ? 'tree' : x);
console.log(result);

let str = 'Hello World';
console.log(str.replace('H','APPLE'))



let nums = [1,5,3,100,201,50]
console.log(Math.min(...nums))

console.log(nums.reverse())


let str2 = 'Hello world';
// let hello = [...str2]
let hello = str2.split('')
console.log(hello)


