import { Operations } from "./math.js";
const d = document;

export class Display {
  constructor(screenPrimary, screenSecondary) {
    this.screenPrimary = screenPrimary;
    this.screenSecondary = screenSecondary;
    this.valueOne = "";
    this.valueSecond = "";
    this.result = "";
    this.sign = undefined;
  }

  displayPrimary(a) {
    console.log("ARGUMENTO DE LA PRIMERA FUNCION: " + a);
    // Agregando valores al display

    if (a === "=") {
      return this.same();
    }
    if (this.sign === "=") {
      this.screenPrimary.innerHTML = "";
      this.sign = "";
    }
    if (a === ".") {
      this.valueOne += a;
      this.screenPrimary.innerHTML += a;
      console.log(parseFloat(this.valueOne));
      return;
    }

    if (a === "AC") {
      this.delete();
      return;
    }

    this.screenPrimary.innerHTML += a;
    if (!isNaN(a)) {
      this.valueOne += a;
      console.log("ValueOne:  " + Number(this.valueOne));
    } else {
      this.valueSecond = this.valueOne;
      this.valueOne = "";
      console.log("ValueSecond:  " + this.valueSecond);
    }

    if (this.valueSecond) {
      this.operations(a);
    } else {
      console.log("Funcion operacion no ejecutada");
    }
  }

  operations(sign) {
    console.log("FUNCION OPERACION");
    // VALIDACIONES
    if (sign === "+" || sign === "-" || sign === "/" || sign === "x") {
      this.sign = sign;
    }
    if (isNaN(sign) && this.result) {
      this.valueSecond = this.result;
      console.log("es signo : " + sign);
    }
    // Creacion de los argumentos en las operaciones
    let a = Number(this.valueOne),
      b = Number(this.valueSecond),
      result = 0;

    // Instanciando la clase
    const ope = new Operations();
    console.log("primer argumento  `a`: " + a);
    console.log("Segundo argumento `b`: " + b);

    if (this.sign === "+") {
      result = ope.addition(a, b);
    } else if (this.sign === "-") {
      result = ope.subtraction(b, a);
    } else if (this.sign === "/") {
      result = ope.division(b, a);
    } else if (this.sign === "x") {
      result = ope.multiplication(a, b);
    }
    console.log("Resultado: " + this.sign + "  " + result);
    this.result = result;
    if (a !== 0) {
      this.screenSecondary.innerHTML = `${result}`;
    }
  }

  same() {
    this.sign = "=";
    this.screenPrimary.innerHTML = this.result;
    this.screenSecondary.innerHTML = "";
    this.result = "";
    this.valueOne = "";
    this.valueSecond = "";
  }

  delete() {
    this.screenPrimary.innerHTML = "";
    this.screenSecondary.innerHTML = "";
    this.valueOne = "";
    this.valueSecond = "";
    this.result = "";
    this.sign = undefined;
  }
}
