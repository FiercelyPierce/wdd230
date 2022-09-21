const todaysDate = new Date();

document.getElementsByClassName(".todaysyear").textContent = todaysDate.getFullYear();
document.querySelector("#lastmodified").textContent = document.lastModified;