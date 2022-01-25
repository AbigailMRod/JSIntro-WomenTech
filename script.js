/* const ejercicio1 = [
  3, 100, 85, 64, 46, 39, 40, 30, 20, 24, 25, 6, 10, 54, 82, 71, 67, 77, 17, 29,
  19, 88, 456, 13, 23, 24,
];

const esPrimo = num => {
  for (let i = 2; i < num; i++) {
    if(num % i == 0) return false;
  }
  return true;
}
ejercicio1.forEach(num => {
  console.log("¿%d es primo? %s", num, esPrimo(num));
}) */

const ejercicio2 = [
  {
    nombre: "Gabriel",
    edad: 22,
    esFamiliar: false,
  },
  {
    nombre: "Jaime",
    edad: 15,
    esFamiliar: true,
  },
  {
    nombre: "María",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Angel",
    edad: 19,
    esFamiliar: true,
  },
  {
    nombre: "Fer",
    edad: 18,
    esFamiliar: true,
  },
  {
    nombre: "Rachel",
    edad: 30,
    esFamiliar: true,
  },
];

let invitado = ejercicio2.filter(invitado=> invitado.esFamiliar == true 
                                  && invitado.edad >=18);
//console.log(invitado);




// Fibonacci
let x=0;
let y=1;
let z = 0;
console.log(y);

for (let fibonacci = 0; fibonacci <=50; fibonacci++) {
    z= x+y;
    console.log(z);
    x=y;
    y=z;    
};






