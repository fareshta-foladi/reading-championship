// Step 1: Create Competitors
const competitors = [
    {
        name: "Fareshta",
        books: ["Book A", "Book B", "Book C"],
        totalPages: [200, 150, 250],
        pagesRead: [180, 120, 200]
    },
    {
        name: "Radvin",
        books: ["Book X", "Book Y", "Book Z"],
        totalPages: [300, 200, 150],
        pagesRead: [300, 180, 150]
    },
    {
        name: "Sarah",
        books: ["Book M", "Book N", "Book O"],
        totalPages: [100, 200, 300],
        pagesRead: [90, 150, 250]
    },
    {
        name: "Hasib",
        books: ["Book P", "Book Q", "Book R"],
        totalPages: [250, 150, 100],
        pagesRead: [200, 100, 80]
    }
];

// Step 2: Functions

function calculateProgress(pagesRead, totalPages) {
    return (pagesRead / totalPages) * 100;
}

function calculateTotalPagesRead(pagesReadArray) {
    let total = 0;
    for (let i = 0; i < pagesReadArray.length; i++) {
        total += pagesReadArray[i];
    }
    return total;
}

function calculateCompletionRate(pagesReadArray, totalPagesArray) {
    let totalPercent = 0;
    for (let i = 0; i < pagesReadArray.length; i++) {
        totalPercent += calculateProgress(pagesReadArray[i], totalPagesArray[i]);
    }
    return totalPercent / pagesReadArray.length;
}

function awardPoints(totalPages, completionRate) {
    return totalPages + (completionRate * 2);
}

// Step 3: Loop Through Competitors
const scores = [];

for (let i = 0; i < competitors.length; i++) {
    const c = competitors[i];
    const totalPages = calculateTotalPagesRead(c.pagesRead);
    const completionRate = calculateCompletionRate(c.pagesRead, c.totalPages);
    const score = awardPoints(totalPages, completionRate);
    
    let title = "";
    if (totalPages >= 400) {
        title = "Reading Star 🪙";
    } else if (totalPages >= 250) {
        title = "Dedicated Reader 🪙";
    } else {
        title = "Rising Reader 🪙";
    }
    
    console.log(`${c.name}: ${totalPages} pages read, ${completionRate.toFixed(2)}% completion, Score: ${score.toFixed(2)} | ${title}`);
    
    scores.push({
        name: c.name,
        score: score
    });
}

// Step 4: Find Winner
let winner = scores[0];

for (let i = 1; i < scores.length; i++) {
    if (scores[i].score > winner.score) {
        winner = scores[i];
    }
}

console.log(`🏆 Champion: ${winner.name} with ${winner.score.toFixed(2)} points!`);