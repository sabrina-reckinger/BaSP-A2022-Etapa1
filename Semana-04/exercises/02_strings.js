// Strings


// Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula (utilizar toUpperCase).

var originalText = "La casa esta hecha de jengibre"
console.log ("El texto que deseamos pasar a letras mayúsculas es:", originalText.toUpperCase())

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar substring).

var originalText = "Las plantas estan brotando"
var first5Characters = originalText.substring (0, 5)
console.log ("Los primeros 5 caracteres de la frase son:", first5Characters)

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar substring).

var originalText = "La casa esta embrujada"
var last3Characters = originalText.substring (19)
console.log ("Los últimos 3 caracteres de la frase son:", last3Characters)

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).

var originalText = "lOS vamPiros no se REflejan en el espejo"
var newText = (originalText.substring(0,1).toUpperCase()) + (originalText.substring(1).toLowerCase())
console.log ("El texto resultante es:", newText)

//Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar indexOf).

var originalText = "El perro gordo quiere comer"
var position = originalText.indexOf(" ")
console.log ("El primer espacion en blanco se encuentra en el index:", position)

//Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).

var originalText = "hipopotamo anaranjado"
var position = originalText.indexOf(" ")
var newText = originalText.substring(0, 1).toUpperCase() + originalText.substring(1, position).toLowerCase() + originalText[position] + originalText.substring(position+1, position+2).toUpperCase() + originalText.substring(position+2).toLowerCase()
console.log ("El texto queda:", newText)