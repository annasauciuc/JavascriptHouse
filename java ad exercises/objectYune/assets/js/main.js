//******** DECLARAMOS CONSTRUCTOR (clase según MDN que es una funcion) QUE CONSTRUYE COCHES ***************.
function crearCoche(marca, modelo, color) {
  //Cada coche tendrá los métodos(son funciones al fin y al cabo) encender(), apagar() y renderizarDatosCoche().
  // Además cada coche tendrá las propiedades elementosBasicos(es un array) y modelo, marca y color(que se le pasan al constructor, cuando se crean los coches).

  // ----------- Elementos básicos -------------
  this.elementosBasicos = [
    //todos los coches tienen la propiedad elementosBasicos.
    "sillones",
    "ruedas",
    "luces"
  ];

  // ----------- Propiedades que tienen todos los coches, pero con valores únicos para cada uno ------------
  // Se le pasan al constructor(crearCoche) cuando se crea una instancia(coches).
  this.modelo = modelo;
  this.marca = marca;
  this.color = color;

  //------------- Métodos o funciones que tiene cada instancia(todos los coches las tienen) ----------
  this.encender = function() {
    let estado = `El coche ${this.marca}: está encendiendo coche ....`;
    return estado;
  };
  this.apagar = function() {
    return `El coche ${this.marca}: está apagando coche ...`;
  };
  this.renderizarDatosCoche = function() {
    //crea un <li> con la marca, modelo y color del coche. Recuerda que cuando se crea una instancia la almacenas en una variable(coche1, coche2) y se pueden acceder a todas las propiedades y metodos de esa instancia, por lo tanto marca, modelo y color son propiedades de esa instancia u objeto en concreto. Accediendo a el método renderizarDatosCoche() de esa variable(de coche1 y coche2), se obtienen marca, modelo y color de ese coche en concreto(gracias al this).
    $("#render").append(
      `<li>Marca: ${this.marca}, Modelo: ${this.modelo}, Color: ${
        this.color
      }</li>`
    );
  };
}

// *************** CREAMOS LAS INSTANCIAS DE crearCoche() ***************
coche1 = new crearCoche("Nissan", "Micra", "Verde"); //creo la instancia coche1 de coche() pasándole la marca, modelo y color de mi coche.
coche2 = new crearCoche("Ford", "Fiesta", "Rojo"); //creo la instancia coche2 de coche() pasándole la marca, modelo y color de mi coche.
coche3 = new crearCoche("Volkswagen", "Beetle", "Negro");

// ********** LLAMAMOS A LOS MÉTODOS DE LOS OBJETOS O INSTANCIAS *********
coche1.renderizarDatosCoche(); //llamo al método renderizaDatosCoche() de coche1.
coche2.renderizarDatosCoche(); //llamo al método renderizaDatosCoche() de coche2.
coche3.renderizarDatosCoche();

// ********* AÑADIMOS <li>'s CON ESTADO DE CADA COCHE ****************
$("#render2").append(`<li>${coche1.encender()}</li>`); //añado a render2 un li con el contenido que devuelva el método encender() de coche1.
$("#render2").append(`<li>${coche2.apagar()}</li>`); //añado a render2 un li con el contenido que devuelva el método apagar() de coche2.
$("#render2").append(`<li>${coche3.encender()}</li>`);

// ************ ERRORES QUE PUEDEN SALIR ********
//crearCoche().renderizarDatosCoche(); //cannot read property 'renderizarDatosCoches' of undefined.
// new crearCoche().renderizarDatosCoche(); //undefined.
//console.log(new crearCoche().modelo); //undefined.
// console.log(coche4.marca); //coche4 is not defined.
