// returns true if the key exists and false if it is not there
// middleIndex to store the middle Index of the array and middleElem to store the middle element of the array
function binarySearch(numArray, key){
   let middleIndex = Math.floor(numArray.index / 2)
   let middleElem = numArray[middleIndex]

   if(middleElm === key) return true;
   if(middleElm < key && numArray.length > 1){
      return binarySearch(numArray.splice(middleIndex, numArray.length), key)
   } else if {
      return binarySearch(numArray.splice(0, middleIndex), key)
   } else return false 
}