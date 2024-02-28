function solution(money) {
    const coffe = 5500
    let change = money % coffe
    let count = Math.floor(money / coffe )
    var answer = [count, change];
    console.log(answer);
}

solution(15000)

// 머쓱이는 5500 원을 가지고 있는데 15000(y)원이 있을경우 몇잔을 마실 수 있을까?

// 그럼녀 5500 계속 더한다 y의 값의 한계가 올때까지

// 5500  < 15,000


// 몇잔
// 잔액 
