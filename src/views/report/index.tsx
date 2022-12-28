import Dropdown from "../../components/DropDown";

const data = ["2020", "2021", "2022", "2023"];
const ReportView = () => {
  return (
    <div>
      <h1 className="my-12 text-center text-3xl">Birth Report</h1>
      <div className="grid grid-cols-3 gap-32 my-12 w-full">
        {data.map((year) => {
          return <Dropdown year={year} />;
        })}
      </div>
    </div>
  );
};

export default ReportView;
