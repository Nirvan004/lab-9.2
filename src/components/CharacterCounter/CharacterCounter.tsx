import { useState } from "react";
import TextInput from "../TextInput/TextInput";
import StatsDisplay from "../StatsDisplay/StatsDisplay";
import type { TextStats, CharacterCounterProps } from "../../types";

const CharacterCounter: React.FC<CharacterCounterProps> = ({
  minWords = 0,
  maxWords = Infinity,
  targetReadingTime,
}) => {
  const [text, setText] = useState("");

  const calculateStats = (input: string): TextStats => {
    if (!input.trim()) {
      return {
        characterCount: 0,
        wordCount: 0,
        readingTime: 0,
      };
    }

    const words = input.trim().split(/\s+/);
    const wordCount = words.length;

    const readingTime = wordCount / 200;

    return {
      characterCount: input.length,
      wordCount,
      readingTime,
    };
  };

  const stats = calculateStats(text);

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <TextInput onTextChange={setText} placeholder="Start typing..." />

      {/* Stats display */}
      <StatsDisplay stats={stats} showReadingTime={true} />

      {/* Optional word limits */}
      {minWords > 0 && <p>Minimum words: {minWords}</p>}
      {maxWords !== Infinity && <p>Maximum words: {maxWords}</p>}
      {targetReadingTime && <p>Target reading time: {targetReadingTime} min</p>}
    </div>
  );
};

export default CharacterCounter;