function calculateTax(amount){
  let taxValue = amount * 0.1;
  return taxValue  
}


// console.log(calculateTax(500))


function convertToUpperCase(text){
    return text.toUpperCase();
}
let name ="victor kipngeno";
let capitalLetters =convertToUpperCase(name);

// console.log(capitalLetters)
 

function findMaximum(num1, num2){
    if (num1 >num2){
    return num1
    }
    else{
        return num2
    }
    
}
// console.log(findMaximum(47, 34))
// console.log(findMaximum(22, 67))




function isPalindrome(word){ 
    let reversed = word.split("").reverse().join("");
    return word === reversed


}
// console.log(isPalindrome("tenet"))
// console.log(isPalindrome("victory"))


function calculateDiscountedPrice(originalPrice, discountPercentage){
    let netPrice = originalPrice - (originalPrice * (discountPercentage / 100));
    return netPrice
}


// console.log(calculateDiscountedPrice(100, 20))


// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };