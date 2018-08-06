function Queue() {
	this.data = [];
}

Queue.prototype.enqueue = function(record) {
	this.data.unshift(record);
}

Queue.prototype.dequeue = function() {
	return this.data.pop();
}

Queue.prototype.first = function() {
  return this.data[0];
}
Queue.prototype.last = function() {
  return this.data[this.data.length - 1];
}
Queue.prototype.size = function() {
  return this.data.length;
}

module.exports = Queue;