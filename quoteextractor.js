// convertToCSV.js
'use strict';

const fs = require('fs');
const path = require('path');

// Import the array from hindiquotes.js
const quotes = require('./hindiquotes');

// CSV header
const header = 'type,quote';

// Convert each quote object to a CSV row
const rows = quotes.map(entry => {
    const type = `"${entry.type.replace(/"/g, '""')}"`;
    const quote = `"${entry.quote.replace(/"/g, '""')}"`;
    return `${type},${quote}`;
});

// Combine header and rows
const csvContent = [header, ...rows].join('\n');

// Define output file path
const outputPath = path.join(__dirname, 'hindiquotes.csv');

// Write CSV content to file
fs.writeFileSync(outputPath, csvContent, 'utf8');

console.log(` CSV file has been created at: ${outputPath}`);
