 
function solution(arr,n) {
    let answer = arr.filter( data => data === n).length;
    console.log(answer)
}

// solution([1, 1, 2, 3, 4, 5], 1);

function solution2(str) {
    let answer = str.map(data => data.length)
    console.log(answer);
}

solution2(["We", "are", "the", "world!"])