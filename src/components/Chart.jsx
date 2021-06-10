import React, { useEffect } from "react";
import { connect } from "react-redux";

import { Line } from "react-chartjs-2";

import { buildChartData } from "../utils/buildChartData";
import { chartOptions } from "../utils/chartOptions";

import { fetchChartData } from "../redux/actions/actions";

const Chart = ({ chartData, casesType, fetchChartData }) => {
  useEffect(() => {
    fetchChartData(casesType);
  }, [casesType, fetchChartData]);

  return (
    <div className="app__chart">
      {Object.keys(chartData).length && (
        <Line
          data={{
            datasets: [
              {
                backgroundColor: "rgba(204, 16, 52, 0.7)",
                borderColor: "#CC1034",
                data: buildChartData(chartData, casesType),
              },
            ],
          }}
          options={chartOptions}
        />
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  chartData: state.chartData,
});

export default connect(mapStateToProps, { fetchChartData })(Chart);
