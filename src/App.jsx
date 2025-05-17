import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import Nav from "./components/Nav";
import { useState } from "react";
const App = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };
  
  return (
    <div className="relative">
      <Router>
       <Nav />
        <Routes>
          <Route path="/" element={<Home notes={notes} />} />
          <Route
            path="/create/note"
            element={<CreateNote addNotes={handleAddNote} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
