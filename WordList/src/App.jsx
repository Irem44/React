import { useState } from "react";
import "./App.css";
import WordCreate from "./WordCreate";
import WordCardList from "./components/WordCardList";

function App() {
  const [wordList, setWordList] = useState([]);

  const wordAdd = (newWord) => {
    setWordList([...wordList, newWord]);
  };

  const remove = (wordId) => {
    setWordList([...wordList.filter((word) => word.id != wordId)]);
  };

  const updated = (newWord) => {
    const updatedWord = wordList.map((word) => {
      if (word.id !== newWord.id) {
        return word;
      }
      return newWord;
    });

    setWordList([...updatedWord]);
  };

  //filtreleme
  const filter = (filterWord) => {
    if (!filterWord.content) {
      // Input boş ise orijinal listeyi göster
      setWordList([...wordList]);
    } else if (
      !wordList.some(
        (word) =>
          word.content.toLowerCase() === filterWord.content.toLowerCase()
      )
    ) {
      alert("Kelime listede bulunmuyor");
    } else {
      setWordList(
        wordList.filter(
          (word) =>
            word.content.toLowerCase() === filterWord.content.toLowerCase()
        )
      );
    }
  };
  return (
    <div className="wordcreate header">
      <div className="title">
        <h2>My Word List</h2>
      </div>
      <WordCreate wordAdd={wordAdd} wordList={wordList} filter={filter} />
      <WordCardList wordList={wordList} remove={remove} updated={updated} />
    </div>
  );
}

export default App;
