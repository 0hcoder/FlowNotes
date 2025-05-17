import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LoadingScreen = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to("#loding1", {
      duration: 2,
      scale: 1,
      ease: "power2.inOut",
      opacity: 1,
      zIndex: 10,
      
    });
    tl.to("#loding2", {
      duration: 2,
      scale: 1,
      ease: "power2.inOut",
      opacity: 1,
      zIndex: 20,
      
    },"+1");
    tl.to("#loding3", {
      duration: 2.5,
      ease: "power2.inOut",
      opacity: 1,
      zIndex: 30,
      scale: 1.2,
      width: "100%",
      height: "100%",
      top: "0%",
      left: "0%",
      transform: "translate(0%, 0%)",
    });
  });
  return (
    <div className="loadings relative w-full h-screen bg-black overflow-hidden">
      <div
        id="loding1"
        className="loding z-30 opacity-0 scale-0 bg-[#695eff] flex items-center justify-center absolute w-[80%] h-[80vh] top-[50%] left-[50%] -translate-1/2 rounded-4xl overflow-hidden p-3"
      >
        <h1 id="text1" className="text-8xl text-white">
          Write Your Notes ✍️
        </h1>
      </div>
      <div
        id="loding2"
        className="loding scale-0 opacity-0  z-20 bg-[#ffc703] flex items-center justify-center absolute w-[80%] h-[80vh] top-[50%] left-[50%] -translate-1/2 rounded-4xl overflow-hidden p-3"
      >
        <h1 className="text-8xl text-white">Drag & Drop Easily 📌</h1>
      </div>
      <div
        id="loding3"
        className="loding scale-0 opacity-0 z-10 bg-white flex items-center justify-center  absolute w-[80%] h-[80vh] top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 rounded-4xl overflow-hidden p-3"
      ></div>
    </div>
  );
};

export default LoadingScreen;
