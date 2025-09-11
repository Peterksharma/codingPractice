class Elevator {
    constructor(currentFloor = 1, capacity = 9, targetFloor = null) {
        this.currentFloor = currentFloor
        this.capacity = capacity
        this.targetFloor = targetFloor
        this.direction = 'idle'
        this.passengers = []
        this.door = 'closed'
    }
    isMoving() {
        if (this.door !== 'closed') {
            throw new Error('The elevator wont move with open doors') 
        } else if (this.door === 'closed' && this.currentFloor < this.targetFloor) {
            this.direction = 'up'
            return this.direction
        } else if (this.door === 'closed' && this.currentFloor > this.targetFloor) {
            this.direction = 'down'
            return this.direction
        }
        return idle
    }
    addPassenger(passenger) {
        if (this.passengers.length < this.capacity) {
            this.passengers.push(passenger)
            return  true
        } else {
            console.log('Elevator is full')
            return false
        }
    }
}

let elevator1 = new Elevator()

elevator1.targetFloor = 2

function addingPeople() {
for (let i = 0; i < 10; i++) {
    elevator1.addPassenger(1)
    console.log(elevator1.passengers)
}
}

addingPeople()
