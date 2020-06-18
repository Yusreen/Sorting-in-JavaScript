function selectionSort(array) {
  //Get the index of the minimum element
  for (let i = 0; i < array.length - 1; i++) {
    let minIndex = i
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }
    //Swap the elements
    let temp = array[i]
    array[i] = array[minIndex]
    array[minIndex] = temp
  }
  return array
}
arraySelection = [98, 100, 34, 2, 45]
console.log('This is the inital array: ' + arraySelection)
console.log(
  'This is the array after selection sort: ' + selectionSort(arraySelection)
)
