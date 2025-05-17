import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateNote = ({ addNotes }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const saveNote = () => {
    const newNote = { title, content, category };
    const existingNotes = JSON.parse(localStorage.getItem("NewNotes")) || [];
    const updatedNotes = [...existingNotes, newNote];
    localStorage.setItem("NewNotes", JSON.stringify(updatedNotes));
    setTitle("");
    setContent("");
    setCategory("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { title, content, category };
    addNotes(newNote);
    saveNote();
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[antiquewhite] p-4">
      <div className="w-full max-w-3xl bg-gray-200 rounded-xl shadow-md p-6">
        <h1 className="text-3xl font-semibold mb-6 text-center">Create Note</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label htmlFor="title" className="mb-1 font-medium">Title</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-gray-300 p-3 text-lg rounded-lg outline-none"
              type="text"
              id="title"
              name="title"
              required
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="content" className="mb-1 font-medium">Content</label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="bg-gray-300 p-3 text-lg rounded-lg min-h-[150px] outline-none"
              id="content"
              name="content"
              required
            ></textarea>
          </div>

          <div className="flex flex-col">
            <label htmlFor="category" className="mb-1 font-medium">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="bg-gray-300 p-3 text-lg rounded-lg outline-none"
              id="category"
              name="category"
              required
            >
              <option value="" disabled>Select category</option>
              <option value="blip">Quick Blip</option>
              <option value="oneLiner">Smart One-Liner</option>
              <option value="reflection">Deep Reflection</option>
              <option value="memo">Sticky Memo</option>
            </select>
          </div>

          <button
            className="w-full py-3 rounded-xl bg-yellow-300 text-lg font-semibold hover:bg-yellow-400 transition-all duration-200"
            type="submit"
          >
            Create Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
