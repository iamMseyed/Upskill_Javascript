/*
Memoization is a form of caching where the return value of a function is cached based on its parameters.
 If the parameter of that function is not changed, the cached version of the function is returned.
*/

//simple function:
function addTo256(num){
    return num + 256;
  }
  addTo256(20); // Returns 276
  addTo256(40); // Returns 296
  addTo256(20); // Returns 276

//memoziation type:

function memoizedData() {
  var memData = {};
  function store(num) { 
      if (num in memData) {
        console.log(`Already in obj, printing that: ${num}`);
        return memData[num];
      }
      else {
        console.log(`Adding ${num} to the object`)
        memData[num] = num ;
        return memData[num];
      }
  }
  return store;
}
  var memoizedFunc = memoizedData(); 
  //storing to a var keyword, as memoizedAddTo256() has a function with return inside 
  
  memoizedFunc(20); // Normal return
  memoizedFunc(20); // Cached return
  memoizedFunc(20); // Cached return
  memoizedFunc(30); // Cached return
  memoizedFunc("30"); // Cached return
  memoizedFunc(30); // Cached return