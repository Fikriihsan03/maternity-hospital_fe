import { useEffect, useState } from "react";
import { IHistory } from "../views/report/[year]/birthHistoryInterface";
import Dropdown from "./DropDown";
import Table from "./Table";

interface IProps {
  passingRowData: (data: object) => void;
  year?: string;
  month?: string
}
const url = process.env.REACT_APP_API_URL;

function padTo2Digits(num: number) {
  return num.toString().padStart(2, "0");
}

function formatDate(date: Date) {
  return [
    padTo2Digits(date.getDate()),
    padTo2Digits(date.getMonth() + 1),
    date.getFullYear(),
  ].join("-");
}

const BirthHistoryTable = ({ passingRowData, year, month="" }: IProps) => {
  const [birthHistory, setBirthHistory] = useState<IHistory>();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(
      `${url}/api/v1/child-birth/birth-history?page=${page}&per-page=2&year=${year}&month=${month}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(`${url}/api/v1/child-birth/birth-history?page=${page}&per-page=2&year=${year}&month=${month}`)
        if (data.message == 'success') {
          setBirthHistory(data.data);
        }
      });
  }, [page]);
  if (birthHistory) {
    return (
      <div className="my-12">
        <h1 className="font-bold text-center my-12 text-3xl">Birth History</h1>
        <Table>
          {birthHistory?.data.map((data) => {
            return (
              <tr>
                <td>{formatDate(new Date(data.updated_at))}</td>
                <td>{data.mother_name}</td>
                <td>{data.baby_gender}</td>
                <td>{data.mother_age}</td>
                <td>
                  <Dropdown title="Action">
                    <li onClick={() => passingRowData(data)}>
                      <label htmlFor="detail_modal" className="btn btn-ghost">
                        Detail
                      </label>
                    </li>
                    <li onClick={() => passingRowData(data)}>
                      <label
                        htmlFor="home_report-input"
                        className="btn btn-ghost"
                      >
                        Edit
                      </label>
                    </li>
                    <li onClick={() => passingRowData(data)}>
                      <label htmlFor="delete_modal" className="btn btn-ghost">
                        Delete
                      </label>
                    </li>
                  </Dropdown>
                </td>
              </tr>
            );
          })}
        </Table>
        <div className="flex justify-center items-center gap-16 mt-12">
          <button
            disabled={page <= 1}
            className="btn btn-primary"
            onClick={() => setPage(page - 1)}
          >
            prev
          </button>
          <p>
            {birthHistory?.current_page} from {birthHistory?.last_page}
          </p>
          <button
            disabled={page >= birthHistory!?.last_page}
            className="btn btn-primary"
            onClick={() => setPage(page + 1)}
          >
            Next
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default BirthHistoryTable;
