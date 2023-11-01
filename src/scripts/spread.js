"use strict";

const cityRussia = ['Москва', 'Казань', 'Санкт-Петербург','Новосибирск'];
const cityEuropa = ['Берлин', 'Париж','Прага'];
const cityObjectEuropa = {
    Берлин:20,
    Париж:5,
    Прага:3,
};

const cityObjectRussia = {
    Москва:20,
    Казань:5,
    СанктПетербург:3,
    Новосибирск:1.5,
};


console.log("Spread");
//Spread 
// console.log('cityRussia:');
// console.log(...cityRussia);

// console.log('newArray:');
// const newArray = [...cityRussia, ...cityEuropa];
// console.log(newArray);

// const arrObjects = [{...cityObjectRussia,...cityObjectEuropa}];
// console.log(...arrObjects);

///Practice 
//console.log(Math.max(22,100,2,57,12,15,11,10,1,0));

// const num = [22,100,2,57,12,15,11,10,1,0]
//не сработает
//console.log(Math.max(num));

//сработает
// console.log(Math.max(...num));


// const divs = document.querySelectorAll('div');
// console.log(divs);// получили nodeList
// const nods = [...divs];
// console.log(divs);// получили массив divs

console.log('Rest');
//Rest

// пример с spread
function sum(a,b){
    return a + b
}
const numbers = [1,2,3,4,5];
console.log(sum(...numbers));//ответ 3 - функция взяла 1 и 2 переменную

// пример с rest
function sum2(a,b, ...rest){
    return a + b + rest.reduce((a,i)=>a + i ,0)
}
const numbers2 = [10,20,30,40,50];
console.log(sum2(...numbers2));//ответ 150 

