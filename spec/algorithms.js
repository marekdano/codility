let path = require('path');
let expect = require('chai').expect;

let ListNode = require(path.join(__dirname, '../Extra/shared/ListNode'));
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
let brackets = require(path.join(__dirname, '../7.StacksAndQueues/brackets'));
let nesting = require(path.join(__dirname, '../7.StacksAndQueues/nesting'));
let dominator = require(path.join(__dirname, '../8.Leader/dominator'));
let countFactors = require(path.join(__dirname, '../10.PrimeAndCompositeNumbers/CountFactors'));
let checkSingleSwap = require(path.join(__dirname, '../Extra/CheckSingleSwap'));
let wholeSquaresInInterval = require(path.join(__dirname, '../Extra/WholeSquaresInInterval'));
let singleNumber = require(path.join(__dirname, '../Extra/SingleNumInArrayOfDoubles')); 
let reverseList = require(path.join(__dirname, '../Extra/ReverseList')); 

//let interviewCakesTestCases = require(path.join(__dirname, './interviewCakesTestCases'));

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

describe('brackets function', () => {
  it('exists', () => {
    expect(brackets).to.be.a('function');
  });

  it('brackets("{[()()]}")', () => {
    expect(brackets("{[()()]}")).to.equal(1);
  });

  it('brackets("([)()]")', () => {
    expect(brackets("([)()]")).to.equal(0);
  });

  it('brackets("())")', () => {
    expect(brackets("())")).to.equal(0);
  });
});

describe('nesting function', () => {
  it('exists', () => {
    expect(nesting).to.be.a('function');
  });

  it('nesting("(()(())())")', () => {
    expect(nesting("(()(())())")).to.equal(1);
  }); 

  it('nesting("())")', () => {
    expect(nesting("())")).to.equal(0);
  }); 
});

describe('dominator function', () => {
  it('exists', () => {
    expect(dominator).to.be.a('function');
  });

  it('dominator([3,4,3,2,3,-1,3,3])', () => {
    expect(dominator([3,4,3,2,3,-1,3,3]))
      .to
      .satisfy((num) => { 
        return num === 0 || num === 2 || num === 4 || num === 6 || num === 7;
    });
  });
});

describe('countFactors function', () => {
  it('exists', () => {
    expect(countFactors).to.be.a('function');
  });

  it('countFactors(24)', () => {
    expect(countFactors(24)).to.equal(8);
  });
});

describe('checkSingleSwap function', () => {
  it('exists', () => {
    expect(checkSingleSwap).to.be.a('function');
  });

  it('checkSingleSwap([1,2])', () => {
    expect(checkSingleSwap([1,2])).to.equal(true);
  });

  it('checkSingleSwap([1,3,5])', () => {
    expect(checkSingleSwap([1,3,5])).to.equal(true);
  });

  it('checkSingleSwap([1,5,3])', () => {
    expect(checkSingleSwap([1,5,3])).to.equal(true);
  });

  it('checkSingleSwap([1,5,3,3,7])', () => {
    expect(checkSingleSwap([1,5,3,3,7])).to.equal(true);
  });

  it('checkSingleSwap([1,2,6,3,4,5])', () => {
    expect(checkSingleSwap([1,2,6,3,4,5])).to.equal(false);
  });

  it('checkSingleSwap([1,9,6,3])', () => {
    expect(checkSingleSwap([1,9,6,3])).to.equal(true);
  });

  it('checkSingleSwap([1,3,6,3,5,5,3,7,7])', () => {
    expect(checkSingleSwap([1,3,6,3,5,5,3,7,7])).to.equal(true);
  });

  it('checkSingleSwap([1,4,5,6,7,2])', () => {
    expect(checkSingleSwap([1,4,5,6,7,2])).to.equal(false);
  });

  it('checkSingleSwap([1,2,3,4,5,6,7,8,9,10,11,2,45,56,67,78,89,90,123,124,1245566778])', () => {
    expect(checkSingleSwap([1,2,3,4,5,6,7,8,9,10,11,2,45,56,67,78,89,90,123,124,1245566778])).to.equal(false);
  });
});

describe('wholeSquaresInInterval function', () => {
  it('exists', () => {
    expect(wholeSquaresInInterval).to.be.a('function');
  });

  it('wholeSquaresInInterval(4, 17)', () => {
    expect(wholeSquaresInInterval(4, 17)).to.equal(3);
  });

  it('wholeSquaresInInterval(-240, 17)', () => {
    expect(wholeSquaresInInterval(-240, 17)).to.equal(14);
  });

  it('wholeSquaresInInterval(-240, 350)', () => {
    expect(wholeSquaresInInterval(-240, 350)).to.equal(17);
  });

  it('wholeSquaresInInterval(-2147483648, 2147483648)', () => {
    expect(wholeSquaresInInterval(-2147483648, 2147483648)).to.equal(46339);
  });
});

describe('singleNumber function', () => {
  it('exists', () => {
    expect(singleNumber).to.be.a('function');
  });

  it('singleNumber([2,1,2])', () => {
    expect(singleNumber([2,1,2])).to.equal(1);
  });

  it('singleNumber([2,1,2,1])', () => {
    expect(singleNumber([2,1,2,1])).to.equal(0);
  });

  it('singleNumber([2,1,2,1,4])', () => {
    expect(singleNumber([2,1,2,1,4])).to.equal(4);
  });
});

describe('reverseList', () => {
  describe(' - Iteratively function', () => {
    it('exists', () => {
      expect(reverseList.reverseListIteratively).to.be.a('function');
    });

    it('should reverse linked list iterativly', () => {
      let head = new ListNode(1);
      let b = new ListNode(2);
      let c = new ListNode(3);
      let d = new ListNode(4);
      let e = new ListNode(5);

      head.next = b;
      b.next = c;
      c.next = d;
      d.next = e;

      const result = reverseList.reverseListIteratively(head);
      expect(result.value).to.equal(5);
      expect(result.next.next.value).to.equal(3);
      expect(result.next.next.next.next.value).to.equal(1);
    });
  });
});

