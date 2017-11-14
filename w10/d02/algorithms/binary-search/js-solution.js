function binarySearch(searchArray, searchElement) {
  // declare variables for high, low, and mid points of the array
  var min = 0;
  var max = searchArray.length - 1;
  var mid;
  var currentElement;

  // while the low is less than the high
  while (min <= max) {
    // set mid equal to halfway between the low and the high
    mid = Math.floor((min + max) / 2);
    // grab the value of the mid element
    currentElement = searchArray[mid];
    // target is to the right
    if (currentElement < searchElement) {
      // cut out the left half of the collection
      min = mid + 1;
    }
    // target is to the left
    else if (currentElement > searchElement) {
      // cut out the right half of the collection
      max = mid - 1;
    }
    else {
      // target has been found as currentElement is searchElement
      return mid;
    }
  }
  // not found
  return -1;
}
