import { useEffect, useState } from "react";
import { fetchYearsAttrition } from "../../services/api";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

export default function AgeChart({ department }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchYearsAttrition(department).then(res => setData(res.data));
  }, [department]);


  return (
    <>
      <h3>Attrition by Years at Company</h3>
      <ResponsiveContainer width="100%" height="95%">
        <LineChart data={data}>
          <XAxis dataKey="years_at_company" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="count"
            stroke="#ff922b"
            strokeWidth={3}
            dot={{ r: 5 }}
            animationDuration={1200}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
