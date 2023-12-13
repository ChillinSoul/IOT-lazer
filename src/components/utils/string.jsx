/**
 * Compares two strings and returns a value indicating their relative order.
 * @param {string} string_a - The first string to compare.
 * @param {string} string_b - The second string to compare.
 * @returns {number} - Returns -1 if string_a is less than string_b, 1 if string_a is greater than string_b or if they are equal.
 */
export const greater = (string_a, string_b) => {
    while (string_a.length && string_b.length) {
        if (string_a[0] < string_b[0]) {
            return -1;
        } else if (string_a[0] > string_b[0]) {
            return 1;
        } else {
            string_a = string_a.slice(1);
            string_b = string_b.slice(1);
        }
    }
    if (string_b.length) {
        return -1;
    } else {
        return 1;
    }
}
/**
 * Sorts an array in ascending order using the quicksort algorithm.
 * 
 * @param {Array} array - The array to be sorted.
 * @returns {Array} - The sorted array.
 */
export const sort = (array) => {
    if (array.length < 2) {
        return array;
    } else {
        const pivot = array[0];
        const less = array.slice(1).filter((element) => {
            return greater(element, pivot) === -1;
        });
        const greater = array.slice(1).filter((element) => {
            return greater(element, pivot) !== -1;
        });
        return [...sort(less), pivot, ...sort(greater)];
    }
}
    