module.exports = function reverse (n) {
   let arrayDigits = Array.from(String(Math.abs(n)), Number);
    arrayDigits.reverse();
    return arrayDigits.join("");
}