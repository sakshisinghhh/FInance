import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Regions", "Number Of Appliers", "Approved"],
  ["Eastern India", 1000, 400],
  ["Western India", 1170, 460],
  ["Northern India", 1260, 1120],
  ["South India", 1030, 540],
];

// Material chart options
const options = {
  chart: {
    title: "Total Loans and Deposits",
    subtitle: "By Sub-regions",
  },
  bars:"horizontal",
};

function HorizontalBars() {
  return (
    <Chart style={{padding:"16px 0"}}
      // Note the usage of Bar and not BarChart for the material version
      chartType="Bar"
      data={data}
      options={options}
    />
  );
}

export default HorizontalBars;