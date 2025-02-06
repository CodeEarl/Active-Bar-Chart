document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("addCropForm");
    const viewChartButton = document.getElementById("viewChartButton");
    const resetDataButton = document.getElementById("resetDataButton");
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      
      const cropName = document.getElementById("cropName").value.trim();
      const cropQuantity = parseInt(document.getElementById("cropQuantity").value.trim(), 10);
  
      // To retrieve existing crops from localStorage or start empty
      let crops = JSON.parse(localStorage.getItem("crops")) || [];
  
      // To update an existing crop or add new one
      const existingCrop = crops.find(crop => crop.cropName.toLowerCase() === cropName.toLowerCase());
      if (existingCrop) {
        existingCrop.cropQuantity += cropQuantity;
      } else {
        crops.push({ cropName, cropQuantity });
      }
  
      // To save updated crops back to localStorage
      localStorage.setItem("crops", JSON.stringify(crops));
  
      // To clear the form inputs after adding a crop
      document.getElementById("cropName").value = "";
      document.getElementById("cropQuantity").value = "";
  
      alert("Crop added successfully!");
    });
  
    // To move to the next page when View Chart is clicked
    viewChartButton.addEventListener("click", function () {
      window.location.href = "chart.html";
    });
  
    // To reset the stored crop data when Reset Data is clicked
    resetDataButton.addEventListener("click", function () {
      if (confirm("Are you sure you want to clear all stored crop data?")) {
        localStorage.removeItem("crops");
        alert("All crop data has been cleared.");
      }
    });
  });  