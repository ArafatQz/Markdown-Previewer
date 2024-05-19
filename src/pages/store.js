import React, { useState } from "react";
import EditorPage from "./editor";
import PreviewPage from "./previor"; 
import text from "./default_text.js";
import './pages.css';

export default function Store() {
  const [value, setValue] = useState(text);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="mainDiv">
      <EditorPage value={value} onInputChange={handleChange} />
      <PreviewPage value={value} />
    </div>
  );
}
