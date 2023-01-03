import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../components/DropDown";
import dataService from "../../services/DataServices";

const data = ["2020", "2021", "2022", "2023"];
const AnnualReportList = () => {
  const [yearList, setYearList] = useState<string[]>([]);

  useEffect(() => {
    dataService.get('/api/v1/report')
      .then((data) => {
        let list: Array<string> = [];
        data.data.map((year: any) => list.push(year.year));
        setYearList(list);
      });
  }, []);

  return (
    <div>
      <h1 className="my-12 text-center text-3xl">Birth Report</h1>
      <div className="grid grid-cols-3 gap-32 my-12 w-full">
        {yearList?.map((year) => {
          return (
            <Dropdown key={year} title={year}>
              <li>
                <Link to={`/report/${year}/annual`}>Annual Report</Link>
              </li>
              <li>
                <Link to={`/report/${year}`}>Monthly Report</Link>
              </li>
            </Dropdown>
          );
        })}
      </div>
    </div>
  );
};

export default AnnualReportList;
