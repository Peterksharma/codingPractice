class Stack {
    constructor() {
        this.items = []
    }
    
    isEmpty() {
        return this.items.length === 0
    }

    push(element){
        this.items.push(element)
    }

    pop() {
        if(this.isEmpty()) {
            throw new Error('Stack is empty, nothing to pop. ')
        }
        return this.items.pop()

    }

    peek() {
        if (this.isEmpty()) {
            return null
        }
        return this.items[this.items.length-1]
    }
    
    size() {
        return this.items.length
    }

    clear() {
        this.items = []
    }
}