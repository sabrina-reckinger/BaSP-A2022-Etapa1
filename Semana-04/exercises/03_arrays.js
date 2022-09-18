// Arrays

// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
console.log ("Los meses elegidos son:",months[4] + " y " + months[10])

// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

console.log ("En orden alfabetico los meses del año son:", months.sort())

//Agregar un elemento al principio y al final del array (utilizar unshift y push).

months.unshift("Lunes")
months.push("Viernes")
console.log("He agregado a la lista de meses, dos dias de la semana:", months)

//Quitar un elemento del principio y del final del array (utilizar shift y pop).

months.shift()
months.pop()
console.log("He quitado de la lista, los dias de la semana:", months)

//Invertir el orden del array (utilizar reverse).

console.log ("Los meses en orden invertido son:", months.reverse())

//Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

console.log (months.join(" - "))

//Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]
var newArray = months.slice(4, 11)
console.log ("Los meses son:", newArray)