console.log('hello lesson7')

let name = 'Bakyt';
let age = 20;
let city = 'Bishkek';

let person = {
    name: 'Bakyt',
    age: 20,
    city: 'Bishkek',
    isStudent: true,
    isAdmin: true,
    cars: ['audi', 'mers', 'bmw'],
    passport: {
        date: '2018-02-02',
        who: 'mkkk20111',
        id: '17651464',
    }
    // 123123: qwqwe,
}
console.log(person)

let fullPerson = {
    ...person,
    surname: 'Sariev',
}

fullPerson.family = 'Sarievs    ';
fullPerson.name = "Kub";
console.log(fullPerson)
// let person1 = {
//     name: 'Kuban',
//     age: 18,
//     city: 'Bishkek',
//     'bank name': 'Bakai'
// }
//
// console.log(person.passport.id);
// console.log(person1);
// console.log(person1['bank name']);
// console.log(person["123123"]);
// console.log(person1.name);
// console.log(person1.city);
// console.log(person.name);
//
// let students = [
//     {
//         name: 'Kuban',
//         age: 18,
//         city: 'Bishkek',
//     },
//     {
//         name: 'Bakyt',
//         age: 18,
//         city: 'Bishkek',
//     },
//     {
//         name: 'Altyn',
//         age: 18,
//         city: 'Bishkek',
//     }
// ]
//
// for (let student of students) {
//     console.log(student.name);
// }
//
// for (let key in person) {
//     console.log(key, ' key')
// }
//
// for (let key in person) {
//     console.log(person[key], ' value')
//     if (Array.isArray(person[key])) {
//         for (let i = 0; i < person[key].length; i++) {
//             console.log(person[key][i], 'person[key]');
//         }
//     }
// }
//
// let num1 = +prompt('number1');
// if (isNaN(num1) ) {
//     alert('Ошибка')
//     throw new Error('остановка')
// }
// let num2 = +prompt('number2');
// if (isNaN(num2) ) {
//     alert('Ошибка')
//     throw new Error('остановка')
// }
// let operator = prompt('operator');
// // if (operator !== "+" || operator !== "-" || operator !== "*" || operator !== "/" ) {
// //     alert('Ошибка')
// //     throw new Error('остановка')
// // }
// if (!(operator === "+" || operator === "-" || operator === "*" || operator === "/" )) {
//     alert('Ошибка')
//     throw new Error('остановка')
// }
//
// switch (operator) {
//     case '+':
//         console.log(num1 + num2)
//         break;
//     case '-':
//         console.log(num1 - num2)
//         break;
//     case '*':
//         console.log(num1 * num2)
//         break;
//     case '/':
//         console.log(num1 / num2)
//         break;
//     default:
//         console.log('error')
// }
//

// let color = prompt('цвет')
// switch (color) {
//     case 'red': console.log('red'); break
//     case 'green': console.log('green'); break
//     case 'yellow': console.log('yellow'); break
//     default: console.error('error')
// }

let color = prompt('цвет')

let colors = {
    'red': 'стой',
    'green': 'проходи',
    'yellow': 'готовься',
}

if (colors[color]) {
    console.log(colors[color])
} else {
    console.log('error')
}