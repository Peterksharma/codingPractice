//this is the global scope
let gs = 'Global scope'

function outerFunction() {
    //this is the lexical scope
    let functionCounter = 1
    return function innerFunction() {
        functionCounter ++
        console.log('The function counter value is: ', functionCounter)
        
    }
}

const fireCounter = outerFunction()
fireCounter()
fireCounter()