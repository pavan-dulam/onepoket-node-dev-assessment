const fs = require('fs');

/**
 * Asynchronously reads a text file and counts the number of words in it.
 * @param {string} filename - The name of the text file.
 * @param {function} callback - A callback function to handle the result.
 */
function countWordsInFile(filename, callback) {
    // Read the file asynchronously
    fs.readFile(filename, 'utf8', (err, data) => {
        if (err) {
            // Handle file read error
            return callback(err);
        }

        // Remove extra whitespaces and split the text into words
        const words = data.trim().split(/\s+/);

        // Count the number of words
        const wordCount = words.length;

        // Invoke the callback with the word count
        callback(null, wordCount);
    });
}

// File name
const filename = 'data.txt';

// Call the function to count words in the file
countWordsInFile(filename, (err, wordCount) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log(`Total number of words in "${filename}":`, wordCount);
    }
});
