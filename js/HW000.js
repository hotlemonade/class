// let a = 1
// let b = 3

// const value = a + b
// console.log(value)

// ---------------------------------

// sum(1,4)

// function sum(a,b) { 
//     console.log(a+b);
//  }

// ---------------------------------

// let a = 1
// let b = 2

// console.log( a + b);

// ---------------------------------

// 인자를 받아서 -> 숫자인지 문자인지 타입을 알아내는 함수 만들기

// 인자 = 함수에서 정의되어 함수 내부에서 사용되는 변수
// === 의 의미는 엄격한 동등 연산자 (모든 값이 같아야 true 로 적용된다.)

// checkType 이름 
function checkType(input) {

    var type = typeof input;
    // if 에서 type이 number 숫자인경우 '숫자입니다'를 노출해라
    if (type === 'number') {
        return '숫자입니다.';
    // else if 에서 type 가 'string' 문자인경우 '문자입니다'를 노출해라
    } else if (type === 'string') {
        return '문자입니다.';
    // 위의 if 와 else if 둘다 아닐경우 해당 명령어를 노출시켜라
    } else {
        return '숫자도 문자도 아닙니다.';
    }

    
}

    console.log(checkType(123));  // '숫자입니다.'
    console.log(checkType('abc'));  // '문자입니다.'
    console.log(checkType(true));  // '숫자도 문자도 아닙니다.'


// ---------------------------------
// Math.pow는 자바스크립트에서 제공하는 수학함수이다. 개의 숫자를 인자로 받아서 첫 번째 숫자를 밑으로, 두 번째 숫자를 지수로 하는 거듭제곱 값을 반환합니다.
// 예를 들면 , Math.pow(x, y)는 "x의 y승"을 계산하는 것입니다.

// function squareNumber(input) {
//     if (typeof input === 'number') {
//         return Math.pow(input, 2); 
//     } else {
//         return '입력값이 숫자가 아닙니다.';
//     }
// }

// console.log(squareNumber(3));  // 16
// console.log(squareNumber('abc'));  // '입력값이 숫자가 아닙니다.'

// ---------------------------------

function double1(input){
    return Math.pow(input,2);
}

console.log(double1(3));

// // ---------------------------------

// 숫자가 어떻게 들어가는거지??
function double(input){
    return Math.pow(input,4);
}

console.log(double(3));

// // ---------------------------------

function calculateAverage(score1, score2, score3) {
    var sum = score1 + score2 + score3;  // 세 점수의 합을 계산합니다.
    var average = sum / 3;  // 합을 3으로 나누어 평균값을 계산합니다.
    return average;  // 평균값을 반환합니다.
}

// 150이 들어가게 된다. > sum에서 3을 나눈 값을 average로 넣어주고 > 이 값이 return값


// calculateAverage(40, 50, 60);
console.log(calculateAverage(10,20,30));
console.log(calculateAverage(30,40,50));
console.log(calculateAverage(100,100,100));

// // ---------------------------------
// 점수 3개의 합을 구해야한다.
// function scoreAvrage(score1, score2, score3){
//     // 점수를 더한값을 받아라 
//     var sum = score1 + score2 + score3
//     // 받은 3개의 점수를 나누어야 한다
//     var average = sum / 3
//     // 나눈 값을 추출하면 해당 값이 나온다.
//     return average;
    
// }

function sum(a,b){
    return a+b
}

sum(10,3)
console.log(sum(5,5))
// -------------------------------------------
// 홀수 짝수 만들기

let a = 2

if (a%2 === 0){
    console.log('짝수입니다')
}
else{
    console.log('홀수입니다')
}

// 3항 연산자를 이용해서 만들기

a % 2 === 0? console.log('짝수입니다') : console.log('홀수입니다')




