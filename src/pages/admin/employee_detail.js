import { useParams } from "react-router-dom";
import { employees } from "../../data/employee";

const EmpDetail = () => {
  const { id } = useParams();
  const employee = employees.filter((e) => e.id === Number(id))[0];
  console.log(employee);
  return (
    <div className="m-8 flex gap-4">
      <div>
        <img src={employee.profilePhoto} alt="" />
        <h1>{employee.firstName + " " + employee.lastName}</h1>
        <p>{employee.email}</p>
        <p>{employee.phoneNumber}</p>
      </div>
      <div>
        <p>{employee.department}</p>
        <p>{employee.status}</p>
        <p>{employee.status}</p>
        <p>{employee.startingDate}</p>
        <p>{employee.salary}</p>
        <p>{employee.address}</p>
      </div>
    </div>
  );
};

export default EmpDetail;
