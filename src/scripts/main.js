"use strict";

//Простой обработчик событий 
/*
 btn.onclick = function(){
    alert("TEST button");
}
 */


let i = 0;
const eventTarget = (e) => {
  // console.log(e.target);
  i++;
  if (i == 1) {
    btn.removeEventListener("click", eventTarget);
  }
};

//Кнопки

const btn = document.querySelector("button"),
btn1 = document.getElementById("btn1");

btn.addEventListener("click", eventTarget);

const link = document.querySelector("a");

link.addEventListener("click", function (event) {
  event.preventDefault(); //отменят стандартное событие
  //console.log(event.target );// создали новое событие для тега "а"
});

//Удаляет кнопку

btn.addEventListener('click',(e) =>{
    e.target.remove(); 
})


 //Показывает информацию об элементе при наведении

btn1.addEventListener('mouseenter',(e) =>{
   console.log(e);
})



//XMLHttpRequest

const inputRub = document.querySelector("#rub"),
  inputUSDT = document.querySelector("#usdt");

inputRub.addEventListener("input", () => {
  const request = new XMLHttpRequest();

  //request.open(method,url,async,login,pass);

  request.open("GET", "/src/scripts/curent1.json");
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  //   request.addEventListener('readystatechange',()=>{
  //     if(request.readyState === 4 && request.status === 200){
  //       console.log(request.response);
  //       const data = JSON.parse(request.response);
  //       inputUSDT.value = (+inputRub.value / data.curent.usdt).toFixed(2);

  //     }else{
  //         inputUSDT.value = "Что-то не так"
  //     }
  //   });
  //
  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUSDT.value = (+inputRub.value / data.curent.usdt).toFixed(2);
    } else {
      inputUSDT.value = "Что-то не так";
    }
  });
});

//Promise
//Простой пример 
// console.log("Request data");

// setTimeout(()=>{
//   console.log("Render data....");

//   const product ={
//     name:'TV',
//     price:2000
//   };

//   setTimeout(() =>{
//     product.status = 'order';
//     console.log(product);
//   },2000);
// },2000);
console.log("Request data");
//Если код внутри константы req, будет исправен то сработает функция reject, если нет то сработает функция reject
const req = new Promise(function(resolve,reject){

    setTimeout(()=>{
      console.log("Render data....");

      const product ={
        name:'TV',
        price:2000
      };

      resolve(product);
    },2000);
});

req.then((product)=>{
  console.log("Data received");
  setTimeout(() =>{
    product.status = 'order';
    console.log(product);
  },2000);
});


