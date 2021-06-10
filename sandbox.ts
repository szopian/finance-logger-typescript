console.log("tsc sandbox.ts");
console.log("tsc sandbox.ts -w");

// const circ = (diameter: number) => {
//   return diameter * Math.PI;
// };

// console.log(circ(1));

// let letters = ["a", "b", "c"];
// letters.push(1);
// letters.push("d");
// console.log(letters);

// let numbers = [1, 2, 3];
// let numters = [1, "a", 2, "b"];

// let letters: string;
// let numbers: number;
// let isLogggedIn: boolean;

// numbers = 40;
// isLogggedIn = true;

// console.log(numbers, isLogggedIn);

// let mixed: (string | number)[] = [];
// mixed.push(10);
// mixed.push("greg");
// console.log(mixed);

let person1: object;
person1 = { name: "greg", age: 32 };
console.log(person1);

let person2: {
  name: string;
  age: number;
};

person2 = { name: "adri", age: 21 };
console.log(person2);
