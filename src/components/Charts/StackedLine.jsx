import React from 'react'

const StackedLine = () => {
  /*
 * Complete the 'findNumber' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY arr
 *  2. INTEGER k
 */

function findNumber(arr, k) {
  // Write your code here
  let result = arr.find((item) => item === k);
  if (result) {
    return 'YES';
  } else {
    return 'NO';
  }

}
/*
 * Complete the 'oddNumbers' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER l
 *  2. INTEGER r
 */

function oddNumbers(l, r) {
  // Write your code here
  let result = [];
  for (let i = l; i <= r; i++) {
    if (i % 2 !== 0) {
      result.push(i);
    }
  }
  return result;
  

}
const myArray =[1,2,3,4,4];
console.log(myArray.splice(1));

  return (
    <div>StackedLine</div>
  )
}

export default StackedLine