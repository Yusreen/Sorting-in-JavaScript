function insertionSort(array)
{
  for(let i=0;i<array.length;i++)
  {
    for(j=i;j>0;j--)
    {
      if(array[j]<array[j-1])
      {
        //swap(array,array[j],array[j-1]);
         var temp = array[j];
         array[j] = array[j-1];
         array[j-1] = temp;
      }
    }
  }
  return array;
}
items=[29,87,32,12,6];
console.log("This is the array before sorting : "+items);
console.log("This is the array after sorting: "+insertionSort(items));