import React from "react";

const CardQuickBlip = () => {
  return (
    <div
      className="relative w-[250px] h-[130px] flex justify-center items-center shadow-sm"
      style={{
        background: `linear-gradient(to bottom right, #c6939a 20%, rgba(236, 178, 186, 0)), #ecb2ba`,
        boxShadow: "1px 1px 2px #c6939a",
      }}
    >
      {/* Top Tape */}
      <div className="absolute w-full h-[4vmin] top-0 flex justify-between opacity-50">
        <div
          className="w-[10vmin] h-[4vmin] bg-[#dbd8be] border-l border-r border-dotted border-[#b7b49d]"
          style={{ transform: "rotate(-45deg)" }}
        ></div>
        <div
          className="w-[10vmin] h-[4vmin] bg-[#dbd8be] border-l border-r border-dotted border-[#b7b49d]"
          style={{ transform: "rotate(45deg)" }}
        ></div>
      </div>

      <p className="z-10 text-center">drink more water</p>

      {/* Bottom Tape */}
      <div className="absolute w-full h-[4vmin] bottom-0 flex justify-between opacity-50">
        <div
          className="w-[10vmin] h-[4vmin] bg-[#dbd8be] border-l border-r border-dotted border-[#b7b49d]"
          style={{ transform: "rotate(45deg)" }}
        ></div>
        <div
          className="w-[10vmin] h-[4vmin] bg-[#dbd8be] border-l border-r border-dotted border-[#b7b49d]"
          style={{ transform: "rotate(-45deg)", top: "-3vmin" }}
        ></div>
      </div>
    </div>
  );
};

export default CardQuickBlip;
