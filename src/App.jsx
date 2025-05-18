import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import Nav from "./components/Nav";
import { useState } from "react";

import { ToastContainer,toast } from "react-toastify";
const App = () => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes((prev) => [...prev, newNote]);
  };
  
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        toastStyle={{
          backgroundColor: "#f0f0f0",
          color: "#333",
          fontFamily: "Handlee, cursive",
          fontSize: "16px",
        }}
        bodyStyle={{
          fontFamily: "Handlee, cursive",
          fontSize: "16px",
        }}
        progressStyle={{
          backgroundColor: "#4caf50",
        }}
        limit={3}
      />  
    </div>
  );
};

export default App;
