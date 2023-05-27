//PRACTICA
/*Crear una clase de tipo Vehiculo. Crear minimo 5 propieades y 3 metodos. 
Que los metodos interactuen con las propiedades.
*/
class Vehiculo{

    constructor(marca, modelo, precio, estado){ 
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.estado = estado;
    }
    comprar(){
        console.log( `El precio del auto ${this.marca} es ${this.precio}`);
    
    }
    viciEstado(){ 
        console.log ( `El estado del vici es ${this.estado}`);
    }

    modeloMoto(){
    console( `El modelo del auto es ${this.modelo}`);
    }
    }

    const auto = new Vehiculo('Jeep', '2400', );
    console.log(auto.comprar());

    const vici = new Vehiculo('Nuevo');
    console.log(vici.viciEstado());

    const moto = new Vehiculo('todoterreno');
    console.log(moto.modeloMoto());



/* Agregar ejemplo de cada uno de los conceptos base de poo. Herencia , 
polimorfismo, abstraccion y encapsulamient.*/ 

//class Moto extends7
