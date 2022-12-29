import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {
  title: string;
  children : ReactNode
}

const Dropdown = ({ title,children }: IProps) => {
  return (
    <div className="dropdown mx-auto my-0">
      <label tabIndex={0} className="btn m-1">
        {title}
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        {children}
        {/* <li>
          <Link to={`/report/${year}/annual`}>Annual Report</Link>
        </li>
        <li>
          <Link to={`/report/${year}`}>Monthly Report</Link>
        </li> */}
      </ul>
    </div>
  );
};

export default Dropdown;
