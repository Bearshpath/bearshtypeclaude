// DOM elements
const textDisplay = document.getElementById('text-display');
const typingInput = document.getElementById('typing-input');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const timeDisplay = document.getElementById('time');
const restartBtn = document.getElementById('restart-btn');
const newTestBtn = document.getElementById('new-test-btn');
const resultsDiv = document.getElementById('results');
const resultWpm = document.getElementById('result-wpm');
const resultAccuracy = document.getElementById('result-accuracy');
const resultChars = document.getElementById('result-chars');

// Mode and setting buttons
const modeButtons = document.querySelectorAll('.mode-btn');
const fingerButtons = document.querySelectorAll('.finger-btn');
const timeButtons = document.querySelectorAll('.time-btn');

// Test variables
let startTime;
let timerInterval;
let testActive = false;
let correctChars = 0;
let incorrectChars = 0;
let totalChars = 0;
let currentIndex = 0;

// Current settings
let currentMode = 'all';
let testDuration = 60; // seconds
let textLength = 200; // characters

// Initialize the test
function initTest() {
    // Clear previous state
    clearInterval(timerInterval);
    testActive = false;
    correctChars = 0;
    incorrectChars = 0;
    totalChars = 0;
    currentIndex = 0;
    
    // Reset used words when starting a new test with different mode
    resetUsedWords();
    
    // Generate text based on current mode
    const text = generatePracticeText(currentMode, textLength);
    
    // Set up text display
    textDisplay.innerHTML = '';
    for (let i = 0; i < text.length; i++) {
        const charSpan = document.createElement('span');
        charSpan.classList.add('char');
        charSpan.textContent = text[i];
        if (i === 0) charSpan.classList.add('current');
        textDisplay.appendChild(charSpan);
    }
    
    // Reset stats
    wpmDisplay.textContent = '0';
    accuracyDisplay.textContent = '100%';
    timeDisplay.textContent = testDuration;
    
    // Clear input
    typingInput.value = '';
    typingInput.focus();
    
    // Hide results
    resultsDiv.classList.add('hidden');
}

// Start the timer
function startTimer() {
    startTime = new Date();
    timerInterval = setInterval(() => {
        const elapsedTime = Math.floor((new Date() - startTime) / 1000);
        const timeLeft = testDuration - elapsedTime;
        
        if (timeLeft <= 0) {
            endTest();
            return;
        }
        
        timeDisplay.textContent = timeLeft;
        updateStats(elapsedTime);
    }, 1000);
}

// Update WPM and accuracy stats
function updateStats(elapsedTime) {
    // Calculate WPM: (characters typed / 5) / minutes elapsed
    // 5 characters is the standard word length for WPM calculation
    const minutes = elapsedTime / 60;
    const wpm = Math.round(correctChars / 5 / (minutes || 1));
    wpmDisplay.textContent = wpm;
    
    // Calculate accuracy
    const accuracy = Math.round(
        (correctChars / (correctChars + incorrectChars || 1)) * 100
    );
    accuracyDisplay.textContent = `${accuracy}%`;
}

// End the test and show results
function endTest() {
    clearInterval(timerInterval);
    testActive = false;
    
    const elapsedTime = Math.floor((new Date() - startTime) / 1000) || 1;
    const minutes = elapsedTime / 60;
    const wpm = Math.round(correctChars / 5 / (minutes || 1));
    const accuracy = Math.round(
        (correctChars / (correctChars + incorrectChars || 1)) * 100
    );
    
    // Display results
    resultWpm.textContent = wpm;
    resultAccuracy.textContent = `${accuracy}%`;
    resultChars.textContent = `${correctChars}/${correctChars + incorrectChars}`;
    
    resultsDiv.classList.remove('hidden');
    
    // Disable typing
    typingInput.blur();
}

// Handle user typing
typingInput.addEventListener('input', (e) => {
    const chars = textDisplay.querySelectorAll('.char');
    const typedValue = e.target.value;
    
    // Start test on first input
    if (!testActive && typedValue.length === 1) {
        testActive = true;
        startTimer();
    }
    
    // Check each character
    chars.forEach((char, index) => {
        // Reset classes
        char.classList.remove('correct', 'incorrect', 'current');
        
        // Add appropriate class based on typing
        if (index < typedValue.length) {
            if (char.textContent === typedValue[index]) {
                char.classList.add('correct');
            } else {
                char.classList.add('incorrect');
            }
        } else if (index === typedValue.length) {
            char.classList.add('current');
        }
    });
    
    // Calculate correct and incorrect characters
    if (typedValue.length > currentIndex) {
        // User typed a new character
        const newChar = typedValue[typedValue.length - 1];
        const expectedChar = chars[typedValue.length - 1].textContent;
        
        if (newChar === expectedChar) {
            correctChars++;
        } else {
            incorrectChars++;
        }
    } else if (typedValue.length < currentIndex) {
        // User deleted characters - no need to update stats
    }
    
    currentIndex = typedValue.length;
    
    // End test if all text is typed
    if (typedValue.length === chars.length) {
        endTest();
    }
});

// Mode selection
function setActiveButton(buttonGroup, activeButton) {
    buttonGroup.forEach(button => button.classList.remove('active'));
    activeButton.classList.add('active');
}

// Handle mode button clicks
modeButtons.forEach(button => {
    button.addEventListener('click', () => {
        setActiveButton(modeButtons, button);
        currentMode = button.dataset.mode;
        
        // Update active classes on finger buttons
        fingerButtons.forEach(btn => btn.classList.remove('active'));
        
        initTest();
    });
});

// Handle finger button clicks
fingerButtons.forEach(button => {
    button.addEventListener('click', () => {
        setActiveButton([...modeButtons, ...fingerButtons], button);
        currentMode = button.dataset.finger;
        initTest();
    });
});

// Handle time button clicks
timeButtons.forEach(button => {
    button.addEventListener('click', () => {
        setActiveButton(timeButtons, button);
        testDuration = parseInt(button.dataset.time);
        timeDisplay.textContent = testDuration;
        initTest();
    });
});

// Restart button
restartBtn.addEventListener('click', initTest);

// New test button
newTestBtn.addEventListener('click', initTest);

// Prevent keyboard shortcuts during test
document.addEventListener('keydown', (e) => {
    if (testActive && (e.ctrlKey || e.metaKey)) {
        e.preventDefault();
    }
});

// Focus input on tab presses
document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        e.preventDefault();
        typingInput.focus();
    }
});

// Initialize the test when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // Set default active buttons
    document.querySelector('[data-mode="all"]').classList.add('active');
    document.querySelector('[data-time="60"]').classList.add('active');
    
    // Initialize the first test
    initTest();
    
    // Focus the input
    typingInput.focus();
});
