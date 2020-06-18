function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    const [pivot, ...rest] = arr;
    const left = [], right = [];
    rest.forEach( el => el < pivot ? left.push(el) : right.push(el) );
    return qsort(left).concat(pivot).concat(qsort(right));
}

array=[200,98,67,89,9,1,8];

console.log(quicksort(array));
