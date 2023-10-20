let a = 9;
let b = 5;
let c ='5';

// 3항 연산자
b === c ? console.log('type same') : console.log('not same')
//조건식 ? 참일때 실행문 : 거짓일때 실행문

let age = 20;
let user = '민수'

console.log( 'AND : ' , true && true, true && false, false && false)
console.log( 'OR : ', true || true, true || false, false || false)
console.log( 'NOT :',  !true, !false, !null, !undefined, !1)

// 나이가 18세 이상이면 성인 아니면 미선년자가 콘솔에 찍히도록 하시오.

// 성인일때 희승님 안녕하세요 라고 나오게 하고 미성년자일때는 죄송합니다.

age >= 18 ? console.log(`${user} 님 안녕하세요`) : console.log('죄송합니다');

