# Finger Typing Practice

A specialized typing practice website inspired by MonkeyType that allows users to practice typing with specific fingers and hand positions.

## Features

- **Specialized Practice Modes**
  - Full keyboard practice
  - Left hand only (lowercase)
  - Right hand only (lowercase)
  - Number row practice
  - Top row practice
  - Home row practice
  - Bottom row practice
  - Individual finger practice for each finger

- **Performance Metrics**
  - Words Per Minute (WPM) calculation
  - Accuracy percentage
  - Correctly/incorrectly typed characters
  - Timed tests (15s, 30s, 60s, 120s)

- **Visual Feedback**
  - Color-coded typing feedback
  - Real-time stats
  - Test result summary
  - Keyboard visualization guide

## Files Overview

- `index.html` - Main application HTML
- `styles.css` - Styling for the typing test application
- `script.js` - Core functionality for the typing test
- `keyboardMap.js` - Mapping of keys to fingers and rows
- `wordLists.js` - Word generation for practice
- `keyboard.html` - Visual keyboard layout guide

## How to Use

1. Clone the repository:
   ```
   git clone <your-repository-url>
   ```

2. Open `index.html` in your web browser.

3. Choose a practice mode:
   - Select a hand (left/right)
   - Select a row (top/home/bottom/number)
   - Select a specific finger for targeted practice

4. Choose test duration:
   - 15, 30, 60, or 120 seconds

5. Begin typing in the input field.
   - The test starts automatically when you begin typing
   - Characters will be highlighted green (correct) or red (incorrect)
   - Current character position is underlined

6. View your results after completion:
   - WPM (Words Per Minute)
   - Accuracy percentage
   - Total characters typed

7. Use the `Restart Test` button to try again with the same settings or choose new settings for another practice session.

## Keyboard Layout Reference

Open `keyboard.html` to see a visual guide of which keys correspond to which fingers. This helps beginners understand proper finger placement while typing.

## Customization

### Adding More Word Lists

Modify the `wordLists.js` file to add specialized word lists for different practice modes:

```javascript
const specializedWords = {
    leftHand: ["add", "ace", "bag", "cab", ...],
    rightHand: ["jump", "monk", "lion", ...],
    // etc.
};
```

### Changing the Color Scheme

The color scheme uses CSS variables that can be modified in the `:root` section of `styles.css`:

```css
:root {
    --background: #232323;
    --text-color: #e2b714;
    /* other colors */
}
```

## Deployment

This is a static website that can be deployed on any web server or web hosting service:

1. **GitHub Pages**: Push to a GitHub repository and enable GitHub Pages
2. **Netlify/Vercel**: Connect your repository for automatic deployment
3. **Any web hosting**: Upload the files to your hosting provider

## Future Enhancements

- User accounts to save progress
- Customizable text input
- Practice texts from common programming languages
- Additional statistics and charts
- Dark/light theme options
- Mobile-friendly touch typing practice

## Credits

- Inspired by [MonkeyType](https://monkeytype.com/)
- Designed for specialized finger training and typing improvement
