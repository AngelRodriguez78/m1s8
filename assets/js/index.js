console.log("Entro index.js");
// convertimos el JSON a objeto de javascript
let objStudents = JSON.parse(db);

//a partir de este punto ya se trabaja como cualquier objeto

console.log(db);
console.log(objStudents.students);

objStudents.students.forEach(student => {
    let sumGrades = student.grades.reduce((total, grade) => {return total + grade}, 0);
    student.average = sumGrades /3;
    console.log(student);
});


let  miCalculadora = new Calculadora();

console.log(miCalculadora.sumar(2,2),"Suma");
console.log(miCalculadora.restar(5,2), "Resta");
console.log(miCalculadora.multiplicar(5,2), "Multiplicar");
console.log(miCalculadora.dividir(5,2), "Dividir");

let miCalculadoraCientifica = new CalculadoraCientifica();

console.log(miCalculadoraCientifica.sumar(3,3), "suma desde cientifica");
console.log(miCalculadoraCientifica.raizCuadrada(9), "Raiz Cuadrada desde cientifica");

