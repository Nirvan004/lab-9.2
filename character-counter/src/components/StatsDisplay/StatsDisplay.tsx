import type { StatsDisplayProps } from "../../types";

const StatsDisplay: React.FC<StatsDisplayProps> = ({ stats, showReadingTime }) => {
  return (
    <div style={{ marginTop: "16px" }}>
      <p><strong>Characters:</strong> {stats.characterCount}</p>
      <p><strong>Words:</strong> {stats.wordCount}</p>

      {showReadingTime && (
        <p><strong>Reading Time:</strong> {stats.readingTime.toFixed(2)} min</p>
      )}
    </div>
  );
};

export default StatsDisplay;
