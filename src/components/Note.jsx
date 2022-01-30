import React from "react";

const Note = ({ content, id, deletePost }) => {
  return (
    <div className="note">
      <span className="remove" onClick={() => deletePost(id)}>
        <i className="fas fa-times" />
      </span>
      <p>{content}</p>
    </div>
  );
};

export default Note;
