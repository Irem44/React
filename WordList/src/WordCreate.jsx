import React, { useState } from "react";
import "./App.css";

function WordCreate({ wordAdd, wordList, filter }) {
  const [input, setInput] = useState();
  const [control, setControl] = useState(true);
  const [searchInput, setSearchInput] = useState();

  const add = () => {
    const request = {
      id: Math.floor(Math.random() * 22222222),
      content: input,
    };
    // Kelimenin var olup olmadığını kontrol et

    const cikti = wordList.some(
      (word) =>
        word.content.trim().toLowerCase() ===
        request.content.trim().toLowerCase()
    );

    if (cikti) {
      alert("Kelime listede var.");
    } else if (input === "") {
      alert("Lütfen bir kelime giriniz.");
    } else {
      wordAdd(request);
    }

    setInput("");
  };

  const filtered = () => {
    const input = {
      id: Math.floor(Math.random() * 2222222),
      content: searchInput,
    };
    filter(input);
    setSearchInput("");
    setControl(true);
  };

  const filtered2 = () => {
    setControl(false);
  };
  return (
    <div>
      <input
        className="enterWord"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      <button className="add" onClick={add}>
        Add Word
      </button>
      {control ? (
        <button className="filter " onClick={filtered2}>
          Filter
        </button>
      ) : (
        <div>
          <input
            className="enterWord"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            style={{ width: "150px" }}
          ></input>
          <button onClick={filtered} className="filter">
            Search
          </button>
        </div>
      )}
    </div>
  );
}

export default WordCreate;
