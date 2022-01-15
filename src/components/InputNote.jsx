import React from "react";

const InputNote = ({ handleValue, addNote }) => {
  return (
    <div className="inp">
      <input type="textarea" onChange={(e) => handleValue(e)} />
      <button onClick={addNote} className="btn">
        Add Note
      </button>
    </div>
  );
};

export default InputNote;
