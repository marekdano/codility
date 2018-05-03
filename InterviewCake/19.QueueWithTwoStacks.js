/**
 * Implement a queue with 2 stacks. Your queue should have an enqueue
 * and a dequeue method and it should be "first in first out" (FIFO).
 *
 * Optimize for the time cost of mm calls on your queue.
 * These can be any mix of enqueue and dequeue calls.
 *
 * Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.
 */

function QueueWithTwoStacks() {
  this.inStack = [];
  this.outStack = [];
}

QueueWithTwoStacks.prototype.enqueue = function(item) {
  this.inStack.push(item);
};

QueueWithTwoStacks.prototype.dequeue = function() {};

module.exports = QueueWithTwoStacks;
