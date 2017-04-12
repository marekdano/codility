// Decimal Zip

/**
 * Task
 * 
 * The decimal zip of two non-negative integers A and B is
 * an integer C whose decimal representation is created 
 * from the decimal representations of A and B as follows:
 * 
 *   the first (i.e. the most significant) digit of C is the first digit of A;
 *   the second digit of C is the first digit of B;
 *   the third digit C is the second digit of A;
 *   the fourth digit of C is the second digit of B;
 *   etc.
 * 
 * If one of the integers A and B runs of digits, the remaining digit 
 * of the other integer are appended to the result. The decimal 
 * representation of 0 is assumed to be "0".
 * 
 * For example, the decimal zip of 12 and 56 is 1526. The decimal zip 
 * of 56 and 12 is 5162. The decimal zip of 12345 and 678 is 16273845.
 * The decimal zip of 123 and 67890 is 16273890. The decimal zip 
 * of 1234 and 0 is 10234.
 * 
 * Write function that, given two non-negative integers A and B, 
 * returns their decimal zip. The function should return -1 if the result 
 * exceeds 100,000,000.
 * 
 * For example, given A = 12345 and B = 678 the function should return 
 * 16273845, as explain above.
 * 
 * Assume that A and B are integers within the range [0..100,000,000].
 * 
 * In your solution, focus on correctness. The performance of your solution
 * will not be the focus of the assessment.
 * 
 */

function solutionOfDecimalZip(A, B) {
    const numA = A.toString().split("");
    const numB = B.toString().split("");
    const lenNumA = numA.length;
    const lenNumB = numB.length;
    let result = "";

    const longestArrayOfNumbers = lenNumA > lenNumB ? lenNumA : lenNumB;

    for(let i = 0; i < longestArrayOfNumbers; i++) {
        if(i > lenNumA - 1 ) {
            result += numB[i];
        } else if(i > lenNumB - 1) {
            result += numA[i];
        } else {
            result += numA[i] + numB[i];
        }
    }

    // const resultInNumber = +result;

    // if(resultInNumber > 1e9) {
    //     return -1;
    // } else {
    //     return resultInNumber;
    // }

    // or 
    return +result > 1e9 ? -1 : +result;
}