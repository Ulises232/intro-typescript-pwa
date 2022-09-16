class Formula {
    private a : number;
    private b : number;
    private c : number;
    
    constructor() {
        
    }


    setA(valor : number){
        this.a = valor;
    }

    setB(valor : number){
        this.b = valor;
    }

    setC(valor : number){
        this.b = valor;
    }

    private suma4AC() {
        return 4 * this.a * this.c;
    }

    private potenciaB() {
        return Math.pow(this.b, 2)
    }

    

    private raiz() {
        return Math.sqrt(this.potenciaB() - this.suma4AC());
    }


    private restaDividendo() {
        return -this.b - this.raiz();
    }

    private sumaDividendo() {
        return -this.b + this.raiz();
    }
    private multiplicacion2A() {
        return 2 * this.a;
    }

    private resultadoResta() {
        return this.restaDividendo() / this.multiplicacion2A();
    }

    private resultadoSuma() {
        return this.sumaDividendo() / this.multiplicacion2A();
    }

    /**
     * imprimir resta
     */
    public imprimirResta() {
        console.log(this.resultadoResta());
    }

    /**
     * imprimir suma
     */
     public imprimirSuma() {
        console.log(this.resultadoSuma());
    }
}


const resultado = new Formula();

resultado.setA(1);
resultado.setB(2);
resultado.setC(3);
resultado.imprimirResta();
resultado.imprimirSuma();
