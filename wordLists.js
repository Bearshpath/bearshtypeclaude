// Word lists filtered for specific fingers and hands

// Common English words (using only lowercase letters)
const commonWords = [
    "the", "be", "to", "of", "and", "in", "that", "have", "it", "for",
    "not", "on", "with", "he", "as", "you", "do", "at", "this", "but",
    "his", "by", "from", "they", "we", "say", "her", "she", "or", "an",
    "will", "my", "one", "all", "would", "there", "their", "what", "so",
    "up", "out", "if", "about", "who", "get", "which", "go", "me", "when",
    "make", "can", "like", "time", "no", "just", "him", "know", "take",
    "people", "into", "year", "your", "good", "some", "could", "them",
    "see", "other", "than", "then", "now", "look", "only", "come", "its",
    "over", "think", "also", "back", "after", "use", "two", "how", "our",
    "work", "first", "well", "way", "even", "new", "want", "because", "any",
    "these", "give", "day", "most", "us"
];

// Filter words based on mode (hand or finger)
function getWordsByMode(mode) {
    if (!keyboardMap[mode]) return commonWords;
    
    return commonWords.filter(word => {
        // Check if all characters in the word belong to the selected mode
        return word.split('').every(char => keyboardMap[mode].includes(char));
    });
}

// Get a set of random words based on mode and desired length
function getRandomWords(mode, totalLength) {
    const words = getWordsByMode(mode);
    let result = [];
    let currentLength = 0;
    
    // Handle case where no words match the filter
    if (words.length === 0) {
        return generateText(mode, totalLength);
    }
    
    while (currentLength < totalLength) {
        const randomWord = words[Math.floor(Math.random() * words.length)];
        result.push(randomWord);
        currentLength += randomWord.length + 1; // +1 for space
    }
    
    return result.join(' ');
}

// Generate text for practice - either random characters or words depending on mode
function generatePracticeText(mode, length) {
    // For finger-specific modes, generate character sequences
    if (mode.includes('Pinky') || mode.includes('Ring') || 
        mode.includes('Middle') || mode.includes('Index')) {
        return generateText(mode, length);
    }
    
    // For hands and rows, try to use real words first
    const wordText = getRandomWords(mode, length);
    
    // If we couldn't get enough words, fall back to random characters
    if (wordText.length < length / 2) {
        return generateText(mode, length);
    }
    
    return wordText;
}
