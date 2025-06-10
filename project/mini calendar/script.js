const monthEl = document.getElementById("month");
const dayNameEl = document.getElementById("day-name");
const dateEl = document.getElementById("date");
const yearEl = document.getElementById("year");

const date = new Date();

monthEl.innerText = date.toLocaleString("en",{ month:"long"})
dayNameEl.innerText = date.toLocaleString("en",{ weekday:"long"})
dateEl.innerText = date.getDate();
yearEl.innerText = date.getFullYear();