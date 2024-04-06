/**
 * Calculates the sum of all numbers in the given array.
 * @param {number[]} numbers - An array of integers.
 * @returns {number} The sum of all numbers.
 */
function calculateSum(numbers) {
    // Ensure numbers array is provided and is not empty
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Input must be a non-empty array of integers.');
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        // Ensure each element is a valid number
        if (!Number.isInteger(numbers[i])) {
            throw new Error('All elements of the array must be integers.');
        }

        // Add the number to the sum
        sum += numbers[i];
    }

    return sum;
}

// Example usage:
const numbers = [14, 29, 30, 45, 52];
try {
    const sum = calculateSum(numbers);
    console.log('Sum of numbers:', sum);
} catch (error) {
    console.error('Error:', error.message);
}
