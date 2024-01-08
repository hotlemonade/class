// if 는 조건문 
// for 는 반복문
let total = 0;
for(let i=1; i<=10; i++ ){
   total = total + i;
}

console.log(total)


 
 for(let dan = 2; dan<=9; dan++){
    
    for(let i=1; i<=9; i++){
        // console.log(dan + '*' + i + '=' + dan*i)
        console.log(`${dan} * ${i} = ${dan*i}`)
     }
 }
 console.clear();

 let pets = ['puppy','cat','bird','pig'];

 
 for(let i=0; i< pets.length ; i++) {
     console.log(`my favorite is ${pets[i]}`)
     console.log(pets[i].length)

 }

let str = 'Hello world';
console.log(str.length)



pets.pop();
console.log(pets);

pets.splice(2, 1); // 2th -> 1 delete
console.log(pets);

pets.push('rabbbit');
pets.push('camel')
console.log(pets);

pets.splice(2,2);
console.log(pets);


let member1 = ['kim','park'];
let member2 = ['lee','jung','moon']

// let members = member1.concat(member2);
let members = [...member1, ...member2]
console.log(members);


// for 문이랑 배열 복습하기.
