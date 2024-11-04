import React, { useState } from "react";
import axios from "axios";

const textInput = {
  toptext: "",
  bottext: "",
};

function Input() {
  const [meme, setMeme] = useState(null); // Inisialisasi dengan null
  const [text, setText] = useState(textInput); // Perbaikan penulisan setText

  const randomNumber = Math.floor(Math.random() * 100);
  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .get("https://api.imgflip.com/get_memes")
      .then((response) => setMeme(response.data.data.memes[randomNumber]))
      .catch((error) => console.log(`Terjadi error pada ${error}`));
  };

  const handleChange = (event) => {
    setText((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          placeholder="Top text"
          name="toptext"
        />
        <input
          type="text"
          onChange={handleChange}
          placeholder="Bottom text"
          name="bottext"
        />
        <button className="submit-btn">Get a new meme image 🖼️</button>
      </form>
      <p className="p--top">{text.toptext}</p>
      {meme && <img src={meme.url} alt="meme" />} {/* Pengecekan meme */}
      <p className="p--bot">{text.bottext}</p>
    </main>
  );
}

export default Input;
