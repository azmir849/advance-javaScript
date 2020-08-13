function sum(x,y){
    let result  = x + y ;
    console.log(result); //Scopeable
    return result ;
}

const output  = sum(3,7);
//console.log(result); Not Scopeable its out of range
console.log(output);