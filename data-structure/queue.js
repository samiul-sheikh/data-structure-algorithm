// Queue Data Structure
// First In First Out => FIFO

class Queue {
    constructor() {
        this.queue = [];
    }
    enqueue(item) {
        this.queue.push(item);
    }
    dequeue() {
        if (this.queue.length) {
            return this.queue.shift();
        }
    }
}

const lovers = new Queue();
lovers.enqueue('Mafruha');
lovers.enqueue('Chaity');
lovers.enqueue('Sumaiya');
lovers.enqueue('Rikta');
console.log(lovers.queue);
const winner = lovers.dequeue();
console.log(winner);
console.log(lovers.queue);