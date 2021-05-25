export const buildChartData = (data, casesType = "cases") => {
    const chartData = [];
    let lastDatapoint;

    for (let date in data[casesType]) {
        if(lastDatapoint) {
            const newDataPoint = {
                x: date,
                y: data[casesType][date]
            };
            chartData.push(newDataPoint);
        }
        lastDatapoint = data[casesType][date];
    }
    
    return chartData;
}