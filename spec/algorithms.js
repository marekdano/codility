let path = require('path');
let expect = require('chai').expect;

//var algorithms = require(path.join(__dirname, '..', './testSample'));
let equi = require(path.join(__dirname, '../Demo/Equi'));
let binaryGap = require(path.join(__dirname, '../1.Iterations/BinaryGap'));
let oddOccurencesInArray = require(path.join(__dirname, '../2.Arrays/oddOccurencesInArray'));
let cyclicRotation = require(path.join(__dirname, '../2.Arrays/cyclicRotation'));
let frogJmp = require(path.join(__dirname, '../3.TimeComplexity/frogJmp'));
let permMissingElem = require(path.join(__dirname, '../3.TimeComplexity/permMissingElem'));
let tapeEquilibrium = require(path.join(__dirname, '../3.TimeComplexity/tapeEquilibrium'));
let missingInteger = require(path.join(__dirname, '../4.CountingElements/MissingInteger'));
let permCheck = require(path.join(__dirname, '../4.CountingElements/PermCheck'));
let frogRiverOne = require(path.join(__dirname, '../4.CountingElements/FrogRiverOne'));
let countDivs = require(path.join(__dirname, '../5.PrefixSums/CountDivs'));
let passingCars = require(path.join(__dirname, '../5.PrefixSums/PassingCars'));
let distinct = require(path.join(__dirname, '../6.Sorting/Distinct'));
let maxProductOfThree = require(path.join(__dirname, '../6.Sorting/maxProductOfThree'));
let triangle = require(path.join(__dirname, '../6.Sorting/triangle'));

// describe('algorithms()', function () {
//   'use strict';

//   it('exists', function () {
//     expect(algorithms).to.be.a('function');

//   });

//   it('does something', function () {
//     expect(true).to.equal(true);
//   });
// });

describe('equi function', () => {
  it('exists', () => {
    expect(equi).to.be.a('function');
  });

  it('equi([-1,3,-4,5,1,-6,2,1], 8)', () => {
    expect(equi([-1,3,-4,5,1,-6,2,1]))
      .to
      .satisfy((num) => { 
        return num === 1 || num === 3 || num === 7;
    });
  });
});


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

  it('binaryGap(1376796946)', () => {
    expect(binaryGap(1376796946)).to.equal(5);
  });

  it('binaryGap(74901729)', () => {
    expect(binaryGap(74901729)).to.equal(4);
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

describe('missingInteger function', () => {
  it('exists', () => {
    expect(missingInteger).to.be.a('function');
  });

  it('missingInteger([1,3,6,4,1,2])', () => {
    expect(missingInteger([1,3,6,4,1,2])).to.equal(5);
  });
});

describe('permCheck function', () => {
  it('exists', () => {
    expect(permCheck).to.be.a('function');
  });

  it('permCheck([4,1,3,2])', () => {
    expect(permCheck([4,1,3,2])).to.equal(1);
  });

  it('permCheck([4,1,3])', () => {
    expect(permCheck([4,1,3])).to.equal(0);
  })
});

describe('frogRiverOne function', () => {
  it('exists', () => {
    expect(frogRiverOne).to.be.a('function');
  });

  it('frogRiverOne([1,3,1,4,2,3,5,4], 5)', () => {
    expect(frogRiverOne([1,3,1,4,2,3,5,4], 5)).to.equal(6);
  });

  it('frogRiverOne([4,2,3,5,4], 5)', () => {
    expect(frogRiverOne([4,1,3], 5)).to.equal(-1);
  });
});

describe('countDivs function', () => {
  it('exists', () => {
    expect(countDivs).to.be.a('function');
  });

  it('countDivs(6,11,2)', () => {
    expect(countDivs(6,11,2)).to.equal(3);
  });
});

describe('passingCars function', () => {
  it('exists', () => {
    expect(passingCars).to.be.a('function');
  });

  it('passingCars([0,1,0,1,1])', () => {
    expect(passingCars([0,1,0,1,1])).to.equal(5);
  });
});

describe('distinct function', () => {
  it('exists', () => {
    expect(distinct).to.be.a('function');
  });

  it('distinct([2,1,1,2,3,1])', () => {
    expect(distinct([2,1,1,2,3,1])).to.equal(3);
  });

  it('distinct([2,1,2,3,3])', () => {
    expect(distinct([2,1,2,3,3])).to.equal(3);
  });

  it('distinct([2,1,2,3,3,4])', () => {
    expect(distinct([2,1,2,3,3,4])).to.equal(4);
  });

  it('distinct([2,1,2,1,3,3,4,4])', () => {
    expect(distinct([2,1,2,1,3,3,4,4])).to.equal(4);
  });
});

describe('maxProductOfThree function', () => {
  it('exists', () => {
    expect(maxProductOfThree).to.be.a('function');
  });

  it('maxProductOfThree([-3,1,2,-2,5,6])', () => {
    expect(maxProductOfThree([-3,1,2,-2,5,6])).to.equal(60);
  });

  it('maxProductOfThree([-10, -2, -4])', () => {
    expect(maxProductOfThree([-10, -2, -4])).to.equal(-80);
  });
});

describe('triangle function', () => {
  it('exists', () => {
    expect(triangle).to.be.a('function');
  });

  it('triangle([10,2,5,1,8,20])', () => {
    expect(triangle([10,2,5,1,8,20])).to.equal(1);
  });

  it('triangle([10,5,50,100])', () => {
    expect(triangle([10,5,50,100])).to.equal(0);
  });
});