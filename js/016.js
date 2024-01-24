let arr = [1,2,3,4,5];

// 1반2반3반

let ban = arr.map( class1 => class1 + '반' );
console.log(ban)

let arr2 = '12345';
let ban2 = arr2.split('')
// console.log(ban2)

// 지금 ban2가 배열인 상태 => 이 ban2에다 map을 이용해서 +'반; 해주기.

let result = ban2.map(data => data + '반');
console.log(result)

result = [...arr2].map(data => data + 'ban');
// console.log(Number(strNum))
