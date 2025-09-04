// Display current year
document.getElementById("year").textContent = new Date().getFullYear();

// Theme toggle
const toggleBtn = document.getElementById("toggleTheme");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Toggle Theme"
    : "🌙 Toggle Theme";
});
