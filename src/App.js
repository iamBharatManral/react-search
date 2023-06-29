import { useState } from "react";
import Search from "./Search";
import words from "./words";
import Display from "./Display";

import "./styles.css";

export default function App() {
  const [wordList, setWorldList] = useState(words);
  const filterWords = (e) => {
    const search = e.target.value;
    const newList = words.filter((word) => word.startsWith(search));
    setWorldList(newList);
  };
  return (
    <div className="App">
      <h1>Search</h1>
      <Search filterWords={filterWords} />
      <Display words={wordList} />
    </div>
  );
}
