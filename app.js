console.log('Hola');

//
const person ={
    name: 'Diego',
    lasName: 'Cueva',

    saludar: function(){
        return `Hola ${this.name}`
    }
};

//console.log(person.name);
//console.log(person.lasName);

//CLASE
class Person {
    constructor(name, lasName){
        this.name = name;
        this.lasName = lasName;
    }
    saludar(){
        return `Hola ${this.name} ${this.lasName}`;
    }
}
// new palabra reservada para crear clases
const person1 =new Person('Diego', 'Cueva');
console.log(person1.saludar());
//console.log(person1.name);
//console.log(person1.lasName);


    /////////////////////////////////////
    //HERENCIA
    class Vehiculo{
        constructor(numPlaca, color, marca, velocidad){
            this.marca = numPlaca;
            this.modelo = color;
            this.precio = marca;
            this.estado = velocidad;  
        }

        acelera(){
            return `El auto ${this.marca} acelera a ${this.velocidad}`;
        }

        frenar(){
            return `El auto ${this.marca} freno`;
        }
    }
 
    const vehiculo1 = new Vehiculo('kj123', 'rojo', 'ford', '200km/h');
    console.log(vehiculo1)

    class Auto extends Vehiculo{
        constructor (numPlaca, color, marca, velocidad){
            super(numPlaca, color, marca, velocidad);
            this.aireAcondicionado = false;
        }
        encenderAireAcondicionado(value){
            this.aireAcondicionado=value;

        }
    }

   
  const auto1 = new Auto('XDQ123', 'verde', 'toyota', '100km/h');
  console.log(auto1);
  auto1.encenderAireAcondicionado(true);
  console.log(auto1);