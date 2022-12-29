import { useEffect, useState } from "react";
import { useParams } from "react-router";
import BirthHistoryTable from "../../../components/BirthHistoryTable";
import Card from "../../../components/Card";
import DetailModal from "../../../components/DetailModal";
import Modal from "../../../components/Modal";
import ReportForm from "../../../components/ReportForm";
import { IReportData } from "./reportInterface";
const months = [
  "january",
  "february",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "desember",
];
const url = process.env.REACT_APP_API_URL;

const MonthlyReportView = () => {
  const { year, month = "" } = useParams();
  const [reportData, setReportData] = useState<IReportData>();

  const [rowData, setRowData] = useState({
    id: 0,
    mother_name: "",
    mother_age: 0,
    gestational_age: 0,
    baby_gender: 0,
    baby_weight: 0,
    baby_length: 0,
    birth_description: "",
    birthing_method: 0,
    created_at: "",
    updated_at: "",
  });
  let monthsIndex = +month;
  const monthName = months[monthsIndex - 1];

  useEffect(() => {
    fetch(`${url}/api/v1/child-birth/report/${year}/monthly/${month}`)
      .then((res) => res.json())
      .then((data) => {
        setReportData(data);
      });
  }, []);

  const passingRowData = (data: any) => {
    setRowData(data);
  };
  const deleteHandler = (id: number) => {
    fetch(`${url}/api/v1/child-birth/${id}`, {
      method: "DELETE", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 200) {
          alert("success");
        }
        alert(data.message);
        return window.location.reload();
        // console.log("failed");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Card>
        <h2 className="card-title text-3xl">
          {" "}
          {`${
            monthName.charAt(0).toUpperCase() + monthName.slice(1)
          } ${year}`}{" "}
          Birthing Annual Report
        </h2>
        <h2 className="font-bold text-lg">Total</h2>
        <p>Total Baby Birth : {reportData?.data.totalBaby}</p>
        <h2 className="font-bold text-lg">Birth Status</h2>
        <div className="grid grid-cols-4 gap-4 ">
          <p>Healthy Baby: {reportData?.data.birth_description.healthy}</p>
          <p>Disabled Baby : {reportData?.data.birth_description.disabled}</p>
          <p>Died Baby : {reportData?.data.birth_description.died}</p>
        </div>
        <h2 className="font-bold text-lg">Gender</h2>
        <div className="grid grid-cols-4 gap-4">
          <p>Female Baby : {reportData?.data.baby_gender.female}</p>
          <p>Male Baby : {reportData?.data.baby_gender.male}</p>
        </div>
        <h2 className="font-bold text-lg">Birthing Method</h2>
        <div className="grid grid-cols-4 gap-4">
          <p>Lotus : {reportData?.data.birthing_method.lotus} baby</p>
          <p>Water : {reportData?.data.birthing_method.water} baby</p>
          <p>Vaginal: {reportData?.data.birthing_method.vaginal} baby </p>
          <p>Gentle : {reportData?.data.birthing_method.gentle} baby</p>
          <p>Caesar : {reportData?.data.birthing_method.caesar} baby </p>
        </div>
        <h2 className="font-bold text-lg">Average Gestational Age A Year</h2>
        <div className="grid grid-cols-4 gap-4">
          <p>Average : {reportData?.average_gestational_age}</p>
        </div>
        <h2 className="font-bold text-lg">Maternal Age Group</h2>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th>Age</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {reportData?.maternal_age_group.map((item) => {
                return (
                  <tr>
                    <th>{item.mother_age}</th>
                    <td>{item.total}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>
      <BirthHistoryTable
        year={year}
        month={month}
        passingRowData={passingRowData}
      />
      {/* detail modal */}
      <input type="checkbox" id="detail_modal" className="modal-toggle" />
      <DetailModal rowData={rowData} />
      {/* edit modal*/}
      <input type="checkbox" id="home_report-input" className="modal-toggle" />
      <Modal>
        <ReportForm editData={rowData} />
      </Modal>

      <input type="checkbox" id="delete_modal" className="modal-toggle" />
      <Modal>
        <h3 className="font-bold text-lg">Are You Sure ?</h3>
        <p className="py-4">you can't restore after delete this</p>
        <div className="modal-action">
          <label htmlFor="delete_modal" className="btn btn-secondary">
            No
          </label>
          <label
            onClick={() => deleteHandler(rowData.id)}
            className="btn btn-primary"
          >
            yes
          </label>
        </div>
      </Modal>
    </div>
  );
};

export default MonthlyReportView;
