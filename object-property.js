const students = [
    {id:21 , name:'Omar Sunny'},
    {id:31,  name:'Manaaaaaaaa'},
    {id:41,  name:'Dipjol'},
    {id:51,  name:'Sagorika'}
];

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id>40);
const biggerOne = students.find( s => s.id>40);
console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);