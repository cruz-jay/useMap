import { Link } from "react-router";

export function Welcome() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-[#0e1c26] via-[#13232c] to-[#172a32] overflow-hidden">
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Background animated elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute w-64 h-64 rounded-full bg-[#21373f] opacity-20 -top-20 -left-20 animate-pulse"></div>
          <div
            className="absolute w-96 h-96 rounded-full bg-[#253e45] opacity-20 bottom-10 -right-20 animate-pulse"
            style={{ animationDelay: "1s" }}></div>
          <div
            className="absolute w-48 h-48 rounded-full bg-[#2a454b] opacity-20 bottom-10 left-1/4 animate-pulse"
            style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Main content container */}
        <div className="z-10 flex flex-row items-center justify-between w-full max-w-6xl px-8">
          {/* Left side with text content */}
          <div className="w-1/2 pr-8"></div>

          <div className="w-1/2 flex justify-center relative">
            <div className="w-80 h-80 relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-[#1c3139] to-[#253e45] rounded-full opacity-30 animate-ping"
                style={{ animationDuration: "3s" }}></div>
              <div className="absolute inset-0 border-4 border-gray-400 border-opacity-30 rounded-full"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-[#21373f] to-[#2a454b] rounded-full shadow-2xl flex items-center justify-center hover:from-[#253e45] hover:to-[#2a454b] transition-all duration-300">
                <div className="text-gray-200 text-6xl opacity-90 hover:opacity-100 transition-opacity duration-300">
                  <Link to="/past-adventures">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full p-8 hover:scale-110 transition-transform duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
