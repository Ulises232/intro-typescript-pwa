class tabla {
  constructor() {}

  private numero: number;
  public tem: number;

  setNumero(a: number) {
    this.numero = a;
  }

  getNumero(): Number {
    return this.numero;
  }

  calcular(): void {
    console.log("\nfor:");
    for (let index = 1; index < 11; index++) {
      console.log(`${this.numero} x ${index} = ${this.numero * index}`);
    }

    console.log("\nWhile:");

    let s: number = 1;
    while (s < 11) {
      console.log(`${this.numero} x ${s} = ${this.numero * s}`);

      s++;
    }
  }
}

let tabla1 = new tabla();
tabla1.setNumero(6);
tabla1.calcular();
