var solarContent = document.getElementById("solar-content");
var focusBG = document.getElementById("focus-bg");
var planetSelectors = document.querySelectorAll(".planet-selector");


function unfocus() {
    solarContent.classList.remove("focused");
    focusBG.classList.add("hidden");

    let anchor = this.parentElement.parentElement;

    anchor.classList.remove("focused", "anchor-focus");
    anchor.querySelector(".planet-selector").classList.remove("hidden");
    
    // The star has its own special class to have its name line up properly.
    // This section accounts for that.
    if (anchor.querySelector(".planet-name")) {
        anchor.querySelector(".planet-name").classList.remove("hidden");
    }
    else {
        anchor.querySelector(".salvation-name").classList.remove("hidden");
    }

    
    anchor.firstElementChild.classList.remove("focus-img");
    anchor.lastElementChild.classList.add("hidden");

}

function focus() {
    // Bring #solar-content and #focus-bg to front (over navigation)
    solarContent.classList.add("focused");
    focusBG.classList.remove("hidden");

    let anchor = this.parentElement.parentElement;

    anchor.classList.add("focused", "anchor-focus");
    this.classList.add("hidden");

    // The star has its own special class to have its name line up properly.
    // This section accounts for that.
    if (anchor.querySelector(".planet-name")) {
        anchor.querySelector(".planet-name").classList.add("hidden");
    }
    else {
        anchor.querySelector(".salvation-name").classList.add("hidden");
    }



    anchor.firstElementChild.classList.add("focus-img");
    anchor.lastElementChild.classList.remove("hidden");

    anchor.querySelector(".closebox").addEventListener("click", unfocus);

}


planetSelectors.forEach(function(planet) {
    planet.addEventListener("click", focus);
});
