import { MdDeleteForever } from "react-icons/md";

const CardQuickBlip = ({ note, onDelete }) => {
  return (
    <div
      className="relative px-4 py-6 shadow-sm rounded-md break-words mx-auto flex items-center justify-center text-center group"
      style={{
        minWidth: "180px",
        maxWidth: "300px",
        minHeight: "150px",
        background: `linear-gradient(to bottom right, #c6939a 20%, rgba(236, 178, 186, 0)), #ecb2ba`,
        boxShadow: "1px 1px 2px #c6939a",
        fontSize: "1rem",
        fontWeight: "600",
        color: "#4b3c3e",
      }}
    >
      {/* Delete Icon: Visible only on hover */}
      <MdDeleteForever
        className="absolute top-1 right-1 z-10 text-red-600 w-3.5 h-3.5 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-red-500"
        onClick={onDelete}
      />

      {/* Decorative Top Cut */}
      <div className="absolute w-full h-[4vmin] top-0 flex justify-between opacity-50">
        <div
          className="w-[10vmin] h-[4vmin] bg-[#dbd8be] border-l border-r border-dotted border-[#b7b49d]"
          style={{ transform: "rotate(-45deg)" }}
        />
        <div
          className="w-[10vmin] h-[4vmin] bg-[#dbd8be] border-l border-r border-dotted border-[#b7b49d]"
          style={{ transform: "rotate(45deg)" }}
        />
      </div>

      {/* Note Content */}
      <p className="z-10 whitespace-pre-wrap leading-snug">
        {note?.content || "Write something..."}
      </p>

      {/* Decorative Bottom Cut */}
      <div className="absolute w-full h-[4vmin] bottom-0 flex justify-between opacity-50">
        <div
          className="w-[10vmin] h-[4vmin] bg-[#dbd8be] border-l border-r border-dotted border-[#b7b49d]"
          style={{ transform: "rotate(45deg)" }}
        />
        <div
          className="w-[10vmin] h-[4vmin] bg-[#dbd8be] border-l border-r border-dotted border-[#b7b49d]"
          style={{ transform: "rotate(-45deg)" }}
        />
      </div>
    </div>
  );
};

export default CardQuickBlip;
