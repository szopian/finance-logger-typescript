"use strict";
// const anchor = document.querySelector("a")!;
// console.log(anchor.href);
// const form =document.querySelector('form')!;
var form = document.querySelector(".new-item-form");
// console.log(form.children);
//inputs
var type = document.querySelector("#type");
var toform = document.querySelector("#toform");
var details = document.querySelector("#details");
var amount = document.querySelector("#amount");
form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(type.value, toform.value, details.value, amount.value);
});
