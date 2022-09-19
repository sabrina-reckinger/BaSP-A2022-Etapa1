//For


// Crear un array que contenga 5 palabras y recorrer dicho array utilizando un bucle for de JavaScript para mostrar una alerta utilizando cada una de las palabras.

var fruits = ["Apple", "Orange", "banana", "pineapple", "Grape"];

for (counter = 0; counter < fruits.length; counter++){
    alert (fruits[counter]);
}

// Al array anterior convertir la primera letra de cada palabra en mayúscula y mostrar una alerta por cada palabra modificada.

for (counter = 0; counter < fruits.length; counter++){
    alert (fruits[counter].substring(0, 1).toUpperCase() + fruits[counter].substring(1).toLowerCase());
}

// Crear una variable llamada “sentence” que tenga un string vacío, luego al array del punto a) recorrerlo con un bucle for para ir guardando cada palabra dentro de la variable sentence. Al final mostrar una única alerta con la cadena completa.

var sentence = ""
for (counter = 0; counter < fruits.length; counter++) {
    sentence = sentence + fruits[counter]
}
alert(sentence)

// Crear una array vacío y con un bucle for de 10 repeticiones. Llenar el array con el número de la repetición, es decir que al final de la ejecución del bucle for debería haber 10 elementos dentro del array, desde el número 0 hasta al número 9. Mostrar por la consola del navegador el array final (utilizar console.log).

var emptyArray = []
for (counter = 0; counter < 10; counter++) {
    emptyArray.push(counter)
}
console.log(emptyArray)