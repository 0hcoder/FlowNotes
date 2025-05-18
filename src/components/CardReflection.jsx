import { useEffect, useRef, useState } from "react";
import { MdDeleteForever } from "react-icons/md";

const CardReflection = ({ note,onDelete }) => {
  const textareaRef = useRef(null);
  const [content, setContent] = useState(note.content || "");

  // Auto adjust height whenever content changes
  useEffect(() => {
    const el = textareaRef.current;
    if (el) {
      el.style.height = "auto"; // reset height to get scrollHeight correctly
      el.style.height = el.scrollHeight + "px"; // set height to scrollHeight
    }
  }, [content]);

  return (
    <div
      className="relative w-[90%] max-w-3xl min-w-[400px] min-h-[200px] mx-auto bg-white rounded-xl shadow-md overflow-visible group"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
     
      <div
        className="absolute top-0 bottom-0 left-0 w-[60px] border-r-4 border-red-600"
        style={{
          backgroundImage: "radial-gradient(#575450 6px, transparent 7px)",
          backgroundRepeat: "repeat-y",
          backgroundSize: "30px 30px",
        }}
      />


      <div
        className="pl-[60px] pt-7 pr-0 pb-7"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 28px, #91D1D3 28px)",
          backgroundSize: "30px 30px",
        }}
      >
        <textarea
          ref={textareaRef}
          readOnly
          value={`Your Notes, Your Mind\n${content}`}
          className="w-full bg-transparent text-mediumblue font-handlee font-bold text-lg leading-[30px] p-2 outline-none border-none resize-none overflow-hidden"
          style={{
            fontFamily: "'Handlee', cursive",
            color: "mediumblue",
            height: "auto",
          }}
          rows={1}
        />
      </div>
        <MdDeleteForever
        className="absolute top-1 right-1 z-10 text-red-600 w-3.5 h-3.5 cursor-pointer opacity-1 group-hover:opacity-100 transition-opacity duration-200 hover:text-red-500"
        onClick={onDelete}
      />
    </div>
  );
};

export default CardReflection;
