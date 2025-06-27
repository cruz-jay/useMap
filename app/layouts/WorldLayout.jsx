import { Outlet } from "react-router";

const WorldLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="h-full">
        <h1> THIS IS A SIDE BAR</h1>
      </div>
      <div className="flex-1 h-full relative">
        <h1> THIS IS A MAP</h1>
      </div>
      <Outlet />
    </div>
  );
};

export default WorldLayout;
