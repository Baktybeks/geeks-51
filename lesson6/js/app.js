console.log('Hello lesson6')

// var
// let
// const

// let customer = 'John';
// let customerName = 'Bakyt';
// let customer_name = 'Kuban';
// let $ = "12"
// let $num = "42"
// let _num = "45"
// let num123123 = '234'
// let 45 =
// let 234sdfgsdfg =
// let var
// let age = 18
// console.log('hello js', customerName, 'age', age)
// console.log('name' + ' ' + customerName + ' ' + 'age' + ' ' + age)
// console.log(`name = ${customerName}, rtbdrtb srthdrt age=${age}`)
// console.log('"ОАО" Северэлектро')
// console.log("'ОАО' Северэлектро")
// console.log("\"ОАО\" Северэлектро")
// console.log('d:\\imag\\nurman\\avatar.jpg')
// let number = 123
// let pi = 3.14
// console.log(pi)
// console.log(number)
// let a = 11
// let b = '11'
// console.log('a=', a, 'b=', b)
// console.log(a + b, '+')
// console.log(a - b, '-')
// console.log(a * b, '*')
// console.log(a / b, '/')
// console.log(a % b, '%')
// console.log(a ** b, '**')
// console.log(654654654 + '654654654654')
// console.log('654654654' + 654654654654)
// console.log(typeof customer);
// console.log(typeof a);
// let number222 = '4654275'
// console.log(typeof Number(number222));
// console.log(654654 + 'laskdjhf')
// console.log(654654 * 'laskdjhf')
// console.log(654654 * 'laskdjhf')
// console.log(a > b, '>')
// console.log(a < b, '<')
// console.log(a >= b, '>=')
// console.log(a <= b, '<=')
// console.log(a == b, '==')
// console.log(a === b, '===')
// console.log(a !== b, '!==')
// console.log(a != b, '!=')
// console.log(true && false, 'и &&')
// console.log(true && true, 'и &&')
// console.log(true && true && false, 'и &&')
// console.log(true || false || true, 'или ||')
// console.log(!true)
// console.log((true && false) || true)
// console.log(!(true && false) && true)
// console.log(15 > 10 && 'da')
// console.log(15 < 10 && 'da')
// let netu
// console.log(netu)
// let netu2 = null
// console.log(netu2)
//
// console.log(netu ?? '-')
// console.log(netu2 ?? '-')
//
// let y = 1
// console.log(y++)
// console.log(y++)
// console.log(y--)
// console.log(y)
// let x = 1
// console.log(++x)
// console.log(--x)
// console.log(x)
//
// console.log(typeof 321321)
// console.log(typeof '321321')
// console.log(typeof null)
// console.log(typeof undefined)
// console.log(typeof true)
// console.log(typeof true)
// console.log(typeof Infinity)
// let a = 10009
// let b = 50

// let age = Number(prompt('сколько вам лет'))

// if (age > 1000) {
//     console.log('бессмертный')
// } else if (age > 18) {
//     console.log('совершеннолетний')
// } else {
//     console.log('не совершеннолетний')
// }


// console.log(color)
//
// console.log(20<10 ? 'da' : 'net')
// console.log(20<10 && 'da')
// console.log(undefined ?? 'undefined')
//
// let color = prompt('цвет')
// switch (color) {
//     case 'red': console.log('red'); break
//     case 'green': console.log('green'); break
//     case 'yellow': console.log('yellow'); break
//     default: console.error('error')
// }

let array = [1, 'Bakyt', true, undefined, 'Kuba', null]
console.log(array)
console.log(array[1])
console.log(array[0])
console.log(array.length - 1)
console.log(array[array.length - 1])
array[3] = 'Fined'
// array[10]='Fined'
console.log(array)
console.log(typeof array[8])
// [1,2,3,4,5,6,7]
let pop = array.pop()
let shift = array.shift()
let push = array.push(6)
let unshift = array.unshift(6)
    [6, 2, 3, 4, 5, 6, 6]

console.log(array)

console.log(array.indexOf('erfe'))
console.log(array[array.indexOf('Bakyt')])

console.log(array.indexOf('Fined'))

console.log(array.includes('b'))

let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(array2)

console.log(array2.slice(0, 5))
console.log(array2.slice(6, 9))
console.log(array2.slice(-3))
console.log(array2.reverse().slice(0, 5))
let array3 = [15, 321, 51, 4, 5, 5, 6, 84, 854, 651, 321, 6541, 684, 654]
// console.log(array3.sort())
// console.log(array3.sort((a,b)=>a-b))
// console.log(array3.slice(0,5).reverse().join('; '))
let array123 = [1, 2, 3]
let array456 = [4, 5, 6]
let array65 = [array123, array456]
console.log(array65)
let array66 = [...array123, ...array456]
console.log(array66)
let [a, , c, d, ...rest] = array3
console.log(a, 'a')
// console.log(b, 'b')
console.log(c, 'c')
console.log(d, 'd')
console.log(rest, 'rest')

// for (let i = 0; i <= 10; i++) {
//     console.log(i)
// }
// for (let i = 0; i < array3.length; i++) {
//     console.log(array3[i])
// }


// let ii = array3.length
// while (ii >= 0) {
//     console.log(ii)
//     ii--
// }

// for (let element of array3) {
//     console.log(element, 'element')
//     if (element%2 ===0 ) console.log(element,'element%2 ===0')
// }
console.log(array3)
for (let i = 0; i < array3.length; i++) {
    if (i%2 ===0 ) console.log(array3[i],'element%2 ===0')
}

let str = 'кыргызстан';
let str2 = 'КЫРГЫЗстан';
console.log(str)
console.log(str[2])
console.log(str.toUpperCase())
console.log(str2.toLowerCase())
console.log(str2[0].toUpperCase()+str2.slice(1).toLowerCase())

for (let array65Key in array66) {
    console.log(array65Key,'array65Key')
}

let factorial = [1,2,3,4,5]
let sum = 0
for (let element of factorial) {
    sum += element
    console.log(sum)
}

console.log(sum,'sum')

let ff = 1
for (let element of factorial) {
    ff *= element
    console.log(ff)
}

console.log(ff,'ff')

let n =54;
let fact = 1;
for (let i = 1 ; i <= n; i++) {
    fact *=i
}

console.log(fact)


