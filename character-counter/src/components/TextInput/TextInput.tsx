import { useState } from "react";
import type { TextInputProps } from "../../types";

const TextInput: React.FC<TextInputProps> = ({
  onTextChange,
  placeholder = "Type something...",
  initialValue = "",
}) => {
  const [text, setText] = useState(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = e.target.value;
    setText(newText);
    onTextChange(newText);
  };

  return (
    <textarea
      value={text}
      onChange={handleChange}
      placeholder={placeholder}
      style={{ width: "100%", minHeight: "120px", padding: "8px" }}
    />
  );
};

export default TextInput;