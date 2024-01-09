// ecmascript 6
// ecmascript 13-2024

//ec5
const p = ['a', 'b', 'c', 'd']
console.log(p[1]);

//length ---- 4 от 1
// index ---- 3 от 0 lentgh - 1 = index
const m = [1,2,3,4]
// ec 5
// 4
const lastNumber = m[m.length - 1]
console.log(lastNumber);
//ec8
// если -1 то выхолить последний знак +1 с начала
const lastNum = m.at(-1)
console.log(lastNum);

//es6
// const [   , b , ycu, ddd ] = a
// console.log(b);

// оператор (+, - , / , * , && , || , ? , ! , = , == , ===)
// == and === сравнение 
//es6 (...)
// ... SPREAD
const a = [1,2,3]
const b = [4,5,6]
const c = a.concat(b)
console.log(c);
const c2 = [...a,...b, 7 , 8]
console.log(c2);

// es 6 includes () - в нутри хранится 

const car = ['honda fit', 'bmw', 'mersedes', 'kia']
const bmw = car.filter(el => el.toLowerCase().includes('m'))
console.log(bmw);
// ABC -> abc .toLowerCase()
// abc -> ABC  .toUpperCase

//es8
// flat() 
//deeArr вложений массив
const deepArr = [[1,2[11,22]], [3,4[33,44]], [5,6[55,66]]]
console.log(deepArr.flat(Infinity));
const iphone = {
    model: "ipone 15 pro",
    pzu: 6 ,
    storage: 256,
    price: 1000,
    owner: {
        name: " ayatyllo"
    }
}
console.log(iphone.model);
console.log(iphone.owner.name);

//
const { model, owner } = iphone

console.log(model);
console.log(owner.name);

function findElement(selector) {
    const el = document.querySelector(selector)
    return[el, el.innerText, el.className]
}
const [body] = findElement("body")
const [btn, btnText, claSS] = findElement("button")
console.log(body);
console.log(btn, btnText, claSS);