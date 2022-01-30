import React, { useState } from "react";

const InputNote = ({ addNote }) => {
  const [value, setValue] = useState("");

  const handleValue = ({ target: { value } }) => setValue(value);

  return (
    <div className="inp">
      <input value={value} type="textarea" onChange={handleValue} />
      <button onClick={() => addNote(value)} className="btn">
        Add Note
      </button>
    </div>
  );
};

export default InputNote;
