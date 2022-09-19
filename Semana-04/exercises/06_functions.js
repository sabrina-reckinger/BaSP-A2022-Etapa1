// Funciones


// Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.

var numberOne = 2.8
var numberTwo = 8.3
function addition (numberOne, numberTwo){
    return (numberOne + numberTwo)
}
answer = addition(numberOne, numberTwo)
console.log (answer)

// A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número; de no ser un número, mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.

function additionAlert (numberOne, numberTwo){
    if (typeof numberOne != "number" || typeof numberTwo != "number") {
        alert("Uno de los parametros es incorrecto")
        return ("NaN")
    } else {
        return (numberOne + numberTwo)
    }
}
answerAlert = additionAlert(numberOne, numberTwo)
console.log (answerAlert)

// Aparte, crear una función validate Integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

var number = 11
function validateInteger (data) {
    return((data - data.toFixed())==0)
}
console.log(validateInteger(number))

// A la función suma del ejercicio 6b) agregarle una llamada a la función del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales mostrar un alerta con el error y retornar el número convertido a entero (redondeado).

function additionAlert2 (numberOne, numberTwo){
    if (typeof numberOne != "number" || typeof numberTwo != "number") {
        alert("Uno de los parametros es incorrecto");
        return ("NaN");
    } else {
        if (validateInteger(numberOne) == true && validateInteger(numberTwo) == true){
            return (numberOne + numberTwo);
        } else {
            alert ("Uno de los numeros NO es entero. Ambos numeros como enteros deberian ser " + numberOne.toFixed() + " y " + numberTwo.toFixed());
        }
    }
}
answerAlert2 = additionAlert2(numberOne, numberTwo)
console.log (answerAlert2)

// Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la función suma probando que todo siga funcionando igual.

function validateNumbers(numberOne, numberTwo){
    return (validateInteger(numberOne) == true && validateInteger(numberTwo) == true)
}

function additionAlert3 (numberOne, numberTwo){
    if (typeof numberOne != "number" || typeof numberTwo != "number") {
        alert("Uno de los parametros es incorrecto");
        return ("NaN");
    } else {
        if (validateNumbers(numberOne, numberTwo)==true){
            return (numberOne + numberTwo);
        } else {
            alert ("Uno de los numeros NO es entero. Ambos numeros como enteros deberian ser " + numberOne.toFixed() + " y " + numberTwo.toFixed());
        }
    }
}
answerAlert3 = additionAlert3(numberOne, numberTwo)
console.log (answerAlert3)