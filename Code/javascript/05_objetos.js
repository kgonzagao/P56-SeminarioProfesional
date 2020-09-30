var docente1 = {
    nombre: 'kevin',
    apellido: 'gonzaga',
    afiliacion: 'Universidad Politécnica Salesiana',
    correo_electronico: 'kgonzaga@ups.edu.ec',
}

var docente2 = {
    nombre: 'alexander',
    apellido: 'orellana',
    afiliacion: 'Universidad Politécnica Salesiana',
    correo_electronico: 'aorellana@ups.edu.ec',
}

function imprimirNombreMayuscula(objeto) {
    var { nombre } = objeto
    console.log( `${nombre.toUpperCase()} ${objeto.apellido}` )
}

function imprimirNombreMinuscula(objeto) {
    console.log( `${objeto.nombre.toLowerCase()} ${objeto.apellido}` )
}

function imprimirApellidoMayuscula( { apellido } ) {
    console.log( `${apellido.toUpperCase()}` )
}


imprimirNombreMayuscula( docente1 )
imprimirNombreMinuscula( docente1 )
imprimirApellidoMayuscula( docente2 )