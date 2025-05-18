import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { MdLayersClear, MdNoteAdd } from "react-icons/md";
import gsap from "gsap";

const Nav = () => {
  const navRef = useRef(null);
  const addIconRef = useRef(null);
  const clearIconRef = useRef(null);

  useEffect(() => {
    // Navbar slide-down on mount
    gsap.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });

    // Pop-in icons
    gsap.from([addIconRef.current, clearIconRef.current], {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      stagger: 0.2,
      delay: 0.6,
      ease: "back.out(1.7)",
    });
  }, []);

  const clearNotes = () => {
    localStorage.removeItem("NewNotes");
    window.location.reload();
  };

  return (
    <nav
      ref={navRef}
      className="w-full bg-[antiquewhite] border-gray-200 shadow-md fixed top-0 z-50"
    >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Brand */}
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
            FlowNotes
          </span>
        </Link>

        {/* Icons */}
        <div className="flex items-center gap-4 md:order-2">
          {/* Add Note Icon with Tooltip */}
          <div className="relative group" ref={addIconRef}>
            <Link to="/create/note">
              <MdNoteAdd className="text-green-500 text-4xl cursor-pointer hover:scale-110 hover:rotate-6 transition-transform duration-300" />
            </Link>
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-[#6ae066] opacity-[0.9] text-white text-xs rounded-md px-2 py-1 whitespace-nowrap">
              Create Note
            </span>
          </div>

          {/* Clear Notes Icon with Tooltip */}
          <div className="relative group" ref={clearIconRef}>
            <MdLayersClear
              className="text-red-600 text-4xl cursor-pointer hover:scale-110 hover:-rotate-6 transition-transform duration-300"
              onClick={clearNotes}
            />
            <span className="absolute bottom-[-30px] left-1/2 transform -translate-x-1/2 scale-0 group-hover:scale-100 transition-all bg-[#fc7f7f] opacity-[0.9] text-white text-xs rounded-md px-2 py-1 whitespace-nowrap">
              Clear Notes
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
