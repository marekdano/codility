const S = require("./index");
const bubbleSort = S.bubbleSort;
const selectionSort = S.selectionSort;
const merge = S.merge;

function getArray() {
  return [100, -40, 500, -124, 0, 21, 7];
}

function getSortedArray() {
  return [-124, -40, 0, 7, 21, 100, 500];
}

describe("Bubble sort", () => {
  test("sorts an array", () => {
    expect(bubbleSort(getArray())).toEqual(getSortedArray());
  });
});

describe("Selection sort", () => {
  test("sorts an array", () => {
    expect(selectionSort(getArray())).toEqual(getSortedArray());
  });
});

describe("Merge sort", () => {
  test(" can merge two sorted arrays when second array is longer than first one", () => {
    const left = [1, 10];
    const right = [2, 8, 12];

    expect(merge(left, right)).toEqual([1, 2, 8, 10, 12]);
  });

  test("can merge two sorted arrays when first array is longer than second one", () => {
    const left2 = [1, 10, 11, 13];
    const right2 = [-2, 8, 12];

    expect(merge(left2, right2)).toEqual([-2, 1, 8, 10, 11, 12, 13]);
  });

  test("sorts an array", () => {
    expect(mergeSort(getArray())).toEqual(getSortedArray());
  });
});
