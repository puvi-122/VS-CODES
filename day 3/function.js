function hello() {
  console.log("Hello Js");
}
hello();

function add(a, b) {
  console.log(a + b);
}
add(5, 10);
function displayAnotherFuntion(add) {
  add(8, 2);
}
displayAnotherFuntion(add);

let varFunc = add;
varFunc(1, 4);

let newFuncVar = function () {
  console.log("variable Function");
};

newFuncVar();

const arrowFuncVar = () => {
  console.log("Arrow Functions");
};

arrowFuncVar();

// Filter, Map, Reduce
let nums = [1, 2, 3, 4, 5];

let evens = nums.filter((n) => {
  //nums.filter((n)=> return (n%2 === 0));
  return n % 2 === 0;
});

console.log(evens);

//Normal for loop method
// let newList = []
// for (let i = 0; i < nums.length; i++) {
//     if (nums[i] % 2 == 0) {
//         newList.push(nums[i]);
//     }
// } console.log(newList);

//Map Method
console.log("Using Map method");
let squares = nums.map((n) => {
  return n * n;
});
console.log(squares);

//Reduce method
console.log("Using Reduce Method");
let newsum = nums.reduce((sum, n) => {
  return sum + n;
}, (sum = 0));
console.log(newsum);
