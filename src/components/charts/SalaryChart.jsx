import { useEffect, useState } from "react";
import { fetchSalaryAttrition } from "../../services/api";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from "recharts";

const COLORS = ["#339af0", "#20c997", "#fab005", "#ff922b", "#ff6b6b"];

export default function SalaryChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchSalaryAttrition().then(res => setData(res.data));
  }, []);

  return (
    <div>
      <h3>Attrition by Salary Range</h3>

      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <XAxis dataKey="salary_band" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" radius={[6, 6, 0, 0]} animationDuration={1000}>
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
