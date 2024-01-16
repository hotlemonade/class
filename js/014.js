let arr1 = ['a','B','c','d','E']
let arr2 = ['F','G','h','i','J']

let arr = [...arr1,...arr2]
console.log(arr)






// map 모든 함수를 호출하여 해당 함수를 적용하고 싶을때 사용하는 (메소드).

let capital = arr.map( alp => alp.toUpperCase())
console.log(capital)

let lower = arr.filter( (x) => x === x.toLowerCase() )
console.log(lower)

// 1. 필터를 사용한다
// 2. J 는 9번째 위치다 그러니깐 9를 참으로 만드는 공식을 만드면 무조건 9번째의 J가 추출 될것이다.
// index number 가 9 
// arr 에서 쉽게 생각해서 10가지의 수가 있는데 9 보다 큰 index 넘버를 console.log()에 보이게 하면 된다 
// arr >= 9
//   

let get = arr.filter( (_,i) => i >= arr.length -1 )
console.log(get)


console.log(typeof get)


let a = 1;
let b = '3';

let result = a + b;

// number + string = auto, string 
// number, string, object, array, undefined, null, boolean

let str = 'he2llo2wor2ld'
console.log(typeof result)
 
let i = 0;
while( i < 10) {
    console.log(i);
    i++;
}
// let newArr = [...str]
let newArr = str.split('2')
console.log(newArr)

let newStr = newArr.join('')
console.log(newStr)

let num = 1.54;
let strNum = '3'
console.log(Number(strNum))
console.log(parseInt(num))
console.log(parseFloat(num))