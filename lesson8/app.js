console.log('hello lesson8')

function greet() {
    return console.log('hello lesson8')
}

greet2('Bakyt', 65465415)

// const a = 'Bakyt'
function greet2(name, age = '85') {

    // console.log(a)
    return console.log(`name=${name} age=${age}`);
}

// console.log(a)

greet2('Kuban', 15)
greet2('Altyn', 15)
greet2('Altyn')

// function greet2(name, age) {
//     return console.log(`name=${name} age=${age}`);
// }

// greet2('Bakyt',15)

const b = '8888'
const greet3 = function (name) {
    console.log(b)
    return `Hello, ${name}`;
}
console.log(b, '654654')

const greet4 = (name) => {
    return `Hello, ${name}`;
}
const greet5 = name => `Hello, ${name}`
const greet6 = (name) => `Hello, ${name}`


console.log(greet3('Bakyt888'));
console.log(greet4('Bakyt444'));
console.log(greet5('Bakyt555'));

const sum = (a, b) => a + b;
console.log(sum(1, 2));

const kvadrat = (x, y) => {
    return x ** y;
}

console.log(kvadrat(2, 10));

const arr = [1, 2, 3, 4, 5];

const avarege = () => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

console.log(avarege());

(function greet10(name, age) {
    console.log(`name=${name} age=${age}`);
})('Kutman', 25)

const relative = {
    name: 'Kutman',
    children: [
        {
            name: 'Kutman1',
            children: [
                {
                    name: 'Kutman2',
                    children: [
                        {
                            name: 'Kutman3',
                            children: [
                                {
                                    name: 'Kutman4',
                                    children: [
                                        {
                                            name: 'Kutman5',
                                            children: [
                                                {
                                                    name: 'Kutman4',
                                                    children: [
                                                        {
                                                            name: 'Kutman4',
                                                            children: [
                                                                {
                                                                    name: 'Kutman4',
                                                                    children: []
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

for (const child of relative.children) {
    console.log(child.name);
    for (child1 of child.children) {
        console.log(child1.name);
        for (child2 of child1.children) {
            console.log(child2.name);
            for (child3 of child2.children) {
                console.log(child3.name);
                for (child4 of child3.children) {
                    console.log(child4.name);
                }
            }
        }
    }
}

const showChild = (obj) => {
    obj.children.forEach(child => {
        console.log(`father = ${obj.name}=>child = ${child.name}`);
        showChild(child);
    })
}

showChild(relative);

function input (callback) {
    const name = 'Бактыбек'
    callback(name)
}



input(function (name) {
    console.log(name)
})

function calculate (a,b, callback) {
    return callback(a, b);
}

const summ = function (a, b) {
    return a + b;
}

const result = calculate(5,3, summ);

console.log(result)