/**
 * You want to be able to access the largest element in a stack.
 *
 * The Stack class is defined in the shared folder.
 *
 * Use your Stack class to implement a new class MaxStack with a method getMax()
 * that returns the largest element in the stack. getMax() should not remove the item.
 *
 * Your stacks will contain only integers.
 */

let Stack = require(path.join(__dirname, "./shared/Stack"));

function MaxStack() {
  this.stack = new Stack();
  this.maxesStack = new Stack();
}

// Add a new item to the top of our stack. If the item is greater
// than or equal to the last item in maxesStack, it's
// the new max! So we'll add it to maxesStack.
MaxStack.prototype.push = function(item) {
  this.stack.push(item);
};

// Remove and return the top item from our stack. If it equals
// the top item in maxesStack, they must have been pushed in together.
// So we'll pop it out of maxesStack too.
MaxStack.prototype.pop = function() {};

// The last item in maxesStack is the max item in our stack.
MaxStack.prototype.getMax = function() {
  return this.maxesStack.peek();
};

module.exports = MaxStack;
