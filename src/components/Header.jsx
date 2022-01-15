import React from "react";

const Header = ({ update }) => {
  return (
    <div className="header">
      <h2>Hotes</h2>
      <span className="refresh" onClick={update}>
        <i className="fas fa-sync"></i>
      </span>
    </div>
  );
};

export default Header;
