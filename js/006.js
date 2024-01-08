// 함수를 만들어보자
// 함수를 만들때는 function 안에 변수를 추가한다.

// function 함수이름 () {

// }

// 함수는 카멜 표기법으로 사용한다 그 이유는 대문자 소문자를 읽기 때문이다. 
function compare(a,b){
    // let a = 5
    // let b = 10

    return ( a > b) ? a : b; 

    // console.log(result)

    // 함수는 return 다음으로 호출되지 않는다.
    // return 문은 하나만 있어야한다.
   
}

// 함수는 호출을 해야지 실행이 된다.
compare(4,7)

compare(1,7)

console.log(
    compare(4,5)
)





