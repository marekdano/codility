/**
 * You wrote a trendy new messaging app, MeshMessage, to get around flaky cell phone coverage.
 * 
 * Instead of routing texts through cell towers, your app sends messages via the phones of nearby users, 
 * passing each message along from one phone to the next until it reaches the intended recipient. 
 * (Don't worry—the messages are encrypted while they're in transit.)
 * 
 * Some friends have been using your service, and they're complaining that it takes a long time 
 * for messages to get delivered. After some preliminary debugging, you suspect messages might not be taking 
 * the most direct route from the sender to the recipient.
 * 
 * Given information about active users on the network, find the shortest route for a message 
 * from one user (the sender) to another (the recipient). Return an array of users that make up this route.
 * 
 * There might be a few shortest delivery routes, all with the same length. For now, let's just return any shortest route.
 * 
 * Your network information takes the form of an object where keys are usernames and values are arrays of other users nearby:
 *
 *  var network = {
 *    'Min'     : ['William', 'Jayden', 'Omar'],
 *    'William' : ['Min', 'Noam'],
 *    'Jayden'  : ['Min', 'Amelia', 'Ren', 'Noam'],
 *    'Ren'     : ['Jayden', 'Omar'],
 *    'Amelia'  : ['Jayden', 'Adam', 'Miguel'],
 *    'Adam'    : ['Amelia', 'Miguel', 'Sofia', 'Lucas'],
 *    'Miguel'  : ['Amelia', 'Adam', 'Liam', 'Nathan'],
 *    'Noam'    : ['Nathan', 'Jayden', 'William'],
 *    'Omar'    : ['Ren', 'Min', 'Scott'],
 *    ...
 *  };
 * 
 * For the network above, a message from Jayden to Adam should have this route:
 * 
 *  ['Jayden', 'Amelia', 'Adam']
 */

// Complexity time 0(N + M), space O(N)


// Assume we have an efficient queue implementation, Queue()
// with enqueue and dequeue methods and a size property

const reconstructPath = (howWeReachedNodes, startNode, endNode) => {

	let reversedShortestPath = [];

	// start from the end of the path and work backwards
	const currentNode = endNode;

	while (currentNode !== null) {
			reversedShortestPath.push(currentNode);
			currentNode = howWeReachedNodes[currentNode];
	}

	// reverse our path to get the right order
	return reversedShortestPath.reverse();  // no longer reversed
}

function bfsGetPath(graph, startNode, endNode) {

	if (!graph.hasOwnProperty(startNode)) {
			throw new Error('Start node not in graph!');
	}
	if (!graph.hasOwnProperty(endNode)) {
			throw new Error('End node not in graph!');
	}

	const nodesToVisit = new Queue();
	nodesToVisit.enqueue(startNode);

	// keep track of how we got to each node
	// we'll use this to reconstruct the shortest path at the end
	// we'll ALSO use this to keep track of which nodes we've
	// already visited
	const howWeReachedNodes = {};
	howWeReachedNodes[startNode] = null;

	while (nodesToVisit.size > 0) {
			const currentNode = nodesToVisit.dequeue();

			// stop when we reach the end node
			if (currentNode === endNode) {
					return reconstructPath(howWeReachedNodes, startNode, endNode);
			}

			graph[currentNode].forEach(function(neighbor) {
					if (!howWeReachedNodes.hasOwnProperty(neighbor)) {
							nodesToVisit.enqueue(neighbor);
							howWeReachedNodes[neighbor] = currentNode;
					}
			});
	}

	// if we get here, then we never found the end node
	// so there's NO path from startNode to endNode
	return null;
}

module.exports = reconstructPath;

// BFS algorithm
// // Assume we have an efficient queue implementation, Queue()
// // with enqueue and dequeue methods and a size property
// function bfs(graph, startNode, endNode) {

// 	var nodesToVisit = new Queue();
// 	nodesToVisit.enqueue(startNode);

// 	// keep track of what nodes we've already seen
// 	// so we don't process them twice
// 	var nodesAlreadySeen = new Set([startNode]);

// 	while (nodesToVisit.size > 0) {
// 			var currentNode = nodesToVisit.dequeue();

// 			// stop when we reach the end node
// 			if (currentNode === endNode) {
// 					// found it!
// 					break;
// 			}

// 			graph[currentNode].forEach(function(neighbor) {
// 					if (!nodesAlreadySeen.has(neighbor)) {
// 							nodesAlreadySeen.add(neighbor);
// 							nodesToVisit.enqueue(neighbor);
// 					}
// 			});
// 	}
// }