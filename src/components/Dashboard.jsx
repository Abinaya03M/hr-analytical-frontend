import { useEffect, useState } from "react";
import { fetchKPIs } from "../services/api";
import AgeChart from "./charts/AgeChart";
import JobRoleChart from "./charts/JobRoleChart";
import SalaryChart from "./charts/SalaryChart";
import EducationChart from "./charts/EducationChart";

import YearsChart from "./charts/YearsChart";
import GenderChart from "./charts/GenderChart";
import "./Dashboard.css";

export default function Dashboard() {
  const [kpis, setKpis] = useState(null);

  const [department, setDepartment] = useState("All");
  const [salaryBand, setSalaryBand] = useState("All");
  const [ageGroup, setAgeGroup] = useState("All");

  useEffect(() => {
    fetchKPIs(department, salaryBand, ageGroup).then(res => setKpis(res.data));
  }, [department, salaryBand, ageGroup]);

  const resetFilters = () => {
    setDepartment("All");
    setSalaryBand("All");
    setAgeGroup("All");
  };
  if (!kpis) return <p>Loading...</p>;

  return (
    <div className="dashboard">

      <h1 className="title">HR Analytics Dashboard</h1>

      {/* KPI ROW */}
      <div className="kpi-slicer-row">

  {/* KPI CARDS */}
  <div className="kpi-row">
    <div className="kpi-card">
      <span>Total Employees</span>
      <h2>{kpis.total_employees}</h2>
    </div>
    <div className="kpi-card">
      <span>Attrition</span>
      <h2>{kpis.attrition_count}</h2>
    </div>
    <div className="kpi-card">
      <span>Attrition Rate</span>
      <h2>{kpis.attrition_rate}%</h2>
    </div>
      <div className="kpi-card">
      <span>Average Age</span>
      <h2>{kpis.avg_age}</h2>
    </div>
    <div className="kpi-card">
      <span>Average Years</span>
      <h2>{kpis.avg_years}</h2>
    </div>
      <div className="kpi-card">
        <span>Average Salary</span>
        <h2>${kpis.avg_salary}</h2>
      </div>
    

    
  </div>

  {/* SLICER */}
  <div className="slicer-panel">
    <h4>Filter</h4>

    <label>Department</label>
    <select
      value={department}
      onChange={(e) => setDepartment(e.target.value)}
    >
      <option value="All">All</option>
      <option value="Sales">Sales</option>
      <option value="Research & Development">R&D</option>
      <option value="Human Resources">HR</option>
    </select>
    {/* <label>Salary Band</label>
          <select value={salaryBand} onChange={e => setSalaryBand(e.target.value)}>
            <option value="All">All</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select> */}

          {/* <label>Age Group</label>
          <select value={ageGroup} onChange={e => setAgeGroup(e.target.value)}>
            <option value="All">All</option>
            <option value="18-25">18–25</option>
            <option value="26-35">26–35</option>
            <option value="36-45">36–45</option>
            <option value="46+">46+</option>
          </select> */}

          <button onClick={resetFilters} className="reset-btn">Reset Filters</button>
  </div>

</div>


      {/* CHART GRID */}
      <div className="chart-grid">
        <div className="chart-box"><AgeChart /></div>
        <div className="chart-box"><JobRoleChart /></div>
        <div className="chart-box"><SalaryChart /></div>
        <div className="chart-box"><YearsChart /></div>
        <div className="chart-box"><EducationChart /></div>
        <div className="chart-box"><GenderChart /></div>
        
      </div>

    </div>
  );
}
