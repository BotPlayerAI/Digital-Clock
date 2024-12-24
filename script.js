function updateClockAndDate() {
  const clockElement = document.getElementById("clock");
  const dateElement = document.getElementById("date");
  const now = new Date();

  // Format time
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  clockElement.textContent = `${hours}:${minutes}:${seconds}`;

  // Format date
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Januari", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  const day = days[now.getDay()];
  const month = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  dateElement.textContent = `${day}, ${month} ${date}, ${year}`;
}

// Update the clock every second
setInterval(updateClockAndDate, 1000);

// Initialize the clock immediately on page load
updateClockAndDate();