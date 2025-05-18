import gsap from "gsap";
import { useEffect, useRef } from "react";

export default function Loader({ onComplete }) {
  const lettersRef = useRef([]);

  useEffect(() => {
    gsap.killTweensOf(lettersRef.current);

    const timeline = gsap.timeline({
      onComplete: onComplete,
      defaults: { ease: "power1.inOut" },
    });

    lettersRef.current.forEach((el, i) => {
      timeline.to(
        el,
        {
          y: -24,  // bounce height in pixels
          duration: 0.4,
          yoyo: true,
          repeat: 1,
        },
        i * 0.25
      );
    });

    // Small pause before finishing
    timeline.to({}, { duration: 0.5 });

    return () => {
      timeline.kill();
    };
  }, [onComplete]);

  const text = "FLOWNOTES";

  return (
    <div
      role="alert"
      aria-busy="true"
      aria-label="Loading"
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-red-100 to-cyan-100"
      style={{ WebkitBoxReflect: "below -0.4em linear-gradient(transparent, #00000045)" }}
    >
      {text.split("").map((letter, i) => (
        <span
          key={i}
          ref={(el) => (lettersRef.current[i] = el)}
          className="inline-block text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
          style={{ willChange: "transform" }}
        >
          {letter}
        </span>
      ))}
    </div>
  );
}
