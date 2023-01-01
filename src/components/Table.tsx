import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}
const Table = ({ children }: IProps) => {
  return (
    <div className="">
      <table className="table table-zebra w-full ">
        <thead>
          <tr>
            <th>Date</th>
            <th>Baby Gender</th>
            <th>Status</th>
            <th>Baby Weight</th>
            <th>Baby Length</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default Table;
