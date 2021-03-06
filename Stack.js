class Stack {
    constructor() {
        this.items = []
    }
    // your code here...
}

// Test Code
const myStack = new Stack()
console.log('\nâď¸ Test #1: Is stack empty on initialization?')
if(myStack.isEmpty()) {
    console.log('âď¸ Test Passes: isEmpty returns true')
} else {
    console.log('đŤ Test Fails: isEmpty does not return true')
}

console.log('\nâď¸ Test #2: Are stack items in correct order after pushing multiple items?')
console.log('Expecting to see: [A, B, C]')
myStack.push('A')
myStack.push('B')
myStack.push('C')
if(myStack.items[0] === 'A' && myStack.items[1] === 'B' && myStack.items[2] === 'C') {
    console.log('âď¸ Test Passes: Items are in correct order')
} else {
    console.log('đŤ Test Fails: Items are not in correct order')
}

console.log('\nâď¸ Test #3: Is stack not empty after push? isEmpty() should return false.')
if(myStack.isEmpty() === false) {
    console.log('âď¸ Test Passes: isEmpty returns false')
} else {
    console.log('đŤ Test Fails: isEmpty does not return false')
}

console.log('\nâď¸ Test #4: Does pop return the top item from the stack?')
let item = myStack.pop()
if(item === 'C' && myStack.items.length === 2) {
    console.log('âď¸ Test Passes: C was removed')
} else {
    console.log('đŤ Test Fails: either C was not removed, or the items array did not change')
}

console.log('\nâď¸ Test #5: Does peek return the top item from the stack without removing it?')
let anotherItem = myStack.peek()
if(anotherItem === 'B' && myStack.items.length === 2) {
    console.log('âď¸ Test Passes: B was returned but not removed')
} else {
    console.log('đŤ Test Fails: either B was removed or not returned')
}