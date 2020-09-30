var docente = {
    nombre: 'Kevin',
    apellido: 'Gonzaga',
}

var docente2 = {
    nombre: 'pepe',
    apellido: 'Alvares',
}

// Asignación por paso de valor
var otroDocente = {
    ... docente
}

console.log( docente == docente2 )
// Debido a que son objetos diferentes (tienen diferente dirección de memoria)
console.log( docente == otroDocente )

console.log( otroDocente.nombre )

// Esta asignación es por referencia
docente3 = otroDocente
otroDocente.nombre = 'kevin'

// Debido a que es el mismo objeto (tienen la misma dirección en memoria)
console.log( docente3 == otroDocente )
console.log( docente3 )
console.log( docente )