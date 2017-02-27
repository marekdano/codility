let path = require('path');
let expect = require('chai').expect;

//var algorithms = require(path.join(__dirname, '..', './testSample'));
let binaryGap = require(path.join(__dirname, '../Iterations/BinaryGap'));
let oddOccurencesInArray = require(path.join(__dirname, '../Arrays/oddOccurencesInArray'));
let cyclicRotation = require(path.join(__dirname, '../Arrays/cyclicRotation'));
let frogJmp = require(path.join(__dirname, '../TimeComplexity/frogJmp'));
let permMissingElem = require(path.join(__dirname, '../TimeComplexity/permMissingElem'));
let tapeEquilibrium = require(path.join(__dirname, '../TimeComplexity/tapeEquilibrium'));

// 
// describe('algorithms()', function () {
//   'use strict';

//   it('exists', function () {
//     expect(algorithms).to.be.a('function');

//   });

//   it('does something', function () {
//     expect(true).to.equal(true);
//   });
// });



describe('binaryGap function', () => {
  it('exists', () => {
    expect(binaryGap).to.be.a('function');
  });

  it('binaryGap(10000)', () => {
    expect(binaryGap(10000)).to.equal(3);
  });

  it('binaryGap(544)', () => {
    expect(binaryGap(544)).to.equal(3);
  });

  it('binaryGap(545)', () => {
    expect(binaryGap(545)).to.equal(4);
  });
});

describe('oddOccurencesInArray function', () => {
  it('exists', () => {
    expect(oddOccurencesInArray).to.be.a('function');
  });

  it('oddOccurencesInArray([9,3,9,3,9,7,9])', () => {
    expect(oddOccurencesInArray([9,3,9,3,9,7,9])).to.equal(7);
  }); 
});

describe('cyclicRotation function', () => {
  it('exists', () => {
    expect(cyclicRotation).to.be.a('function');
  });

  it('cyclicRotation([3, 8, 9, 7, 6], 3)', () => {
    expect(cyclicRotation([3,8,9,7,6], 3)).to.eql([9,7,6,3,8]);
  });

  it('cyclicRotation([3, 8, 9, 7, 6], 99)', () => {
    expect(cyclicRotation([3,8,9,7,6], 99)).to.eql([8,9,7,6,3]);
  });

});

describe('frogJmp function', () => {
  it('exists', () => {
    expect(frogJmp).to.be.a('function');
  });

  it('frogJmp(10, 85, 30)', () => {
    expect(frogJmp(10, 85, 30)).to.equal(3);
  });

  it('frogJmp(10, 10000, 100)', () => {
    expect(frogJmp(10, 10000, 100)).to.equal(100);
  });
});

describe('permMissingElem function', () => {
  it('exists', () => {
    expect(permMissingElem).to.be.a('function');
  });

  it('permMissingElem([2, 3, 1, 5], 5)', () => {
    expect(permMissingElem([2, 3, 1, 5], 5)).to.equal(4);
  });

  it('permMissingElem([2,3,1,4,5,7,8,9,10], 10)', () => {
    expect(permMissingElem([2,3,1,4,5,7,8,9,10], 10)).to.equal(6);
  });
});


describe('tapeEquilibrium function', () => {
  it('exists', () => {
    expect(tapeEquilibrium).to.be.a('function');
  });

  it('tapeEquilibrium([3,1,2,4,3], 5)', () => {
    expect(tapeEquilibrium([3,1,2,4,3], 5)).to.equal(1);
  });
});