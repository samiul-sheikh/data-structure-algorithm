// Selection Sort Algorithm / O(n^2)

const numbers = [10, 30, 22, -4, 99, 45, 88];
// [-4, 30, 22, 10, 99, 45, 88];
// [-4, 10, 22, 30, 99, 45, 88];
// [-4, 10, 22, 30, 45, 99, 88];
// [-4, 10, 22, 30, 45, 88, 99];

function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        const temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
    return array;
}

const sorted = selectionSort(numbers);
console.log(sorted);