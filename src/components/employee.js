import { useNavigate } from "react-router-dom";

const Employee = ({ detail }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/admin/dashboard/employee/" + id);
  };
  return (
    <tr
      onClick={() => handleClick(detail.id)}
      className="even:bg-neutral-200 odd:bg-teal-100 cursor-pointer "
    >
      <td className="px-3">{detail.firstName + " " + detail.lastName}</td>
      <td>
        <img
          src={detail.profilePhoto}
          alt=""
          className="rounded-full h-[100px] w-[100px]"
        />
      </td>
      <td>{detail.email}</td>
      <td>{detail.phoneNumber}</td>
      <td>{detail.department}</td>
      <td>{detail.salary}</td>
      <td>
        <span className="bg-green-500 px-2 py-1 mr-1">Edit</span>
        <span className="bg-red-500 px-2 py-1">Delete</span>
      </td>
    </tr>
  );
};

export default Employee;
