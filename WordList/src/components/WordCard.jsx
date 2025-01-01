import React, { useState } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { HiPencil } from "react-icons/hi2";
import "../App.css";
import { FaCheck } from "react-icons/fa";

function WordCard({ word, remove, updated }) {
  const { id, content } = word;

  const [words, setWords] = useState(content);
  const [edit, setEdit] = useState(false);

  const removed = () => {
    remove(id);
  };

  const update = () => {
    const request = {
      id: id,
      content: words,
    };
    updated(request);
    setEdit(false);
  };
  return (
    <div className="card">
      {edit ? (
        <input
          className="enterWord"
          value={words}
          onChange={(e) => setWords(e.target.value)}
        ></input>
      ) : (
        content
      )}

      <div className="icons">
        {edit ? (
          <FaCheck onClick={update} />
        ) : (
          <HiPencil onClick={() => setEdit(true)} />
        )}
        <RiDeleteBin5Fill onClick={removed} />
      </div>
    </div>
  );
}

export default WordCard;
