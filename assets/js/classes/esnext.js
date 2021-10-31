// Atributos privados, actualmente no es aceptado globalmente.
// Para que los atributos no puedan ser modificados fuera de la clase.
// Se le coloca # al inicion del nombre del atributo. Ejemplo #area.
// Actualmente no se puede crear métodos privados.

class Rectangulo {

    #area = 0;

    constructor(base = 0, altura = 0){

        this.base   = base;
        this.altura = altura;

        this.#area = base * altura;

    }
}

const rectangulo = new Rectangulo(10, 15);

// Código para generar error al modificar un atributo privado
//console.log(rectangulo.#area = 100);
// Uncaught SyntaxisError: Private field '#area' must be declared in a enclosing class.

console.log(rectangulo);

