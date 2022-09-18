// Strings


// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

var originalText = "La casa esta hecha de jengibre"
console.log ("El texto que deseamos pasar a letras mayúsculas es: ", originalText.toUpperCase())

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var originalText = "Las plantas estan brotando"
var first5Characters = originalText.substring (0, 5)
console.log ("Los primeros 5 caracteres de la frase son: ", first5Characters)

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var originalText = "La casa esta embrujada"
var last3Characters = originalText.substring (19)
console.log ("Los últimos 3 caracteres de la frase son: ", last3Characters)