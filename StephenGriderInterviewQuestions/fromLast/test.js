const fromLast = require("./index");
const L = require("./linkedlist");
const List = L.LinkedList;
const Node = L.Node;

test("fromLast is a function", () => {
  expect(typeof fromLast).toEqual("function");
});

test("fromLast returns the node 3rd elements from the end", () => {
  const l = new List();

  l.insertLast("a");
  l.insertLast("b");
  l.insertLast("c");
  l.insertLast("d");
  l.insertLast("e");

  expect(fromLast(l, 3).data).toEqual("b");
});

test("fromLast returns the node 4th elements from the end", () => {
  const l = new List();

  l.insertLast("a");
  l.insertLast("b");
  l.insertLast("c");
  l.insertLast("d");
  l.insertLast("e");

  expect(fromLast(l, 4).data).toEqual("a");
});

test("fromLast returns the node zero elements from the end", () => {
  const l = new List();

  l.insertLast("a");
  l.insertLast("b");
  l.insertLast("c");
  l.insertLast("d");
  l.insertLast("e");

  expect(fromLast(l, 0).data).toEqual("e");
});
