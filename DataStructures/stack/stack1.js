class Stack{
	constructor() {
		this.items = []
		}
	
		isEmpty() {
			if (this.items.length === 0){
				return true
			} else {
				return false
			}
			
		}

		Queue(element) {
			this.items.push(element)
		}
		
		Dequeue(element) {
			this.items.pop(element)
		}

		Size(){
			this.items.length
		}

	}

let newStack = new Stack

function checkLength(newStack) {
	if (newStack.isEmpty() == true) {
		return console.log('Stack is empty')
	} else {
		return console.log('Stack is not empty')
	}
}

checkLength(newStack)

newStack.Queue(1)
newStack.Queue(2)
newStack.Queue(3)

console.log('This is the new stack', newStack)

newStack.Dequeue()

console.log('This is the new stack', newStack)
checkLength(newStack)