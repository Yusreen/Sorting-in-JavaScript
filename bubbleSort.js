function swap(items, firstIndex, secondIndex)
{
    var temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}
function bubbleSort(array)
{
const items=array.slice();
    var len = items.length,
        i, j, stop;

    for (i=0; i < len; i++)
    {
        for (j=0, stop=len-i; j < stop; j++)
        {
            if (items[j] > items[j+1])
            {
                swap(items, j, j+1);
            }
        }
    }

    return items;
}
arr=[25,78,1,60,7,2];
console.log("This is the array before sorting :"+arr);
console.log("This is the array after bubble sort: "+bubbleSort(arr));