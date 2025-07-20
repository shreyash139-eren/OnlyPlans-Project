import React from "react";
import { Line } from "react-chartjs-2";
import Chart from "chart.js/auto";

export default function MoodChart({ entries }) {
  // Prepare labels (dates) and map moods to numeric values
  const dates = entries.map(e => e.time);
  // Assign numeric mood scores
  const moodMap = { angry: 1, sad: 2, confused: 3, normal: 4, happy: 5 };
  const scores = entries.map(e => moodMap[e.mood] || 0);

  const data = {
    labels: dates,
    datasets: [
      {
        label: "Mood Over Time",
        data: scores,
        fill: false,
        borderColor: "#7F3FBF",
        backgroundColor: "#7F3FBF",
        tension: 0.2,
        pointRadius: 5,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        min: 1,
        max: 5,
        ticks: {
          stepSize: 1,
          callback: v => {
            const invMap = {1:"Angry",2:"Sad",3:"Confused",4:"Normal",5:"Happy"};
            return invMap[v];
          }
        }
      },
      x: { title: { display: true, text: "Date" } }
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          label: ctx => {
            return ["Scale: " + ctx.raw, entries[ctx.dataIndex].mood];
          }
        }
      }
    },
    maintainAspectRatio: false
  };

  return (
    <div style={{ height: 300, marginTop: 40 }}>
      <Line data={data} options={options} />
    </div>
  );
}
