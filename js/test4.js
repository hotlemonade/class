function changeAp(str) {
    let result = str.split('').map(data => data === data.toUpperCase() ? data.toLowerCase() : data.toUpperCase()).join('')

    console.log(result)
}




changeAp('aBcDeFg')

/*
let str = 'hello';
let arr = [1,2,3,4,5]
 

console.log(str.split(''))
console.log([...str])

let result = arr.map( data => data * 2 ) ;
result = [...str].map(data => data + ',');
console.log(result);

 */