

class Persona {

    private nombre : string;
    private edad : number;

    constructor(a :  string, b : number) {
            this.nombre = a;
            this.edad = b;
    }
    

    private imprimir():void{
        console.log(`Nombre ${this.nombre}`);
     }

    setNombre(nombre : string){
        this.nombre = nombre;
    }

    
    getnombre() : string {
        return this.nombre;
    }
    

    setEdad(edad){
        this.edad = edad;
    }
    
     
}


let persona1:Persona;
persona1 = new Persona("Ulises", 21);

let persona2:Persona;
persona2 = new Persona("Abimael",23);


persona1.setNombre('Ulises');
console.log(persona1.getnombre());

/* persona1.nombre = "Ulises";
persona2.nombre = "Abimael";

persona1.imprimir();
persona2.imprimir(); */




class Dado {
    private valor : number;


    /**
     * tirar
     */
    public tirar() {
        this.generar();
    }

    private generar() {
        this.valor = Math.floor(Math.random() * 6) + 1;
    }

    /**
     * imprimir
     */
    public imprimir() {
        console.log(`Salio el valor ${this.valor}`);
        
    }
}


let dado1 = new Dado();
dado1.tirar();
dado1.imprimir();
