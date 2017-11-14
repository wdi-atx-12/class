// a simple, iterative bubble sort function
function bubbleSort(arr){
  for(j=0; j<arr.length-1; j++)
    for(i=0; i<arr.length-j; i++){
      var inspected = arr[i];
      var comparison = arr[i+1];
      if (inspected > comparison){
        arr.splice(i,2,comparison, inspected);
      }
    }
  return arr;
};

// a recursive bubble sort function
// It's recursive because the function calls itself.
function recursiveBubbleSort(arr){
  if(arr.length === 1){
    return arr;
  }
  for(i=0; i<arr.length; i++){
    var inspected = arr[i];
    var comparison = arr[i+1];
    if (inspected > comparison){
      arr.splice(i,2,comparison, inspected);
    }
  }
  var unsorted = arr.slice(0, arr.length-1);
  var fullSort = recursiveBubbleSort(unsorted);
  fullSort.push(arr[arr.length-1]);
  return fullSort
}

var arrayToBeSorted = [6,2,1,12,71,21,22,12231,-2,0,12312312312];
console.log(bubbleSort(arrayToBeSorted));
console.log('recursive', recursiveBubbleSort(arrayToBeSorted));
