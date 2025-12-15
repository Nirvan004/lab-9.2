Character Counter

This project implements a reusable Character Counter component using React, TypeScript, and simple CSS styling. The component demonstrates state management, component communication, optional props, and real-time UI updates.

Components

CharacterCounter
A component that allows users to type text and displays statistics including character count, word count, and estimated reading time. It also supports word count goals with a progress indicator.

TextInput
A reusable text input component that handles user input and communicates changes back to its parent.

StatsDisplay
Displays text statistics such as character count, word count, and optionally reading time.

Features

Tracks text input in real-time using useState.
Calculates word count, character count, and estimated reading time.
Provides visual feedback with color-coded word count based on min/max goals.
Shows a progress bar toward word count goals.

Technologies

React (functional components and hooks)
TypeScript (strictly typed interfaces)
CSS (responsive layout and progress indicators)

Reflection Questions
How did you handle state updates when the text changed?
What considerations did you make when calculating reading time?
How did you ensure the UI remained responsive during rapid text input?
What challenges did you face when implementing the statistics calculations?

1. To handle state updates, I used the useState hook in the CharacterCounter component to track the current text input. The TextInput component receives a callback prop onTextChange which is called whenever the user types. Inside TextInput, I update local state and then call the parent callback This ensures that the parent component (CharacterCounter) always has the latest text, allowing real-time calculation of statistics.

2. When calculating reading time, I used a simple formula based on an average reading speed of 200 words per minute. I ensured that empty input would return a reading time of 0 and that extra spaces between words would not inflate the word count by trimming the text and splitting it with a regular expression. This provides a realistic estimate while keeping the calculation efficient.

3. To keep the UI responsive, I minimized computations inside the onChange handler and only performed simple calculations for word count, character count, and reading time. The use of React’s state management ensures that updates are batched and the component re-renders efficiently. CSS transitions for the progress bar make visual feedback smooth without affecting typing performance.

4. The main challenges were handling edge cases such as empty input, multiple consecutive spaces, and very long text. I needed to choose a reliable method to split words and calculate reading time accurately. Another challenge was ensuring that the UI updates correctly for statistics, progress bars, and color indicators every time the text changes, maintaining a smooth user experience. I am happy to say that I used last weeks frustration of constantly getting import errors to good use and didnt deal with that once.
