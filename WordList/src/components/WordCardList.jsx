import React from "react";
import WordCard from "./WordCard";

function WordCardList({ wordList, remove, updated }) {
  return (
    <div>
      {wordList &&
        wordList.map((word) => (
          <WordCard
            word={word}
            key={word.id}
            remove={remove}
            updated={updated}
          />
        ))}
    </div>
  );
}

export default WordCardList;
