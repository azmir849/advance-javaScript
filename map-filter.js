//generally
const numbers = [3,4,8,3,4,6,5];
const output = [];
for(let i = 0 ; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}

console.log(output);

//using map
function square(element){
    return element * element;
}

numbers.map(function(element,index,array){
    console.log(element,index,array);
})
//console.log(output);


//using filter
const bigger = numbers.filter(x => x>5);
console.log(bigger);