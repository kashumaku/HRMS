import { FaSearch } from "react-icons/fa";

const EmpFilter = () => {
  return (
    <div className="flex justify-between items-center w-full shadow-md m-4 p-4 bg-gray-500/30 ">
      <div>
        <button className="bg-[teal] px-4 py-2 text-white font-bold">
          Add Employee
        </button>
      </div>
      <ul className="flex items-center gap-4">
        <li className="flex items-center bg-white rounded-lg overflow-hidden px-1">
          <input
            type="search"
            placeholder="Search"
            className="text-xl p-2 outline-none"
          />
          <FaSearch size={20} fill="teal" className="" />
        </li>
        <li className="flex items-center justify-center py-2 font-bold w-[90px] border border-gray-300 text-[teal] rounded-lg hover:bg-[teal] hover:text-white">
          All
        </li>
        <li className="flex items-center justify-center py-2 font-bold w-[90px] border border-gray-300 text-[teal] rounded-lg hover:bg-[teal] hover:text-white">
          Active
        </li>
        <li className="flex items-center justify-center py-2 font-bold w-[90px] border border-gray-300 text-[teal] rounded-lg hover:bg-[teal] hover:text-white">
          Leave
        </li>
        <li className="flex items-center justify-center py-2 font-bold w-[90px] border border-gray-300 text-[teal] rounded-lg hover:bg-[teal] hover:text-white">
          Male
        </li>
        <li className="flex items-center justify-center py-2 font-bold w-[90px] border border-gray-300 text-[teal] rounded-lg hover:bg-[teal] hover:text-white">
          Female
        </li>
        <li className="flex items-center justify-center py-2 font-bold w-[90px] border border-gray-300 text-[teal] rounded-lg hover:bg-[teal] hover:text-white">
          Team Leader
        </li>
      </ul>
    </div>
  );
};

export default EmpFilter;
