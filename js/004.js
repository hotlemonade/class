sum(3,7)


function sum(a,b) { 
   console.log(a+b);
}

function checkEven(num) {
    return (num % 2 === 0) ? 'even' : 'odd'
    // true ? A : B
}


const minus = function(a,b) { console.log(a - b)}
minus(5,2)

const divide =  (a,b) => { console.log(a / b)}
divide(12,3)


let a = -3;
let b = 5.3;
 
console.log(Math.abs(a), Math.round(b))
console.log(Math.pow(2,3))

function makeDouble(a,b){
    console.log(Math.pow(a,b))
}

makeDouble(3,3)

// 나만의 자동화 되는 함수를 만들어 오기.