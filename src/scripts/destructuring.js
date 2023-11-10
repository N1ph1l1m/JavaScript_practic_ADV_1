"use strict";

let Name = 'Nick',
Age  = 22,
Gender = 'male',
Status  =  'student'
//структуризация обьекта
let user={
    userName : Name,
    userAge : Age,
    userGender : Gender,
    userStatus  :  Status,
};
// деструктуризация обьекта 
let {userAge, userStatus } = user;

console.log('userAge = \t' + userAge + '\n User status : \t' + userStatus );


function createParamForm (placeHolder = "Input text...." , type = "text", btnText = 'Apply'){
    const fomr = document.createElement('form');
    const input = document.createElement('input');
    const btn = document.createElement('button');
}