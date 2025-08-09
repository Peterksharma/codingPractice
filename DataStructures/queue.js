 class Queue{
		constructor() {
			this.items = []
		}
 		isEmpty() {
			return this.items.length === 0
		}
	 	enqueue(elements) {
			this.items.push(elements)
		}
		dequeue() {
			return this.isEmpty() ? "Queue is Empty" : this.items.shift()
		}
	 	peek() {
			return this.isEmpty() ? "Queue is Empty" : this.items[0]
		}
		size() {
			return this.items.length
		}
		print() {
			console.log(this.items.join("->"))
		}
 }

const newQueue = new Queue()

newQueue.enqueue(1)
newQueue.enqueue(2)
newQueue.enqueue(3)
newQueue.enqueue(4)
newQueue.enqueue(5)

newQueue.print()

console.log(newQueue.dequeue());
console.log(newQueue.peek()); 
console.log(newQueue.size());
