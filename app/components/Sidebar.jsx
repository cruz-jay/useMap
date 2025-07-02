import Logo from "./Logo";
import SideBarContext from "./SideBarContext";

function Sidebar() {
  return (
    <div className="relative bg-gradient-to-bl from-[#0e1c26] via-[#13232c] to-[#172a32] text-white h-full w-96 flex flex-col shadow-lg">
      <div className="p-6 flex flex-col h-full">
        <div className="mb-8">
          <Logo />
        </div>

        <div>
          <SideBarContext />
        </div>

        <div className="mt-auto pt-4 border-t border-[#21373f] text-sm text-gray-400 w-full flex flex-col items-center">
          <a href="/" className="block hover:text-gray-300 transition-colors">
            <p> Click to go home [useMap]</p>
          </a>
          <a
            href="https://headspaceandtiming.com/"
            className="block hover:text-gray-300 transition-colors">
            <p> Click to go home [HS&T] </p>
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none">
        <div className="w-40 h-40 rounded-full bg-[#1c3139]/20 absolute -bottom-20 -left-20"></div>
        <div className="w-32 h-32 rounded-full bg-[#253e45]/30 absolute -bottom-10 right-10"></div>
      </div>
    </div>
  );
}

export default Sidebar;
