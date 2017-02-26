var path = require('path');
var expect = require('chai').expect;

//var algorithms = require(path.join(__dirname, '..', './testSample'));
var binaryGap = require(path.join(__dirname, '../Iterations/BinaryGap'));
var oddOccurencesInArray = require(path.join(__dirname, '../Arrays/oddOccurencesInArray'));
var cyclicRotation = require(path.join(__dirname, '../Arrays/cyclicRotation'));


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
