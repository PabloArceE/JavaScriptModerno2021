// La sobrecarga de un método constructor no es más que establecer multiples formas de poder crear un elemento de una clase. Para esto el lenguaje de programación debe ser capáz de recibir distintos argumentos en un constructor y determinar según estos que constructor debe utilizarce para instanciar un nuevo objeto. En el caso de JS no es posible directamente.
// En JS se utiliza una estructura capáz de simular la sobrecarga del método constructor.
// Dada una determinada clase se quire instanciar un objeto pasando tres argumentos e instanciar otro pasando como argumento a un objeto literal.
// En el primer caso se utiliza new Persona puesto que el constructor de la clase recibe directamente tres argumentos; pero en el segundo caso es necesario utilizar un protip puesto que en JS las clases solo pueden tener un constructor.
// Utilizamos entonces un método static con destructuracion de argumentos de la clase Persoan; es decir, sabiendo que el método static va a recibir una persona y a retornar la instanciación de un nuevo objeto de tipo Persona, pasamos como argumentos al método static la destructuración de los argumentos de la clase Persona con el fin de poder instanciar un new Persona.

class Persona{

    static constructorPorObjetos({ nombre, apellido, pais }){
      return new Persona(nombre, apellido, pais);
    }

    constructor(nombre, apellido, pais){
        this.nombre   = nombre;
        this.apellido = apellido;
        this.pais     = pais;
    }

    getInfo(){
        console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais}`);
    }

}


const nombre1    = 'Melissa',
      apellido1  = 'Flores',
      pais1      = 'Honduras';

const pablo = {
    nombre:   'Pablo',
    apellido: 'Arce',
    pais:     'Argentina'
}

const persona1 = new Persona(nombre1,apellido1,pais1);
const persona2 = Persona.constructorPorObjetos(pablo);

persona1.getInfo();
persona2.getInfo();

