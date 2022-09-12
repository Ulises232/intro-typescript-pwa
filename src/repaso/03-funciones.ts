function nombres(): void {
    console.log('nombre')
}

nombres();

function suma(num1:number, num2:number = 5):number {
    let num3: number = num1 + num2;
    return num3;
}

console.log(suma(10));

/* function resta(num1 : number , num2 : number , num3? : number): number {
    let num4  = num1 - num2;
    if (num3) {
        num4 = num4 - num3; 
    } 
    return num4;

} */


function resta(num1 : number , num2 : number , num3 : number = 0): number {
    let num4  = num1 - num2 - num3;
    return num4;
}

console.log(resta(10,5));
console.log(resta(10,5,2));


const sumaFlecha = (a: number,b:number):number =>{
    return a + b;
}


interface escuelaAlumno {
    nombre4 : string,
    email : string,
    edad : number,
    saludar :  ()=>void;
}

function alumnoUTL(alumno:escuelaAlumno, calificar: number ) {
    alumno.nombre4 = 'Ulises';
    alumno.email = 'ulises@alumnos.com';
    alumno.edad = calificar;
}


const nuevoAlumno : escuelaAlumno = {
    nombre4 : 'dario',
    edad: 23,
    email: 'hola@gmail.com',
    saludar() {
        console.log('Hola mundo');
        
    },

}

