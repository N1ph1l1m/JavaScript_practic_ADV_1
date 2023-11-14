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

//метод и его использование  без структуризации
// function createParamForm (placeHolder = "Input text...." , type = "text", btnText = 'Apply'){
//     const form = document.createElement('form');
//     const input = document.createElement('input');
//     const btn = document.createElement('button');

//     input.placeholder = placeHolder;
//     input.type = type;

//     btn.textContent = btnText;

//     form.append(input,btn);
//     return form;
// }
// const form  = createParamForm();


// form.querySelector("input").style.color = "red";
// form.querySelector("input").addEventListener("input", function(){
//     console.log(form.querySelector("input").value);
// })


// document.body.append(form);


//метод с использованием   структуризации
function createParamForm (placeHolder = "Input text...." , type = "text", btnText = 'Apply'){
    const form = document.createElement('form');
    const input = document.createElement('input');
    const btn = document.createElement('button');

    input.placeholder = placeHolder;
    input.type = type;

    btn.textContent = btnText;

    form.append(input,btn);
    return {
        form:form,
        input:input,
        btn:btn,
    };
}
const form  = createParamForm()

form.input.style.color = "red";
form.input.addEventListener(form.input, function(){
    console.log(form.input.value);
})


document.body.append(form.form);


//createParamForm("Inp textt" , "text","Send");
