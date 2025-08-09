function outerFunction() {
	let functionCounter = 1
	console.log('This is the outer function',  functionCounter)
	function innnerFunction() {
		console.log('This is the inner function', functionCounter)
	}
    innnerFunction(functionCounter)
}

outerFunction()
