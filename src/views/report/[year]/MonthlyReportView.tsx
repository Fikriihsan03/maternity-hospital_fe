import { useParams } from "react-router";
import TableReport from "../../../components/TableReport";

const MonthlyReportView = () => {
    const {year,month} = useParams()
    return ( 
        <TableReport>
        <h2 className="card-title text-3xl">
          {" "}
          {`${month!.charAt(0).toUpperCase() + month!.slice(1)} ${year}`} Birthing Annual Report
        </h2>
        <h2 className="font-bold text-lg">Total</h2>
        <p>Total Baby Birth : 12</p>
        <h2 className="font-bold text-lg">Birth Status</h2>
        <div className="grid grid-cols-4 gap-4 ">
          <p>Healthy Baby: 12</p>
          <p>Disabled Baby : 12</p>
          <p>Died Baby : 12</p>
        </div>
        <h2 className="font-bold text-lg">Gender</h2>
        <div className="grid grid-cols-4 gap-4">
          <p>Female Baby : 12</p>
          <p>Male Baby : 12</p>
        </div>
        <h2 className="font-bold text-lg">Birthing Method</h2>
        <div className="grid grid-cols-4 gap-4">
          <p>Lotus : 2 baby</p>
          <p>Water : 3 baby</p>
          <p>Vaginal: 8 baby </p>
          <p>Gentle : 0 baby</p>
          <p>Caesar : 2 baby </p>
        </div>
      </TableReport>
     );
}
 
export default MonthlyReportView;