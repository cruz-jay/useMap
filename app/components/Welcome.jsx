import { Link } from "react-router";

export function Welcome() {
  return (
    <div className="h-screen w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
      <div className="relative h-full w-full flex items-center justify-center">
        {/* Background animated elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute w-64 h-64 rounded-full bg-blue-500 opacity-10 -top-20 -left-20 animate-pulse"></div>
          <div
            className="absolute w-96 h-96 rounded-full bg-indigo-500 opacity-10 bottom-10 -right-20 animate-pulse"
            style={{ animationDelay: "1s" }}></div>
          <div
            className="absolute w-48 h-48 rounded-full bg-purple-500 opacity-10 bottom-10 left-1/4 animate-pulse"
            style={{ animationDelay: "2s" }}></div>
        </div>

        {/* Main content container */}
        <div className="z-10 flex flex-row items-center justify-between w-full max-w-6xl px-8">
          {/* Left side with text content */}
          <div className="w-1/2 pr-8">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Go ahead.. Click it →
            </p>
          </div>

          <div className="w-1/2 flex justify-center relative">
            <div className="w-80 h-80 relative">
              <div
                className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full opacity-20 animate-ping"
                style={{ animationDuration: "3s" }}></div>
              <div className="absolute inset-0 border-4 border-white border-opacity-20 rounded-full"></div>
              <div className="absolute inset-8 bg-gradient-to-br from-blue-500 to-indigo-700 rounded-full shadow-2xl flex items-center justify-center">
                <div className="text-white text-6xl opacity-90">
                  <Link to="/past-adventures">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-full w-full p-8"
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
