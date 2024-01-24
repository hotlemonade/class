let str = '   Hello world   ';
let num = 3;

console.log(typeof num);

num = num.toString()
console.log(typeof num);

console.log(str.length)

str = str.trim();
console.log(str.length)


let alphabet = 'abcde';
alphabet = alphabet.split('')
console.log(alphabet)
console.log(str.split(' '))
console.log(alphabet.join(''))

console.clear()
str = 'abcde'
console.log(str.slice(2, str.length - 1))
console.log(str.substring(4, 2)) // substr()
console.log(str.slice(4,2))

console.log(str.charAt(3)) // string
console.log(str.charCodeAt(3)) // unicode 


str = 'hellLo world'
console.log(str.repeat(3))

console.log(str.replace('l','m'));
console.log(str.replace(/l/gi, 'm'))
console.log(str.indexOf('e'))
console.log(str.startsWith('w', 7)) // string, indexNumber
console.log(str.endsWith('d'))
console.log(str.endsWith('o', 6))  // string, length

/*
    / pattern / flag ( i-> 대소문자구분안하기, G -> 모두찾기 )
*/


