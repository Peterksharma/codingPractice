function outerFunction() {
	let counter = 1
	return function innerFunction() {
		counter ++
		console.log(counter)
	}
}

const fireCounter = outerFunction()
fireCounter()
fireCounter()
fireCounter()
fireCounter()
fireCounter()