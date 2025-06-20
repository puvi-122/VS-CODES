// console.log("Hello");
let cartQuantity = Number(localStorage.getItem("cartQuantity"));
if(!cartQuantity){
    localStorage.setItem("cartQuantity",0);
    cartQuantity=0;
}
const displayButton = document.getElementById("display-button");
const plusOneButton = document.getElementById("plus-one");
const plusTwoButton = document.getElementById("plus-two");
const plusThreeButton = document.getElementById("plus-three");
const resetButton = document.getElementById("reset")

displayButton.addEventListener("click",() =>{
    displayQuantity();
});
plusOneButton.addEventListener("click",() =>{
    updateQuantity(1);
    displayQuantity();
});
plusTwoButton.addEventListener("click",() =>{
    updateQuantity(2);
    displayQuantity();
});
plusThreeButton.addEventListener("click",() =>{
    updateQuantity(3);
    displayQuantity();
});
resetButton.addEventListener("click",() =>{
    resetCart();
    displayQuantity();
});

function updateQuantity(value){
    cartQuantity=cartQuantity+1;
    localStorage.setItem("cartQuantity",cartQuantity);
}
function displayQuantity(){
    console.log(`cart: ${cartQuantity}`);
}
function resetCart(){
    cartQuantity = 0;
    localStorage.setItem("cartQuantity", cartQuantity);
    console.log("cart is reset");
}