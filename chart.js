document.addEventListener("DOMContentLoaded", function () {
  // To retrieve stored crop data from localStorage in the browser
  const crops = JSON.parse(localStorage.getItem("crops")) || [];

  // To prepare data for the chart with crop names as labels and quantities as data points
  const labels = crops.map((crop) => crop.cropName);
  const dataValues = crops.map((crop) => crop.cropQuantity);
  const backgroundColors = crops.map(
    () => `hsl(${Math.random() * 360}, 70%, 60%)`
  );

  const ctx = document.getElementById("myChart").getContext("2d");
  const chartData = {
    labels: labels,
    datasets: [
      {
        label: "Number of Crops",
        data: dataValues,
        backgroundColor: backgroundColors,
        borderWidth: 1,
      },
    ],
  };

  new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: { beginAtZero: true },
      },
    },
  });
});