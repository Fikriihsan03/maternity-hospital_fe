import { ReactNode } from "react";

interface IProps{
    children:ReactNode
}
const Table = ({children}:IProps) => {
    return ( <div className="">
    <table className="table table-zebra w-full ">
      <thead>
        <tr>
        <th>Date</th>
          <th>Mother Name</th>
          <th>baby_gender</th>
          <th>Mother Age</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {children}
        {/* <!-- row 1 -->
        <tr>
          <th>1</th>
          <td>Cy Ganderton</td>
          <td>Quality Control Specialist</td>
          <td>Blue</td>
        </tr>
        <!-- row 2 -->
        <tr>
          <th>2</th>
          <td>Hart Hagerty</td>
          <td>Desktop Support Technician</td>
          <td>Purple</td>
        </tr>
        <!-- row 3 -->
        <tr>
          <th>3</th>
          <td>Brice Swyre</td>
          <td>Tax Accountant</td>
          <td>Red</td>
        </tr> */}
      </tbody>
    </table>
  </div> );
}
 
export default Table;