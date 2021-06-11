const me = {
    name: "Greg",
    age: 32,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        console.log("I sepnd", amount);
        return amount;
    },
};
console.log(me, spend(20), speak("bla bla bla"));
import { Invoice } from "./classes/invoice.js";
const invOne = new Invoice("greg", "work on website", 250);
const invTwo = new Invoice("adri", "work on platform", 450);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
invoices.forEach((inv) => {
    console.log(inv.client, inv.amount, inv.format());
});
const form = document.querySelector(".new-item-form");
//inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
