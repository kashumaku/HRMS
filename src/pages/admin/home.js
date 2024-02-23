import pieChart from "../../images/piechart.PNG";
import { recentLeave } from "../../data/recent_leave";
import RecentLeave from "../../components/recent-leave";
const Home = () => {
  return (
    <div className="lg:ml-4 w-full overflow-scroll max-lg:pb-32  ">
      <div className=" mt-4 bg-white grid grid-cols-2 gap-8">
        <div className="shadow-lg">
          <h1>Total Employee</h1>
          <img src={pieChart} alt="" />
        </div>
        <div className="shadow-lg col-span-2 md:col-span-1">
          {" "}
          <ul className="grid grid-cols-2 gap-2 h-[400px] md:h-full p-4">
            <li className="bg-white w-full border flex flex-col items-center border-gray-400 rounded-lg h-full">
              <h2 className="text02xl font-bold p-2">Total Employees</h2>{" "}
              <hr className="w-full" />
              <span>700 </span>
            </li>
            <li className="bg-white w-full border flex flex-col items-center border-gray-400 rounded-lg h-full">
              <h2 className="text02xl font-bold p-2">Total Team Leaders</h2>
              <hr className="w-full" />
              <span>50 </span>
            </li>
            <li className="bg-white w-full border flex flex-col items-center border-gray-400 rounded-lg h-full">
              <h2 className="text02xl font-bold p-2">Current Leaves</h2>
              <hr className="w-full" />
              <span>10 </span>
            </li>
            <li className="bg-white w-full border flex flex-col items-center border-gray-400 rounded-lg h-full">
              <h1 className="text02xl font-bold p-2">Total Employee Salary</h1>{" "}
              <hr className="w-full" />
              <span>$ 40000 </span>
            </li>
            <li className="bg-white w-full border flex flex-col items-center border-gray-400 rounded-lg h-full">
              <h2 className="text02xl font-bold p-2">Total Admins</h2>
              <hr className="w-full" /> <span>4</span>
            </li>
          </ul>
        </div>

        <div className="shadow-lg flex flex-col col-span-2 lg:col-span-1 items-center ">
          <h1 className="text-2xl font-bold p-4">
            Recent Leave request Employees
          </h1>
          <hr className="w-full" />
          <div className="w-full h-full overflow-auto">
            <table className="w-full h-full">
              <tr>
                <td>Name</td>
                <td>Department</td>
                <td>Date</td>
                <td>Action</td>
              </tr>
              {recentLeave.map((recent) => (
                <RecentLeave detail={recent} />
              ))}
            </table>
          </div>
        </div>

        <div className="shadow-lg">
          <img src={pieChart} alt="" />
          Team leaders
        </div>
      </div>
    </div>
  );
};

export default Home;
