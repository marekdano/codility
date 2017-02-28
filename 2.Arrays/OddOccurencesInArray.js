
var oddOcurenciesInArray = (A) => {
  // 1. solution
  // return A.reduce((previous, current)=>{
  //   return previous^current
  // },false)

  
  // 2. solution 
  // create oddElements object to store the element
  // if element is not in oddElements add it as 
  // oddElement[elemInOddElements] = true
  // if the element is in the oddElements remove it
  let oddElements = {}, elemInOddElements;
  A.forEach(el => {
    if(oddElements[el]) {
      delete oddElements[el];
    } else {
      oddElements[el] = true;
    }
  })
  // return the first element at the moment
  // this can be modified later
  return +Object.keys(oddElements)[0];
}

module.exports = oddOcurenciesInArray;