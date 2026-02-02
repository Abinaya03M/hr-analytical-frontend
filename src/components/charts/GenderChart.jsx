import { useEffect, useState } from "react";
import { fetchGenderAttrition } from "../../services/api";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = ["#339af0", "#ff6b6b"];

export default function AgeChart({ department }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchGenderAttrition(department).then(res => setData(res.data));
  }, [department]);


  return (
    <>
      <h3>Attrition by Gender</h3>
      <ResponsiveContainer width="100%" height="95%">
        <PieChart>
          <Pie
            data={data}
            dataKey="count"
            nameKey="gender"
            innerRadius={50}
            outerRadius={90}
            animationDuration={1000}
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}
