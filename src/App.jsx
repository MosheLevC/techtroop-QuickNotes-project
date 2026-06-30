import { useState } from "react";
import "./App.css";
import NoteForm from "./NoteForm";

function App() {
  const [currentTitle, setCurrentTitle] = useState({});

  return (
    <div className="container">
      <NoteForm title="title" body="body" category="category" />
    </div>
  );
}

export default App;
