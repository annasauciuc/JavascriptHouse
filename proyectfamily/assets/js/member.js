function Member(name, lastname, age, rol, sex, hijos) {
  this.name = name;
  this.lastname = lastname;
  this.age = age;
  this.rol = rol;
  this.sex = sex;
  this.hijos = [];
  this.completeName = function() {
    return name + " " + lastname;
  };
  this.addHijos = function(hijo) {
    this.hijos.push(hijo);
  };
}
