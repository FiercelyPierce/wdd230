let LastModified = new Date(document.lastModified);

const dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

const monthNames = [
    "January",
    "Feburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const todaysDate = new Date();
const dayName = dayNames[todaysDate.getDate()];
const monthName = monthNames[todaysDate.getDate()];
const currentDate = `${dayName}, ${todaysDate.getDate()} ${monthName}, ${todaysDate.getFullYear()}`;

document.querySelector("#currentdate").textContent = currentDate;