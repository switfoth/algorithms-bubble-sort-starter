function swap(array, idx1, idx2) {
  let temp = array[idx1];     // save a copy of the first value
  array[idx1] = array[idx2];  // overwrite the first value with the second value
  array[idx2] = temp;         // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort
function bubbleSort(array) {
  for (let i = 0; i < array.length ; i++){
    for (let j = 0; j < array.length ; j++){
      if (array[j] > array[j+1]){
        let temp=array[j];
        array[j] = array[j+1];
        array[j+1] = temp
      }
    }
  }
  return array
}


module.exports = {
  bubbleSort,
  swap
};
