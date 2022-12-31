import { Link, useParams } from "react-router-dom";

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

const MonthlyReportList = () => {
  const { year } = useParams();
  return (
    <div>
      <h1 className="my-12 text-center text-3xl">{year} Birth Report</h1>
      <div className="grid grid-cols-3 gap-32 my-12 w-full">
        {months.map((month) => {
          return (
            <Link
              key={month}
              className="btn"
              to={`/report/${year}/monthly/${months.indexOf(month) + 1}`}
            >
              {month}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MonthlyReportList;
