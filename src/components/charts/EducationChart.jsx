import { useEffect, useState } from "react";
import { fetchEducationAttrition } from "../../services/api";
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

const COLORS = ["#4dabf7", "#69db7c", "#ffa94d", "#ff6b6b", "#845ef7"];

export default function EducationChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchEducationAttrition().then((res) => setData(res.data));
  }, []);

  return (
    <>
      <h3>Attrition by Experience Group</h3>

      <ResponsiveContainer width="100%" height="85%">
        <BarChart data={data}>
          <XAxis dataKey="experience_group" fontSize={10} />
          <YAxis />
          <Tooltip />

          <Bar dataKey="count" radius={[6, 6, 0, 0]} animationDuration={800}>
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}

            {/* Value on top of bar */}
            <LabelList dataKey="count" position="top" fontSize={10} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}
