const coffee = 5;
const bagel = 3;
const soup = 9;
const cost = coffee + (2 * bagel) + soup;


console.log(`Cost of food: $${cost}`);


const tax = cost * 0.1;

console.log(`Tax (10%): $${tax}`);

const totalCost = cost + tax;
console.log(`Total cost: $${totalCost}`);