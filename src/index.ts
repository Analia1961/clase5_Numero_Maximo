// CLASE 5 - Lunes 2 de mayo de 2022
// Estructuras de Control - CICLOS

// Ejercicio 6: Encontrar el Número Máximo
/*
• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo */

/* Ingrese número: 9
Ingrese número: 7
Ingrese número: -1
Ingrese número: 1
Ingrese número: 0
El máximo es 9 
*/

let conIngresos: boolean = false;
let num = Number(prompt("Ingrese un número"));
let maxNum: number = num;
while (num !== 0) {
  conIngresos = true;
  if (num > maxNum) {
    maxNum = num;
  }
  num = Number(prompt("Ingrese un número"));
}
if (conIngresos) {
  console.log("El máximo es ", maxNum);
}

// Encontrar el Número Mínimo
/*
let conIngresos: boolean = false;
let num = Number(prompt("Ingrese un número"));
let minNum: number = num;
while (num !== 0) {
  conIngresos = true;
  if (num < minNum) {
  minNum = num;
  }
  num = Number(prompt("Ingrese un número"));
}
if (conIngresos) {
console.log(“El mínimo es " , minNum);
}*/
