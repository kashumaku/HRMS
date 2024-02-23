import { useNavigate } from "react-router-dom";

const RecentLeave = ({ detail }) => {
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate("/admin/dashboard/employee/" + id);
  };
  return (
    <tr
      onClick={() => handleClick(detail.id)}
      className="p-8 even:bg-neutral-200 odd:bg-teal-100 cursor-pointer text-black"
    >
      <td className="pl-3">{detail.firstName + " " + detail.lastName}</td>
      <td>{detail.department}</td>
      <td>{detail.date}</td>
      <td className="flex flex-col lg:flex-col items-center justify-center gap-2 p-1">
        <button className="bg-[green] px-4 py-1 w-full ">Approve</button>
        <button className="bg-[orange] px-4 py-1 w-full">Denay</button>
      </td>
    </tr>
  );
};

export default RecentLeave;
