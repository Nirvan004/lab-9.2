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

const getWordCountColorClass = () => {
    if (stats.wordCount < minWords) return "text-red";
    if (stats.wordCount > maxWords) return "text-orange";
    return "text-green";
  };

  const progress = Math.min((stats.wordCount / maxWords) * 100, 100);

  return (
    <div className="character-counter-container">
      <TextInput onTextChange={setText} placeholder="Start typing..." />

      <StatsDisplay stats={stats} showReadingTime />

      {/* Progress section */}
      <div>
        <p className={getWordCountColorClass()}>
          Word Count: {stats.wordCount} / {maxWords}
        </p>

        <div className="progress-bar-background">
          <div
            className="progress-bar-fill"
            style={{
              width: `${progress}%`,
              backgroundColor:
                stats.wordCount < minWords
                  ? "red"
                  : stats.wordCount > maxWords
                  ? "orange"
                  : "green",
            }}
          />
        </div>
      </div>
      
      {/* Optional word limits */}
      {minWords > 0 && <p>Minimum words: {minWords}</p>}
      {maxWords !== Infinity && <p>Maximum words: {maxWords}</p>}
      {targetReadingTime && <p>Target reading time: {targetReadingTime} min</p>}
    </div>
  );
};

export default CharacterCounter;