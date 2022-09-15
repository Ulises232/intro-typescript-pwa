
interface Detalles {
    autor:string,
    anio:number | string
}

interface Reproducto{
    volumen: number,
    segundo: number,
    cancion: string,
    detalles: Detalles
}


const reproductor : Reproducto = {

    volumen : 90,
    segundo : 60,
    cancion : 'Mañanitas',
    detalles : {
        autor : 'Rey David',
        anio : 1500
    }

}

const{cancion,volumen,segundo,detalles} =  reproductor;

const{autor,anio} =  detalles;

console.table("el nombre de la cancion:  " + cancion);
console.table("el volumen " + volumen);
console.table("el segundo " + segundo);
console.table("el autor " + autor);
console.table("el año " + anio);



const dbz : string[] = ['Goku','Veggeta','Krillin','Yamcha'];


console.log("Personaje 1: " + dbz[0]);
console.log("Personaje 2: " + dbz[1]);
console.log("Personaje 3: " + dbz[2]);
console.log("Personaje 4: " + dbz[3]);

const[p1,p2,p3,p4] = dbz

console.log("Personaje 1: " + p1);
console.log("Personaje 2: " + p2);
console.log("Personaje 3: " + p3);
console.log("Personaje 4: " + p4);