let newObject = {
  name: "Martin Luthor",
  age: 21,
};
console.log(newObject.name);
console.log(newObject.age);

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

let person = {
  name: "John Doe",
  age: 25,
};
let newDetails = {
  ...person,
  role: "developer",
  company: "ABC Pvt Ltd",
  isMarried: false,
  salary: 2.5,
};

console.log(newDetails);
