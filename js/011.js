let animals = ['dog','cat','cow','pig','lion','tiger']

for(let i=0; i < animals.length; i++){
    console.log(animals[i])
}

animals.forEach((muuu,index,all) => {
    console.log(index, muuu, all)
})

for(let animal of animals){
    console.log(animal)
}

animals.forEach((animal) => {
    console.log('Hello',animal)
})

console.clear();
animals.push('parrot')
let result = animals.filter( (animal)  => animal.length <= 3); 
console.log('1:', result)

result = animals.filter( (_,index)  =>  index >= 2); 
console.log('2:', result)

result = animals.filter( (_,index) => !(index % 2) );
console.log('3:', result)

