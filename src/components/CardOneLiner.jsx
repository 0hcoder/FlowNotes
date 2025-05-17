import React from "react";

const CardOneLiner = ({note}) => {
  return (
    <div className="relative group w-1/2 min-w-[250px] h-[50px] mb-10 rounded-md px-[40px] pt-[15px] text-[darkslategray] bg-gradient-to-r from-[#abbd73] to-[#d6e2ad] shadow-md transition-all duration-200 hover:from-[#abbd73] hover:to-[#abbd73]">
      {/* Simulated ::before shadow */}
      <div className="absolute -z-10 right-2 bottom-[13px] w-1/4 h-full rotate-[4deg] group-hover:rotate-0 group-hover:bottom-[20px] transition-all duration-150 shadow-[0_15px_10px_#777]" />
      {/* Circle */}
      <span className="absolute text-center top-[14px] left-[15px] w-[20px] h-[20px] rounded-full shadow-[inset_1px_1px_1px_rgba(0,0,0,0.5),inset_0_0_0_25px_antiquewhite] ont-honey text-1xl" >
      {note.content}
      </span>
    </div>
  );
};

export default CardOneLiner;
