import "./Insights.css";

export default function Insights() {
  return (
    <div className="insights-container">

      <Section title="Business Insights">
        <ul>
          <li>Employees with lower experience (0–3 years) show the highest attrition.</li>
          <li>Sales and Laboratory roles have higher attrition compared to other roles.</li>
          <li>Attrition is higher in the Low Salary Band.</li>
          <li>Employees in the 26–35 age group are more likely to leave.</li>
          <li>Department-wise analysis shows uneven attrition distribution.</li>
        </ul>
      </Section>

      <Section title="HR Recommendations">
        <ul>
          <li>Introduce mentorship programs for employees with less than 3 years of experience.</li>
          <li>Improve compensation for employees in the low salary band.</li>
          <li>Focus retention strategies on high-risk job roles.</li>
          <li>Improve work-life balance policies in high attrition departments.</li>
          <li>Conduct regular employee engagement surveys.</li>
        </ul>
      </Section>

      <Section title="Dataset Overview">
        <p><b>Source:</b> IBM HR Analytics Dataset</p>
        <p><b>Total Records:</b> 1470 employees</p>
        <p><b>Target Variable:</b> Attrition (Yes/No)</p>
        <p><b>Key Features:</b> Age, Job Role, Department, Salary Band, Experience Group</p>
      </Section>

      <Section title="Analytics Methodology">
        <ol>
          <li>Data cleaned using Python (Pandas & NumPy).</li>
          <li>KPIs validated using Power BI.</li>
          <li>Backend APIs built using Django.</li>
          <li>Dashboard developed using React and Recharts.</li>
          <li>Filters implemented to replicate Power BI slicers.</li>
        </ol>
      </Section>

      <Section title="KPI Definitions">
        <table>
          <thead>
            <tr>
              <th>KPI</th>
              <th>Definition</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>Total Employees</td><td>Total number of employees</td></tr>
            <tr><td>Attrition Count</td><td>Number of employees who left</td></tr>
            <tr><td>Attrition Rate</td><td>(Attrition Count / Total Employees) × 100</td></tr>
            <tr><td>Average Age</td><td>Mean age of employees</td></tr>
            <tr><td>Average Salary</td><td>Mean monthly income</td></tr>
            <tr><td>Average Years</td><td>Mean years at company</td></tr>
          </tbody>
        </table>
      </Section>

      <Section title="Project Limitations">
        <ul>
          <li>Dataset is static and simulated.</li>
          <li>No exit interview reasons available.</li>
          <li>No predictive model implemented.</li>
        </ul>
      </Section>

      <Section title="Future Enhancements">
        <ul>
          <li>Integrate machine learning for attrition prediction.</li>
          <li>Add salary benchmarking per department.</li>
          <li>Enable CSV upload feature.</li>
          <li>Add authentication for HR users.</li>
        </ul>
      </Section>

      <Section title="Technology Stack">
        <ul className="tech-list">
          <li>Python</li>
          <li>Pandas & NumPy</li>
          <li>SQL / MySQL</li>
          <li>Power BI</li>
          <li>Django REST API</li>
          <li>React</li>
          <li>Recharts</li>
          <li>CSS</li>
        </ul>
      </Section>

    </div>
  );
}

function Section({ title, children }) {
  return (
    <div className="insight-card">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
