import { Link } from "react-router-dom";
import "./LandingPage.css";

export default function LandingPage() {
  return (
    <section className="landing-container">
      <div className="landing-content">

        <h1>HR Analytics – Employee Attrition Analysis</h1>

        <p className="subtitle">
          A data-driven analytics project to understand employee attrition trends
          using Power BI, Python, SQL, and a React dashboard powered by live backend APIs.
        </p>

        <div className="landing-cards">
          <div className="info-card">
            <h3>🎯 Problem Statement</h3>
            <p>
              High employee attrition increases recruitment cost and affects
              organizational productivity. This project analyzes HR data to
              identify key factors influencing employee turnover.
            </p>
          </div>

          <div className="info-card">
            <h3>🛠 Tools & Technologies</h3>
            <ul>
              <li>Python (Pandas, NumPy)</li>
              <li>SQL & MySQL</li>
              <li>Power BI (Data Cleaning & KPI Validation)</li>
              <li>Django REST API</li>
              <li>React.js Dashboard</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>📊 Key Business Insights</h3>
            <ul>
              <li>Higher attrition observed in low salary bands</li>
              <li>Early-career employees show higher turnover</li>
              <li>Sales and R&D departments experience more attrition</li>
              <li>Compensation and experience strongly influence retention</li>
            </ul>
          </div>
        </div>

       <Link to="/dashboard" className="view-dashboard-btn">
  View Dashboard ↓
</Link>


      </div>
    </section>
  );
}
