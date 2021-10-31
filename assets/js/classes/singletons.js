// Un singleton es básicamente una instancia única de una clase.
// El patrón singleton se utiliza cuando queremos que exista una sola instancia de una clase particular en toda la aplicación. Cuando algien instancia una clase singleton debemos comprobar si ya existe una instancia, si es así, devolver esa instancia. Si no existe, se crea.
// Singleton es un patrón de diseño creacional que nos permite asegurarnos de que una clase tenga una única instancia, a la vez que proporciona un punto de acceso global a dicha instancia.
// El patrón de diseño Singleton (instancia única) está diseñado para restringir la creación de objetos pertenecientes a una clase o el valor de un tipo a un único objeto. Su intención consiste en garantizar que una clase solo tenga una instancia y propocinar un punto de acceso global a ella.
// Para esto se incluye en el constructor de una clase un condicional que verifique si ya existe una instancia y retorne la insatancia existente. Si no existe se crea por primera y única vez.
// Es interesante desatcar que en la condicion del if se utiliza una doble negación con el fin de convertir el tipo de dato undefined del atributo staic instancia, a un tipo de dato booleano que mejora la performance del condicionale en JS. 
// instancia es undefined al comienzo cuando se niega por primera ve retorna un false, !undefined = false; luego negado dos veces es !!undefined = true; lo que indica que ya existe una instancia.

class ClaseSingleton{

    static instancia;
    nombre = '';

    constructor(nombre = ''){

        if(!!ClaseSingleton.instancia){
            return ClaseSingleton.instancia;
        }

        ClaseSingleton.instancia = this;
        this.nombre = nombre;
    }
}

const instancia1 = new ClaseSingleton('Pablo');
// Creación de nuevas instancias que retornaran la primera instancia. Es decír que son acceso a la misma instancia única de la clase creada con el patrón Singleton.
const instancia2 = new ClaseSingleton('Ana');
const instancia3 = new ClaseSingleton('Anahi');

console.log(`Retorno de la primera instancia: ${instancia1.nombre}`);
console.log(`Retorno de la segunda instancia: ${instancia2.nombre}`);
console.log(`Retorno de la tercera instancia: ${instancia3.nombre}`);
