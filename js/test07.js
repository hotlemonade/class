let nums = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]


// let result = nums.filter(num => num % 3 === 0 && num % 5 === 0)
let result = nums.filter(num => !(num % 3) && !(num % 5) )

 
let limit = 100;
let answer = [];
for(let i=1; i<=limit; i++){
    if (limit % i === 0){
        answer.push(i)
    }
}
console.log(answer.length)



function solution(n) {
    let count = [];
    for (let i = 1; i * i <= n; i++) {
        if (n % i === 0) {
            count.push([i, n / i]);
        }
    }
    return count.length;
}
