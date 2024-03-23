// Call by value
function changePrimitive(num) {
    num = num + 1;
    console.log("Inside changePrimitive: " + num);
  }
  
  let num = 10;
  changePrimitive(num);
  console.log("Outside changePrimitive: " + num);
  
  // Call by reference
  function changeObject(obj) {
    obj.count = obj.count + 1;
    console.log("Inside changeObject: " + obj.count);  
  }
  
  let obj = {
    "count": 10
}
  changeObject(obj);
  console.log("Outside changeObject: " + obj.count);