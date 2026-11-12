const menuButton = document.querySelector("#menu");

const navMenu = document.querySelector("#nav-menu");

menuButton.addEventListener("click", () =>

{
    
    navMenu.classList.toggle("open");

    menuButton.classList.toggle("open");

});

const links = document.querySelectorAll("nav a");

links.forEach(function (link) {
    link.addEventListener("click", function (event) {
        event.preventDefault();

        links.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");
    });
});


const year = document.querySelector("#currentyear");

const today = new Date();

year.textContent = today.getFullYear();

// Set the page's "last modified" date and time.

document.getElementById("lastModified").textContent = document.lastModified;