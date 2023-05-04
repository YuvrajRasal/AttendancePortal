import React from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import "./Chart.css";
import { Doughnut } from "react-chartjs-2";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const data = {
  datasets: [
    {
      data: [10, 20, 30],
      backgroundColor: ["red", "blue", "grey"],
    },
  ],
  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: ["Absent", "Present", "Not marked"],
};
const Chart = () => {
  return (
    <div
      className="chart"
      style={{
        width: "90%",
        height: "90%",
        marginInline: "2em",
        marginTop: "2em",
      }}
    >
      <Doughnut data={data} />
    </div>
  );
};

export default Chart;
