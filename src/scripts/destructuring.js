"use strict";

// у нас есть массив с именем и фамилией
// let arr = ["Ilya", "Kantor"];

// деструктурирующее присваивание
// записывает firstName = arr[0]
// и surname = arr[1]
// let [firstName, surname] = arr;

// alert(firstName); // Ilya
// alert(surname);  // Kantor


// // второй элемент не нужен
// let [firstName, , title,,age] = ["Julius", "Caesar", "Consul", "of the Roman Republic" , 220];
// console.log(firstName);
// console.log(title);
// console.log(age);


function calcValues(a,b){
    return[
        a+b,
        a-b,
        a*b,
        a/b,
    ]
};

const [sum,sub,,del] = calcValues(10,3);
console.log(sum,sub,del);
//console.log(calcVelues(10,7));