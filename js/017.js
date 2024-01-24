let arr = [1,2,3,4,5];

let dubble = arr.map( data => data + 2);
console.log(dubble)


let arr2 = '12345';

// 배열로 변경 완료 => 숫자로 변경해야함.
// let result = [...arr2].map( data => Number(data) + 2);
let result = [...arr2].map( data => +data + 2);
console.log(result)

let random = Math.floor(Math.random() * 10);
console.log(random)

console.log(Math.abs(-1))
console.log(Math.pow(2, 3))
console.log(Math.max(...arr));
console.log(Math.min(...arr));
console.log(Math.round(3.5));


let str = 'Airplain airplain';
console.log(str.search('air')) // 1th,  index number
console.log(str.search(/air/i))
console.log(str.match('air'))
console.log(str.match(/air/gi))