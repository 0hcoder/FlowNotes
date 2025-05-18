import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { MdNoteAdd } from "react-icons/md";
import { Link } from "react-router-dom";
import CardMemo from "./CardMemo";
import CardOneLiner from "./CardOneLiner";
import CardQuickBlip from "./CardQuickBlip";
import CardReflection from "./CardReflection";

const HomeComp = () => {
  const storedNotes = JSON.parse(localStorage.getItem("NewNotes")) || [];
  const [activeIndex, setActiveIndex] = useState(null);

  const handleDelete = (deleteIndex) => {
    const updatedNotes = storedNotes.filter((_, index) => index !== deleteIndex);
    localStorage.setItem("NewNotes", JSON.stringify(updatedNotes));
    window.location.reload();
  };

  if (storedNotes.length === 0)
    return (
      <div className="max-h-[999px] min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-5xl font-semibold mb-4">Welcome to FlowNotes</h1>
        <div className="relative group inline-block">
          <Link to="/create/note">
            <MdNoteAdd className="text-green-400 text-9xl cursor-pointer" />
          </Link>
          <span className="absolute left-1/2 -translate-x-1/2 bottom-[-36px] scale-0 group-hover:scale-100 transition-all duration-200 bg-[#6ae066] opacity-[0.9] text-white text-sm rounded px-3 py-1 whitespace-nowrap z-10">
            Create Note
          </span>
        </div>

        <h1 className="text-3xl font-semibold mt-4">Create Your First Note</h1>
        <p className="text-gray-500 mt-2">Click the icon above to start!</p>
        <p className="text-gray-500 mt-2">Drag and drop to move notes around.</p>
      </div>
    );

  const updateNotePosition = (index, x, y) => {
    const notes = JSON.parse(localStorage.getItem("NewNotes")) || [];
    notes[index] = { ...notes[index], x, y };
    localStorage.setItem("NewNotes", JSON.stringify(notes));
  };

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden pt-[72px]">
      {storedNotes.map((note, index) => {
        const CardComponent = {
          blip: CardQuickBlip,
          oneLiner: CardOneLiner,
          reflection: CardReflection,
          memo: CardMemo,
        }[note.category];

        if (!CardComponent) return null;

        const cardRef = useRef(null);

        return (
          <Draggable
            key={index}
            nodeRef={cardRef}
            bounds={{
              left: 0,
              top: 5,
              right: window.innerWidth - 150,
              bottom: 9999,
            }}
            defaultPosition={{ x: note.x || 0, y: note.y || 0 }}
            onStop={(e, data) => {
              updateNotePosition(index, data.x, data.y);
              setActiveIndex(index);
            }}
            onStart={() => {
              setActiveIndex(index);
            }}
          >
            <div
              ref={cardRef}
              onClick={() => setActiveIndex(index)}
              style={{
                zIndex: activeIndex === index ? 100 : 1,
                position: "absolute",
              }}
            >
              <div className="cursor-move">
                <CardComponent note={note} onDelete={() => handleDelete(index)} />
                 

              </div>
            </div>
          </Draggable>
        );
      })}
    </div>
  );
};

export default HomeComp;