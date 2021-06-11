//interface
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "Greg",
  age: 32,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I sepnd", amount);
    return amount;
  },
};

console.log(me, spend(20), speak("bla bla bla"));

import { Invoice } from "./classes/invoice.js";

const invOne = new Invoice("greg", "work on website", 250);
const invTwo = new Invoice("adri", "work on platform", 450);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;

//inputs
const type = document.querySelector("#type") as HTMLInputElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
