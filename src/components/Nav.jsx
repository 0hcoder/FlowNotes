import { Link } from "react-router-dom";
import { MdLayersClear, MdNoteAdd } from "react-icons/md";

const Nav = () => {
  return (
    <div>
      <nav className="w-full bg-[antiquewhite] border-gray-200  shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
              FlowNotes
            </span>
          </Link>
          <div className="flex items-center gap-2 md:order-2">
            <Link to={"/create/note"}>
            <MdNoteAdd className="text-green-400"/>
            </Link>
            <MdLayersClear className="text-red-600 cursor-pointer" onClick={()=>{
              localStorage.removeItem("NewNotes");
              window.location.reload();
            }}/>
          </div>
         
        </div>
      </nav>
    </div>
  );
};

export default Nav;
