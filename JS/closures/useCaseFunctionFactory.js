function currencyConverter(rate) {
    return function(amount) {
        return amount * rate
    }
}
const usdtoInr = currencyConverter(.83)
const usdtoPeso = currencyConverter(20)

console.log('Converted USD to INR:', usdtoInr(100))
console.log(usdtoPeso(100))