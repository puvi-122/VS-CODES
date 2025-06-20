const basketball = 2000;     
const tshirt = 1500;         
const toaster = 1899;        
const shipping = 499;        

const productTotal = basketball + tshirt + toaster; 
const totalBeforeTax = productTotal + shipping; 
const tax = Math.round(totalBeforeTax * 0.10); 
const orderTotal = totalBeforeTax + tax; 
function centsToDollars(cents) {
    return (cents / 100).toFixed(2);
}
console.log("Amazon Order Summary:");
console.log("Product Total: $" + centsToDollars(productTotal));
console.log("Shipping: $" + centsToDollars(shipping));
console.log("Total Before Tax: $" + centsToDollars(totalBeforeTax));
console.log("Tax (10%): $" + centsToDollars(tax));
console.log("Order Total: $" + centsToDollars(orderTotal));