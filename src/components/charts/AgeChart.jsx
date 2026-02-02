import { useEffect, useState } from "react";
import { fetchAgeAttrition } from "../../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
} from "recharts";

const COLORS = ["#4dabf7", "#ffa94d", "#69db7c", "#ff6b6b", "#845ef7"];

export default function AgeChart({ department }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchAgeAttrition(department).then((res) => setData(res.data));
  }, [department]);

  return (
    <>
      <h3>Attrition by Age</h3>

      <ResponsiveContainer width="100%" height="95%">
        <BarChart data={data}>
          <XAxis dataKey="age_group" />
          <YAxis />
          <Tooltip />

          <Bar dataKey="count" radius={[6, 6, 0, 0]} animationDuration={1000}>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

            {/* show value on top of bar */}
            <LabelList dataKey="count" position="top" />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
