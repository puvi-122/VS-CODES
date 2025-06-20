let fruits = ["apple", "watermelon", "grapes"];
console.log("Original Array");
console.log(fruits);

fruits.push("kiwi");
console.log("Array after oush operation:");
console.log(fruits);

fruits.pop();
console.log("array after pop operation:");
console.log(fruits);

console.log("Accessing the 1st & last element:");
console.log(fruits[0]);
let size = fruits.length;
console.log(fruits[size - 1]);

console.log("Array after unshift operation:");
fruits.unshift("cherry");
console.log(fruits);

console.log("Array after shift operation");
fruits.shift();
console.log(fruits);

fruits.push("Orange");
fruits.push("Mango");
fruits.push("Banana");
console.log("Accessing an array using Loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
