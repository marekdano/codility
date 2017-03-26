
let checkSingleSwap = (A) => {
  let count = 0;
  const B = [...A]; 
  B.sort((a, b) => a - b);  
	   
  for(let i=0; i<A.length; i++) {
  	if(A[i] != B[i]) count++;
  }

  return (count > 2) ? false : true;
}

module.exports = checkSingleSwap;