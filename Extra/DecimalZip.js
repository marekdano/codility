// Decimal Zip

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