function Animal(specie, length, name, age) {
    this.specie = specie;
    this.length = length;
    this.name = name;
    this.age = age;

}

function Zoo() {
    this.animales = [];
    this.addAnimal = function(animal) {
        this.animales.push(animal);
    };
}
var animales = new Zoo();
var animal1 = new Animal("dog", "30 cm", "Rex", 2);
animales.addAnimal(animal1);
console.log('animales :', animales);