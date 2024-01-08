// for문 이용하기 (배열)
let animals = ['dog','cat','bird','pig','cow']

// push를 사용시 뒤로 추가된다.
animals.push('parrot')
// unshift를 사용시 앞으로 추가된다.
animals.unshift('rabit')

// 맨뒤의 두의 원소를 삭제한다.
animals.pop()
// 멘 앞에 원소를 삭제한다
animals.shift()
// splice는 삭제하는 위치를 정할 수 있다 (2(시작위치),2(삭제할 개수),'rabbit'자리에 추가하겠다)
animals.splice(2,2,'rabbit')


for(let i=0; i< animals.length; i++){
    console.log(animals[i])
}

animals.forEach((animal,index,arr) => {
    console.log(animal)
    console.log(index)
    console.log(arr)
})

for(let animal of animals){
    console.log(animal)
}

let numbers = [1,2,3,4,5]

numbers.map(num => num * 2)
console.log(numbers.map(num => Math.pow(num,2)))

let result = numbers.filter(data => data > 3)
console.log(result)

// 짝수홀수 구하기

let a = 3

if( a%2 === 0){
    console.log('짝수입니다')
    
}
else{
    console.log('홀수입니다.')
}

// 3항연산자
a%2 === 0 ? console.log('짝수입니다') : console.log('홀수입니다') 

// 과제(홀짝을 구분하는 함수를 만들어오기)