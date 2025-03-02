// Keyboard mapping for fingers and rows
const keyboardMap = {
    // Rows
    topRow: ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    homeRow: ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';'],
    bottomRow: ['z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/'],
    numberRow: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
    
    // Hands
    leftHand: ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v', 'b'],
    rightHand: ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', ';', 'n', 'm', ',', '.', '/'],
    
    // Fingers - Left Hand
    leftPinky: ['q', 'a', 'z', '1'],
    leftRing: ['w', 's', 'x', '2'],
    leftMiddle: ['e', 'd', 'c', '3'],
    leftIndex: ['r', 'f', 'v', 't', 'g', 'b', '4', '5'],
    
    // Fingers - Right Hand
    rightIndex: ['y', 'h', 'n', 'u', 'j', 'm', '6', '7'],
    rightMiddle: ['i', 'k', ',', '8'],
    rightRing: ['o', 'l', '.', '9'],
    rightPinky: ['p', ';', '/', '0'],
    
    // All lowercase letters
    all: 'abcdefghijklmnopqrstuvwxyz'.split('')
};

// Function to get a random character from a specified set
function getRandomChar(charSet) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    return charSet[randomIndex];
}

// Function to generate random text for practice based on the selected mode
function generateText(mode, length) {
    let chars = [];
    
    // Default to all lowercase if mode is not found
    const characterSet = keyboardMap[mode] || keyboardMap.all;
    
    for (let i = 0; i < length; i++) {
        chars.push(getRandomChar(characterSet));
    }
    
    // Group characters with spaces to create "word-like" groups
    let result = '';
    for (let i = 0; i < chars.length; i++) {
        result += chars[i];
        // Add a space every 3-6 characters to create word-like groups
        if ((i + 1) % (3 + Math.floor(Math.random() * 4)) === 0 && i !== chars.length - 1) {
            result += ' ';
        }
    }
    
    return result;
}
