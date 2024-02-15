// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution(n) {
    
    var answer = 0;


    return answer;

    

}

console.log(solution(10))

const nums = [1,2,3,4,5,6,7,8,9,10]
let result = nums.reduce( (a,b) => a + b)
console.log('result: ', result)

let sum = 0;


for(let i = 1; i <= 10; i++) {
    if(i % 2 === 0){
        sum += i
    }
}


