// let user = {
//     name: "John",
//     age: 30
// };
// for (let value of Object.values(user)) {
//     alert(value);
// }
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
// };

// function sumSalaries(salaries) {

//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }

//     return sum;
// }
// let sal = sumSalaries(100, 200, 300);
// console.log('sal :', sal);
function abbrevName(name) {
    var nam = name.split('+');
    return nam[0].charAt(0).toUpperCase() + '.' + nam[1].charAt(0).toUpperCase();
}


console.log('abbrevName(anamaria) :', abbrevName("ana+maria"));