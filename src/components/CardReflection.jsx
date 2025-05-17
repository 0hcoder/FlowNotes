import React from "react";

const CardReflection = ({ note }) => {
  return (
    <div
      className="relative w-[90%] max-w-3xl min-w-[400px] min-h-[200px] mx-auto bg-white rounded-xl shadow-md overflow-visible"
      style={{ fontFamily: "'Roboto', sans-serif" }}
    >
      {/* Red dotted sidebar */}
      <div
        className="absolute top-0 bottom-0 left-0 w-[60px] border-r-4 border-red-600"
        style={{
          backgroundImage: "radial-gradient(#575450 6px, transparent 7px)",
          backgroundRepeat: "repeat-y",
          backgroundSize: "30px 30px",
        }}
      />

      {/* Content area with blue horizontal lines */}
      <div
        className="pl-[60px] pt-7 pr-0 pb-7"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, transparent 28px, #91D1D3 28px)",
          backgroundSize: "30px 30px",
        }}
      >
        <textarea
          readOnly
          defaultValue={`${note.title}\n${note.content}`}
          className="w-full bg-transparent text-mediumblue font-handlee font-bold text-lg leading-[30px] p-2 outline-none border-none resize-none overflow-hidden"
          style={{
            fontFamily: "'Handlee', cursive",
            color: "mediumblue",
            height: "auto",
          }}
          rows={note.content.split("\n").length + 2} // optional initial rows
        />
      </div>
    </div>
  );
};

export default CardReflection;
