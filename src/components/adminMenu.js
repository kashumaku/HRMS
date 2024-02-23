import admin from "../images/admin.png";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { AiOutlineDashboard } from "react-icons/ai";
import { FcLeave } from "react-icons/fc";
import { ImProfile } from "react-icons/im";
import { FaPeopleLine } from "react-icons/fa6";
import { IoSettingsOutline } from "react-icons/io5";
import { TbReportSearch, TbCategoryPlus } from "react-icons/tb";
import { MdManageHistory } from "react-icons/md";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const AdminMenu = ({ setShowMenu }) => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);
  return (
    <div className="w-full h-full lg:relative bottom-[50px]  rounded-lg shadow-lg bg-gray-300">
      <div className="grid grid-cols-2 gap-4 mt-8">
        <Link
          to="/admin/profile"
          onClick={() => {
            setPath(location.pathname);
            setShowMenu(false);
          }}
          className="col-span-2 border border-gray-400 rounded-lg shadow-lg flex flex-col items-center p-2"
        >
          <img
            src={admin}
            alt=""
            className="w-[150px] h-[150px] rounded-full"
          />
          <p>Welcome Admin</p>
        </Link>

        <Link
          to="/admin/dashboard"
          onClick={() => {
            setPath(location.pathname);
            setShowMenu(false);
          }}
          className="flex items-center justify-center h-[80px] border border-gray-400 rounded-lg bg-[teal]
           text-white font-bold hover:bg-orange-500"
        >
          <AiOutlineDashboard size={30} />
          Dashboard
        </Link>

        <Link
          to="/admin/dashboard/employees"
          onClick={() => {
            setPath(location.pathname);
            setShowMenu(false);
          }}
          className="flex items-center justify-center h-[80px] border border-gray-400 rounded-lg bg-[teal]
           text-white font-bold hover:bg-orange-500"
        >
          <FaPeopleLine size={30} />
          Employees
        </Link>

        <Link
          to="/admin/dashboard/leave"
          onClick={() => {
            setPath(location.pathname);
            setShowMenu(false);
          }}
          className="flex items-center justify-center h-[80px] border border-gray-400 rounded-lg bg-[teal]
           text-white font-bold hover:bg-orange-500"
        >
          <FcLeave size={30} />
          Leave
        </Link>
        <Link
          to="/admin/dashboard/profile"
          onClick={() => {
            setPath(location.pathname);
            setShowMenu(false);
          }}
          className="flex items-center justify-center h-[80px] border border-gray-400 rounded-lg bg-[teal]
           text-white font-bold hover:bg-orange-500"
        >
          <TbCategoryPlus size={30} />
          Department
        </Link>
        <Link
          to="/admin/dashboard/profile"
          onClick={() => {
            setPath(location.pathname);
            setShowMenu(false);
          }}
          className="flex items-center justify-center h-[80px] border border-gray-400 rounded-lg bg-[teal]
           text-white font-bold hover:bg-orange-500"
        >
          <ImProfile size={30} />
          Profile
        </Link>

        <Link
          to="/admin/dashboard/profile"
          onClick={() => {
            setPath(location.pathname);
            setShowMenu(false);
          }}
          className="flex items-center justify-center h-[80px] border border-gray-400 rounded-lg bg-[teal]
           text-white font-bold hover:bg-orange-500"
        >
          <MdManageHistory size={30} />
          Mannage
        </Link>

        <Link
          to="/admin/dashboard/profile"
          onClick={() => {
            setPath(location.pathname);
            setShowMenu(false);
          }}
          className="flex items-center justify-center h-[80px] border border-gray-400 rounded-lg bg-[teal]
           text-white font-bold hover:bg-orange-500"
        >
          <TbReportSearch size={30} />
          Report
        </Link>

        <Link
          to="/admin/dashboard/profile"
          onClick={() => {
            setPath(location.pathname);
            setShowMenu(false);
          }}
          className="flex items-center justify-center h-[80px] border border-gray-400 rounded-lg bg-[teal]
           text-white font-bold hover:bg-orange-500"
        >
          <HiOutlineBuildingOffice2 size={30} />
          Company
        </Link>

        <Link
          to="/admin/dashboard/profile"
          onClick={() => {
            setPath(location.pathname);
            setShowMenu(false);
          }}
          className="flex items-center justify-center h-[80px] border border-gray-400 rounded-lg bg-[teal]
           text-white font-bold hover:bg-orange-500"
        >
          <IoSettingsOutline size={30} />
          Setting
        </Link>
        <Link
          to="/admin/dashboard/profile"
          onClick={() => {
            setPath(location.pathname);
            setShowMenu(false);
          }}
          className="flex items-center justify-center h-[80px] border border-gray-400 rounded-lg bg-[teal]
           text-white font-bold hover:bg-orange-500"
        >
          <IoSettingsOutline size={30} />
          Log out
        </Link>
      </div>
    </div>
  );
};

export default AdminMenu;
