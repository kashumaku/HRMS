import EmpFilter from "../../components/Emp_filter";
import Employee from "../../components/employee";
import { employees } from "../../data/employee";

const Employees = () => {
  return (
    <div className="ml-4 w-full h-full flex flex-col items-center ">
      <h1 className="font-bold text-4xl my-8">Our Companies Employee</h1>
      <EmpFilter />
      <div className="text-xl w-full h-screen overflow-auto">
        <table
          className="w-full shadow-md"
          style={{ border: 1, borderCollapse: "collapse" }}
        >
          <thead>
            <tr className="shadow-md">
              <td className="font-bold text-xl">Name</td>
              <td className="font-bold text-xl">Photo</td>
              <td className="font-bold text-xl">Email</td>
              <td className="font-bold text-xl">Phone No.</td>
              <td className="font-bold text-xl">Department</td>
              <td className="font-bold text-xl">Salary</td>
              <td className="font-bold text-xl">Action</td>
            </tr>
          </thead>

          <tbody className="">
            {employees.map((emp) => (
              <Employee detail={emp} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Employees;
