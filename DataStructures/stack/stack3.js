class Stack{
    constructor() {
        this.items = []
    }
    isEmpty() {
        if (this.items.length === 0) {
            return true
        } else {
            return false
        }
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        if(this.isEmpty() === true) {
            throw new Error('You cant pop off an empty stack')
        } else {
            return this.items.pop()
        }
    }
}