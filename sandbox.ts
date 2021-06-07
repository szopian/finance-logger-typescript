console.log("tsc sandbox.ts");
console.log("tsc sandbox.ts -w");

const circ = (diameter: number) => {
  return diameter * Math.PI;
};

console.log(circ(1));
