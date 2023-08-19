import React from "react";
import Chart from "react-apexcharts";

const StackedBarChart = () => {
  const options = {
    chart: {
      type: "bar",
      height: 350,
      stacked: true,
      grid:null
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    xaxis: {
      categories: ["01/01/2011 GMT", "01/02/2011 GMT", "01/03/2011 GMT", "01/04/2011 GMT", "01/05/2011 GMT", "01/06/2011 GMT"],
      labels: {
        style: {
          colors: ["#FF5733", "#42A5F5", "#66BB6A", "#FFC107"], // Set your desired label colors
        },
      },
    },
    yaxis: {
        labels: {
          style: {
            colors: ["#FF5733", "#42A5F5", "#66BB6A", "#FFC107"], // Set your desired Y-axis label colors
          },
        },},
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      offsetY: 0,
      labels: {
      
          colors: ["#FF5733", "#42A5F5", "#66BB6A", "#FFC107"], // Set your desired label colors
        
      },
    
    },
    grid: {
        show: false, // Remove the white grid lines in the background
      },
  };

  const series = [
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 67, 22, 43],
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 8, 13, 27],
    },
    {
      name: "PRODUCT C",
      data: [11, 17, 15, 15, 21, 14],
    },
    {
      name: "PRODUCT D",
      data: [21, 7, 25, 13, 22, 8],
    },
  ];

  return (
    <div className="stacked-bar-chart">
      <Chart options={options} series={series} type="bar" height={350} />
    </div>
  );
};

export default StackedBarChart;
