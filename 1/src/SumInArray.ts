export const sumInArray = (array: Array<number>, k: number): boolean => {
    if(array.length < 2) false;
    let pivot = 0;
    while ( pivot < array.length) {
        for(let i = pivot + 1; i < array.length; i++){
            if(array[pivot] + array[i] === k) return true;
        }
        pivot++;
    }
    return false;
}