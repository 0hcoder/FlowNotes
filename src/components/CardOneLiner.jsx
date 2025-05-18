import { MdDeleteForever } from "react-icons/md";

const CardOneLiner = ({ note,onDelete }) => {
  return (
    <div
      className="
        relative group 
        min-w-[250px] max-w-[90%] 
        h-[50px] mb-10 
        rounded-md 
        px-[0px] pt-[1px] 
        text-[darkslategray] 
        bg-gradient-to-r from-[#abbd73] to-[#d6e2ad] 
        shadow-md 
        transition-all duration-200 
        hover:from-[#abbd73] hover:to-[#abbd73]
        flex items-center
        "
    >
    
    <MdDeleteForever
            className="absolute top-1 right-1 z-10 text-red-600 w-3.5 h-3.5 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:text-red-500"
            onClick={onDelete}
          />
      <div className="absolute -z-10 right-2 bottom-[13px] w-1/4 h-full rotate-[4deg] group-hover:rotate-0 group-hover:bottom-[20px] transition-all duration-150 shadow-[0_15px_10px_#777]" />

    
      <span
        className="
          absolute text-center top-[14px] left-[15px] 
          w-[20px] h-[20px] rounded-full 
          shadow-[inset_1px_1px_1px_rgba(0,0,0,0.5),inset_0_0_0_25px_antiquewhite]
          flex items-center justify-center
          font-handlee text-lg
        "
      ></span>

      {/* Text Content */}
      <p className="pl-[50px] w-full truncate">{note.content}</p>
    </div>
  );
};

export default CardOneLiner;
