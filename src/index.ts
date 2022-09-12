interface direccionAlumno{
    calle: string,
    pais: string,
    estado: string,
    numero: number | string,
}

interface utlAlumno{
    nombre : string,
    edad : number,
    direccion : direccionAlumno,
    mostrarDireccion : () => void 
}


const pruebaAlumno : utlAlumno = {
    nombre : 'Ulises',
    edad : 21,
    direccion : {
        calle : 'China',
        pais : 'Mexico',
        estado : 'Guanajuato',
        numero : '102A',
    },
    mostrarDireccion(){
        return this.nombre + ', ' + this.direccion.estado + ', ' + this.direccion.pais
    }
}


console.log(pruebaAlumno);

