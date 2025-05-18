import React from "react";

const CardMemo = ({ note }) => {
  return (
    <div className="max-w-[350px] min-w-[300px] w-full mx-auto mb-6">
      <div
        className="relative flex justify-center items-center rotate-[10deg] origin-top-left shadow-[3px_3px_2px_#c9bf8d] px-6 py-5"
        style={{
          background: "linear-gradient(135deg, #e5c93d 30%, #ffed87)",
          borderRadius: "8px",
          minHeight: "175px",
          width: "100%",
          wordBreak: "break-word",
        }}
      >
        {/* Pin */}
        <div className="absolute left-5 top-0 w-[60px] h-[50px]">
          <div
            className="absolute top-[18px] left-[-8px] w-[35px] h-[35px] rounded-full"
            style={{
              background:
                "radial-gradient(#c9bf8d 20%, rgba(201, 191, 141, 0))",
            }}
          ></div>

          <div
            className="absolute w-[5px] h-[20px] rounded-b-[30%] border-b border-gray-500"
            style={{
              background:
                "linear-gradient(to right, #808080 40%, #eae8e8 50%, #808080)",
              transform: "rotate(50deg)",
              transformOrigin: "bottom left",
              top: "15px",
            }}
          ></div>

          <div
            className="absolute right-[15px] w-[35px] h-[35px] rounded-full"
            style={{
              background:
                "radial-gradient(circle at bottom right, #fc7e7d 25%, #9e0608 90%, #d02627)",
            }}
          >
            <div
              className="absolute top-0 left-[-2px] w-[20px] h-[30px] rounded-b-[40%]"
              style={{
                background:
                  "linear-gradient(to right, #9e0608 30%, #d02627 90%, #fc7e7d)",
                transform: "rotate(55deg)",
                transformOrigin: "100% 100%",
              }}
            ></div>

            <div
              className="absolute right-[-10px] top-[-5px] w-[25px] h-[25px] rounded-full"
              style={{
                background:
                  "radial-gradient(circle at right, #fc7e7d 30%, #d02627, #9e0608 80%)",
              }}
            ></div>
          </div>
        </div>

        {/* Note Content */}
        <p className="z-10 text-gray-800 mt-4 font-honey text-xl leading-6 text-center whitespace-pre-wrap break-words">
          {note.content}
        </p>
      </div>
    </div>
  );
};

export default CardMemo;
