import React from "react";
import trollface from "../assets/Troll Face.png";

const Header = () => {
  return (
    <header className="header">
      <img src={trollface} alt="trollface" />
      <h3>Meme Generator</h3>
    </header>
  );
};

export default Header;
