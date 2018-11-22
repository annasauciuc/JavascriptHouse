// Plantear clases necesarias para tener un editor de formularios.
// - Tener una clase que configurandola tengamos la estructura del formulario.
// - Crear clases necesarias para que haya un FORM (render) y un tipo INPUT(render).
// - Clase INPUT generica ( name y value ) y luego extends para diferentes tipos (modificar render).
// - Métodos para poder imprimir un input sea cual sea y obtener su valor.
// - Solo las clases, plantearlas. Funciones vacias, solo parametros de entrada y salida.


// class Element {
//     constructor(name, buildYear) {
//         this.name = name;
//         this.buildYear = buildYear;
//     }
// }


// class Park extends Element {
//     constructor(name, buildYear, area, numTrees) {
//         super(name, buildYear);
//         this.area = area; //km2
//         this.numTrees = numTrees;
//     }

//     treeDensity() {
//         const density = this.numTrees / this.area;
//         console.log(`${this.name} has a tree density of ${density} trees per square km.`);
//     }
// }


// class Street extends Element {
//     constructor(name, buildYear, length, size = 3) {
//         super(name, buildYear);
//         this.length = length;
//         this.size = size;
//     }

//     classifyStreet() {
//         const classification = new Map();
//         classification.set(1, 'tiny');
//         classification.set(2, 'small');
//         classification.set(3, 'normal');
//         classification.set(4, 'big');
//         classification.set(5, 'huge');
//         console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
//     }
// }


// const allParks = [new Park('Green Park', 1987, 0.2, 215),
//     new Park('National Park', 1894, 2.9, 3541),
//     new Park('Oak Park', 1953, 0.4, 949)
// ];

// const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4),
//     new Street('Evergreen Street', 2008, 2.7, 2),
//     new Street('4th Street', 2015, 0.8),
//     new Street('Sunset Boulevard', 1982, 2.5, 5)
// ];


// function calc(arr) {

//     const sum = arr.reduce((prev, cur, index) => prev + cur, 0);

//     return [sum, sum / arr.length];

// }


// function reportParks(p) {

//     console.log('-----PARKS REPORT-----');

//     // Density
//     p.forEach(el => el.treeDensity());

//     // Average age
//     const ages = p.map(el => new Date().getFullYear() - el.buildYear);
//     const [totalAge, avgAge] = calc(ages);
//     console.log(`Our ${p.length} parks have an average of ${avgAge} years.`);

//     // Which park has more than 1000 trees
//     const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
//     console.log(`${p[i].name} has more than 1000 trees.`);

// }


// function reportStreets(s) {

//     console.log('-----STREETS REPORT-----');

//     //Total and average length of the town's streets
//     const [totalLength, avgLength] = calc(s.map(el => el.length));
//     console.log(`Our ${s.length} streets have a total length of ${totalLength} km, with an average of ${avgLength} km.`);

//     // CLassify sizes
//     s.forEach(el => el.classifyStreet());
// }

// reportParks(allParks);
// reportStreets(allStreets);














class Form {
    constructor(method, id, className) {
        this.method = method;
        this.id = id;
        this.className = className;
    }
    render() {
        return `<form method="${this.method} id="${this.id} class="${this.className}"></form>`
    }
}


class Input {
    constructor(type, name, id, className, value) {
        this.type = type;
        this.name = name;
        this.id = id;
        this.className = className;
        this.value = value;
    }
    render() {
        return `<input type="${this.type} name="${this.name} id="${this.id}" class="${this.className}" value="${this.value}"/>`
    }
    getValue() {
        return this.value;
    }
    setValue(value) {
        this.value = value;
    }
}
class ConfigForm {
    constructor() {
        this.inputs = [];
        this.form = new Form();
    }
    renderForm() {
        let formRender = form.render();
        this.inputs.forEach(input => {
            formRender.append(input.render());
        });
    }
    setForm(form) {
        this.form = form;
    }
    addInput(input) {
        this.inputs.push(input);
    }

}

let input1 = new Input();
input1.setValue("hola");
console.log("input value", input1.getValue());
input1.setValue("adios");
console.log("input value", input1.getValue());
let input2 = new Input(type = "radio");
console.log('input1.render() :', input1.render());

let configForm = new ConfigForm();
configForm.addInput(input1);
console.log('configForm :', configForm);