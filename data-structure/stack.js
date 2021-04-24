// Stack Data Structure
// Last In First Out => LIFO

class Stack {
    constructor() {
        this.stack = [];
    }
    add(item) {
        this.stack.push(item);
    }
    remove() {
        if (this.stack.length) {
            return this.stack.pop();
        }
    }
}

const guest = new Stack();
guest.add("Samiul")
guest.add("Hasan")
guest.add("Sheikh")
guest.add("Nobel")
console.log(guest.stack)
const speaker = guest.remove()
console.log(speaker)
console.log(guest.stack)