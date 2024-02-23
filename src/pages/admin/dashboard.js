import { Outlet } from "react-router-dom";
import AdminMenu from "../../components/adminMenu";
import { ImMenu } from "react-icons/im";
import { useState } from "react";

const Dashboard = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="h-screen overflow-hidden">
      <div className=" h-[120px] bg-[teal] rounded-b-[60px] flex items-center relative">
        <div className="container m-auto  px-10">
          <h1 className="text-3xl font-bold text-white">My Company</h1>
        </div>
        <ImMenu
          onClick={() => setShowMenu(!showMenu)}
          size={34}
          className="absolute bottom-4 right-5 text-orange-400 bg-white p-1 rounded-xl  lg:hidden"
        />
      </div>
      <div className="flex px-2 lg:px-10 h-full">
        {/*  */}
        <div
          className={`absolute w-full duration-[0.2s] ${
            showMenu ? "top-0" : "top-[-100vh]"
          } bg-white lg:static lg:w-[400px] lg:block pr-4 `}
        >
          <AdminMenu setShowMenu={setShowMenu} />
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
