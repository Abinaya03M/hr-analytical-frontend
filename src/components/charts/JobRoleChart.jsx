import { useEffect, useState } from "react";
import { fetchJobRoleAttrition } from "../../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const COLORS = ["#4dabf7", "#ffa94d", "#e76f51", "#f4d35e", "#9775fa"];

export default function JobRoleChart({ department }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchJobRoleAttrition(department).then((res) => setData(res.data));
  }, [department]);

  return (
    <div style={{ width: "100%", height: 280 }}>
      <h3 style={{ textAlign: "center" }}>Attrition by Job Role</h3>

      <ResponsiveContainer width="100%" height="95%">
        <BarChart
          data={data}
          layout="vertical"   // 👈 makes it horizontal
          margin={{ left: 80, right: 30 }}
        >
          <XAxis type="number" />
          <YAxis dataKey="job_role" type="category" />
          <Tooltip />

          <Bar dataKey="count">
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

            {/* 👇 shows number at end of bar */}
            <LabelList dataKey="count" position="right" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
