class Person {
    constructor(id, firstname, lastname, age, nacionality, address, email, phone, country) {
        this.id = id;
        this.country = country;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.nacionality = nacionality;
        this.address = address;
        this.email = email;
        this.phone = phone;
        this.rols = [];

    }
    addRol(rol) {
        this.rols.push(rol)
    }

}