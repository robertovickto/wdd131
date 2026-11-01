// Get the current year.

const year = document.querySelector("#currentyear");

const today = new Date();

year.textContent = today.getFullYear();

// Set the page's "last modified" date and time.

document.getElementById("lastModified").textContent = document.lastModified;