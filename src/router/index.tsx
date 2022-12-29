import { Routes, Route } from "react-router-dom"
import HomeView from "../views/HomeView"
import AnnualReportList from "../views/report"
import MonthlyReportList from "../views/report/[year]"
import AnnualReportView from "../views/report/[year]/AnnualReportView"
import MonthlyReportView from "../views/report/[year]/MonthlyReportView"
// import NotFound from "../views/404"
const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<HomeView />} />
            <Route path="/report"element={<AnnualReportList/>}/>
            <Route path="/report/:year" element={<MonthlyReportList/>}/>
            <Route path="/report/:year/annual" element={<AnnualReportView/>} />
            <Route path="/report/:year/monthly/:month" element={<MonthlyReportView/>} />
        </Routes>
    )
}
export default Routers