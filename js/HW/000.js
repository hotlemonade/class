// 과제: 함수 10개를 만들기 않보고 할 수 있도록 

// 1. 수를 넣으면 제곱수 반환
// 2. 인자를 받아서 -> 숫자인지 문자인지 타입을 알아내는 함수 만들기
// 3. 점수를 3가지를 받아서 평균값을 구하기.
// *4. 평균값을 받아서 (점수를 3가지 받아서) 점수가 60점 이하가 없다면 평균값을 계산해라
// 하지만 3가지의 점수중에 60점 밑이 있으면 '불합격' 으로 출력하기. 

// for문 예습하기 

// 함수1


function scoreCheck(eng, math){
    // 만약 eng 와 math 가 60점 이상이면 합격
    let avg = (eng+math) /2;
    let status = eng > 60 && math > 60 && avg > 70;

    return status ? 'Pass' : 'Fail' 
}

console.log(scoreCheck(65,70))

function sumNumbers(a,b,...c) {
    let numbers = [a,b,...c];
    let result = numbers.reduce( (total, cur) => total + cur);
    console.log(result)
}

sumNumbers(1,3, 4, 5)
sumNumbers(1,5,4,7,8, 4, 5)

console.clear();

let nums = [ 1,2,3,4,5];
let result = nums.reduce( (a,b) => a + b);
console.log(result);