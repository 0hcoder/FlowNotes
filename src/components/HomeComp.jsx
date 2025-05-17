import { useRef, useState } from "react";
import Draggable from "react-draggable";
import CardQuickBlip from "./CardQuickBlip";
import CardOneLiner from "./CardOneLiner";
import CardReflection from "./CardReflection";
import CardMemo from "./CardMemo";
import CreateNote from "../pages/CreateNote";
import DraggableCardWrapper from "./DraggableCardWrapper";

const HomeComp = () => {
  const storedNotes = JSON.parse(localStorage.getItem('NewNotes')) || [];
  const [activeIndex, setActiveIndex] = useState(null); // Track active card index

  if (storedNotes.length === 0) return <CreateNote />;

  const updateNotePosition = (index, x, y) => {
    const notes = JSON.parse(localStorage.getItem('NewNotes')) || [];
    notes[index] = { ...notes[index], x, y };
    localStorage.setItem('NewNotes', JSON.stringify(notes));
  };

  return (
    <div className="w-full min-h-screen relative overflow-x-hidden pt-10 bg-[antiquewhite]">
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
              top: 0,
              right: window.innerWidth - 150,
              bottom: 9999,
            }}
            defaultPosition={{ x: note.x || 0, y: note.y || 0 }}
            onStop={(e, data) => {
              updateNotePosition(index, data.x, data.y);
              setActiveIndex(index); // Also set active on drag stop
            }}
            onStart={() => {
              setActiveIndex(index); // Set active when dragging starts
            }}
          >
            <DraggableCardWrapper
              ref={cardRef}
              onClick={() => setActiveIndex(index)} // Set active on click
              style={{
                zIndex: activeIndex === index ? 100 : 1,  // High z-index for active card
                position: 'absolute',  // Make sure positioned for zIndex to work
              }}
            >
              <div className="cursor-move">
                <CardComponent note={note} />
              </div>
            </DraggableCardWrapper>
          </Draggable>
        );
      })}
    </div>
  );
};

export default HomeComp;
