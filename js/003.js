let a = 4

// a의 나머지가 0이면 짝수 나머지가 있으면 홀수 로 표시해라

// 만약에 a 나머지 2 를 했을때 0 이 나오면 짝수를 표시해라
// if (a % 2 == 0){
//     console.log(`짝수`)
// }else{
//     console.log(`홀수`)
// }

// console.log(5 % 6)

/*

if( a % 2 == 0) {
    console.log('2 double')
} else if( a % 3 == 0) {
    console.log('3 double')
} else {
    console.log('not')
}
*/

a = 30

if( a % 2 == 0  && a % 3 == 0 && a % 5 == 0) {
    console.log('2,3,5 common number')
} else {
    console.log('not')
}

