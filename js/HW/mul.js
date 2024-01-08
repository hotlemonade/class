

function isEven(num){
    return !(num%2) ? 1 : 0;
    // return num%2 ===0 ? 1 : 0;
    // return num%2 !==0 ? 0 : 1;
    // return num%2 ? 0 :1;
}

console.log(isEven(10))

 // gugudan

function gugudan(dan) {
    for(let i = 1; i <=9; i++){
        console.log(`${dan} * ${i} = ${dan * i}`) 
    }
}


//  gugudan(5)
//  gugudan(6)

function gugudanEnd(start, end) {
    for(let dan = start; dan<=end; dan++){
    
        for(let i=1; i<=9; i++){ 
            console.log(`${dan} * ${i} = ${dan*i}`)
         }
     }
}

gugudanEnd(3,5) // 3,4,5
// gugudanEnd(4,8)// 4~8

function mul(a,b){
    return a * b 
}


console.log(mul(3,4))



