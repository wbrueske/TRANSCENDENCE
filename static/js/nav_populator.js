// The purpose of nav_populator.js is to allow the entire website to be scaled easily in the future.
// The need stems from the continually changing encyclopedia contents, and is being applied to the main site navigation as well.
// This script can be updated with new pages in the future and the entire site will have those pages added to the main navigation.
// This prevents me from having to update potentially hundreds of encyclopedia entries.

// ID nomenclature: Main Navigation - 01
// Abbrviated: mn-01

function populateMainNavigation() {
    var mnid = document.getElementById("mn-id");
    var mainNavigationUL = document.getElementById("main-nav-ul");
    var mainNavigationPages = [
        {
            "id": "mn-01",
            "name": "Home",
            "url": "index.html"
        },
        {
            "id": "mn-02",
            "name": "Solar System",
            "url": "solarsystem.html"
        },
        {
            "id": "mn-03",
            "name": "Timeline",
            "url": "#"
        },
        {
            "id": "mn-04",
            "name": "Encyclopedia",
            "url": "encyclopedia.html"
        },
        {
            "id": "mn-05",
            "name": "RP Resources",
            "url": "#"
        }
    ];

    mainNavigationPages.forEach(function(page) {
        var li = document.createElement("li");
        if (mnid.getAttribute("data-pageid") === page.id) {
            li.innerHTML = '<div class="nav-item nav-item-active"><a href="' + page.url + '"><h3 class="nav-active">' + page.name + '</h3></a></div>';
        }
        else {
            li.innerHTML = '<div class="nav-item"><a href="' + page.url + '"><h3 class="nav-inactive">' + page.name + '</h3></a></div>';
        }
        mainNavigationUL.appendChild(li);
    });
}






function navMenu() {
    var firstNavItem = document.querySelector(".nav-item");
    var navItems = document.querySelectorAll(".nav-item");

    if (firstNavItem.classList.contains("nav-item-expanded")) {
        navItems.forEach(function(navItem) {
            navItem.classList.remove("nav-item-expanded");
        });
    }
    else {
        navItems.forEach(function(navItem) {
            navItem.classList.add("nav-item-expanded");
        });
    }
}





document.addEventListener("DOMContentLoaded", function(event) {
    populateMainNavigation();
    
    var navToggler = document.getElementById("main-nav-toggler");

    navToggler.addEventListener("click", navMenu);
});