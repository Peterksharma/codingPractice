	function outerFunction() {
		let counter = 1
		return function innerFunction(){
            counter ++
            console.log(counter)
		}
	}
	
    const functionCall = outerFunction()
    functionCall()
    functionCall()