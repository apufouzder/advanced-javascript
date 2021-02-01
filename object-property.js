const students = [
    { id: 20, name: 'Apu Fouzder' },
    { id: 30, name: 'Ratan' },
    { id: 40, name: 'Pranto' },
    { id: 50, name: 'Joy' }
];

const names = students.map(s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 30);

console.log(names);
console.log(ids);
console.log(bigger);
console.log(biggerOne);