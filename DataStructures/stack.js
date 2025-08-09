let stack = []

function addToStack() {
	for (let i = 0; i< 10; i++) {
		stack.push(i)
		console.log('Pushed to the Stack:', i)
	}
	console.log(stack)

	let poppedElement = stack.pop()
	console.log('This is the Popped Element: ', poppedElement)
}

addToStack()



class Stack