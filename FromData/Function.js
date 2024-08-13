
function formatPrice(value, decimals) {
    return Number(value.toFixed(decimals));
}

function removeDuplicates(data) {
    const seen = new Set();
    return data.filter((item) => {
        const duplicate = seen.has(item[0]);
        seen.add(item[0]);
        return !duplicate;
    });
}

function SortData(data) {
      // Sort the filtered data by time in ascending order
      const sortedData = data.sort((a, b) => a[0] - b[0]);
      return sortedData;
  }

  function StartNewTime(interval, factor) {
      // Define the number of seconds per interval unit
      const intervalUnits = {
          's': 1,            // Seconds
          'm': 60,           // Minutes
          'h': 3600,         // Hours
          'd': 86400,        // Days
          'w': 604800        // Weeks
      };

      // Parse the interval to get the number and the unit
      const intervalValue = parseInt(interval.slice(0, -1), 10);
      const intervalUnit = interval.slice(-1);
      //console.log(intervalValue, intervalUnit, intervalUnits[intervalUnit], factor)
      // Calculate the total number of seconds
      const totalSeconds = intervalValue * intervalUnits[intervalUnit] * factor * 1000;
      //console.log("totalSeconds", totalSeconds)



      return totalSeconds;
  }
  function validateData(data) {
      return data.filter(item => item !== null && item !== undefined);
  }

  function formatPrice(price, decimal) {
      return price.toFixed(decimal);
  }


  // script.js
function showLoadingBackdrop() {
    document.getElementById('loading-backdrop').style.display = 'flex';
}

function hideLoadingBackdrop() {
    document.getElementById('loading-backdrop').style.display = 'none';
}

function simulateLoading() {
    showLoadingBackdrop();
    // Simulate a loading process (e.g., API call) with a timeout
   // setTimeout(hideLoadingBackdrop, 3000); // Hide after 3 seconds
}

function convertTimestampToDateTime(timestamp) {
    // Create a new Date object using the timestamp
    const date = new Date(timestamp);
  
    // Extract the date and time components
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');

    // Format the date and time as a string
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;

    return formattedDateTime;
}
