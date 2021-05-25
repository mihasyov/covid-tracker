import React, { useState, useEffect } from 'react';
import { buildChartData } from '../utils/buildChartData';
import { graphOptions } from '../utils/graphOptions';
import { Line } from 'react-chartjs-2';


function LineGraph({ casesType = "cases" }) {
    const [data, setData] = useState({});
    console.log("graph render")

    useEffect(() => {
        fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=180")
            .then(resp => resp.json())
            .then(data => {
                const chartData = buildChartData(data, casesType);
                setData(chartData);
            });
    }, [casesType]);

    
    return (
        <div className="app__graph">
            {data?.length > 0 && (
                <Line
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(204, 16, 52, 0.7)",
                                borderColor: "#CC1034",
                                data
                            }
                        ]
                    }}
                    options={graphOptions}
                />
            )}
        </div>
    )
}

export default LineGraph
