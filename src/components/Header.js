import React from "react";

const Header = (props) => {
  return (
    <div className="header">
      <h1>Notes</h1>
      <button
        onClick={() =>
          props.handleToggle((previousDarkMode) => !previousDarkMode)
        }
        className="save"
      >
        ToggleMode
      </button>
    </div>
  );
};

export default Header;
