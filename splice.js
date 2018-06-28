//The .splice Method

var items = [2,4,6,8,10,12,14,16]

items.splice(4) // [10,12,14,16]
//removes everything after index 4 from the items array 
//and returns the items that have been removed [10,12,14,16]

console.log(items) // [2,4,6,8]




var items = [1,3,5,7,9,11,13,15,17,19]

items.splice(4,3) // At index 4, remove 3 items