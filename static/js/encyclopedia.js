// The purpose of encyclopedia.js is to allow the entire website to be scaled easily in the future.
// The need stems from the continually changing encyclopedia contents, and is being applied to the main site navigation as well (in nav_populator.js).
// This script can be updated with new pages in the future and the entire encyclopedia will have those pages added to the encyclopedia contents.
// This prevents me from having to update potentially hundreds of encyclopedia entries.

// The organization is pretty simple: arrays of objects with ids, names, urls, and types (parent or child) for the encyclopedia.

// ID nomenclature: Encyclopedia Content - Parent01 - Child01
// Abbrviated: ec-p01-c01

function populateEncyclopediaContents() {
    // Get the id of the page
    let mnid = document.getElementById("mn-id");
    // The ul for the encyclopedia contents to go in
    let encyclopediaContentsUL = document.getElementById("e-contents-ul");
    // List of encyclopedia pages—can be updated later and will apply to the entire site
    let encyclopediaContentsPages = [
        {
            "id": "ec-p01",
            "name": "Introduction",
            "type": "parent",
            "url": "encyclopedia.html",
            "children": ""
        },
        {
            "id": "ec-p02",
            "name": "Path to Salvation",
            "type": "parent",
            "url": "#",
            "children": ""
        },
        {
            "id": "ec-p03",
            "name": "Colony Ships",
            "type": "parent",
            "url": "#",
            "children": [
                {
                    "id": "ec-p03-c01",
                    "name": "Cronus",
                    "type": "child",
                    "url": "#"
                },
                {
                    "id": "ec-p03-c02",
                    "name": "Gaia",
                    "type": "child",
                    "url": "#"
                },
                {
                    "id": "ec-p03-c03",
                    "name": "Prometheus",
                    "type": "child",
                    "url": "#"
                },
            ]
        },
        {
            "id": "ec-p04",
            "name": "Salvation System",
            "type": "parent",
            "url": "#",
            "children": [
                {
                    "id": "ec-p04-c01",
                    "name": "Salvation",
                    "type": "child",
                    "url": "#"
                },
                {
                    "id": "ec-p04-c02",
                    "name": "New Earth",
                    "type": "child",
                    "url": "#"
                },
                {
                    "id": "ec-p04-c03",
                    "name": "Prometheus",
                    "type": "child",
                    "url": "#"
                },
                {
                    "id": "ec-p04-c04",
                    "name": "Demeter",
                    "type": "child",
                    "url": "#"
                },
                {
                    "id": "ec-p04-c05",
                    "name": "Athena",
                    "type": "child",
                    "url": "#"
                },
                {
                    "id": "ec-p04-c06",
                    "name": "Zeus",
                    "type": "child",
                    "url": "#"
                },
            ]
        },
        {
            "id": "ec-p05",
            "name": "Factions",
            "type": "parent",
            "url": "#",
            "children": [
                {
                    "id": "ec-p05-c01",
                    "name": "Governance",
                    "type": "child",
                    "url": "#"
                },
                {
                    "id": "ec-p05-c02",
                    "name": "Promethean Tribes",
                    "type": "child",
                    "url": "#"
                },
                {
                    "id": "ec-p05-c03",
                    "name": "Ever Corporation",
                    "type": "child",
                    "url": "#"
                },
            ]
        },
        {
            "id": "ec-p06",
            "name": "Technology",
            "type": "parent",
            "url": "#",
            "children": ""
        },
    ];

    // Add a li to the ul for each encyclopedia page
    encyclopediaContentsPages.forEach(function(page) {
        // Create li
        let li = document.createElement("li");
        // If the li is for the current page, it gets highlighted
        if (mnid.getAttribute("data-ecid") === page.id) {
            li.innerHTML = `<a href="${page.url}"><div class="e-contents-parent e-contents-parent-highlighted">${page.name}</div></a>`
        }
        else {
            li.innerHTML = `<a href="${page.url}"><div class="e-contents-parent">${page.name}</div></a>`
        }

        // Add any children
        if (page.children > "") {
            // Add dropdown arrow to the parent 
            let dropdownArrow = document.createElement("div");
            dropdownArrow.classList.add("e-contents-arrow-box");
            dropdownArrow.innerHTML = `<img src="static/images/arrow.svg" alt="" class="e-contents-arrow-down">`; // Default class is down arrow for a collapsed menu

            // ul for the child pages
            let children = document.createElement("ul");
            // Add default classes
            children.classList.add("e-contents-children", "e-contents-children-collapsed");

            page.children.forEach(function(child) {
                // Generate child li
                let childli = document.createElement("li");
                // Check to see if child li is the current page.  Highlight child li and expand the parent menu if true.
                if (mnid.getAttribute("data-ecid") === child.id) {
                    childli.innerHTML = `<a href="${child.url}"><div class="e-contents-child e-contents-child-highlighted">${child.name}</div></a>`;
                    // Change the dropdown arrow to up for the expanded list
                    dropdownArrow.firstElementChild.classList.remove("e-contents-arrow-down");
                    dropdownArrow.firstElementChild.classList.add("e-contents-arrow-up");
                    children.classList.remove("e-contents-children-collapsed");
                    
                }
                // Add the child and leave the parent menu collapsed if false.
                else {
                    childli.innerHTML = `<a href="${child.url}"><div class="e-contents-child">${child.name}</div></a>`;
                }

                // Append the child li
                children.append(childli);
            });

            // Append the dropdown arrow and the children ul
            li.append(dropdownArrow);
            li.append(children);
        }

        // Append the li
        encyclopediaContentsUL.append(li);
    });
}

// Populate the encyclopedia contents menu
populateEncyclopediaContents();



// Add dropdown functionality to each parent with children (but only on the dropdown arrow)
let arrowBoxes = document.querySelectorAll(".e-contents-arrow-box");

function encyclopediaContentsExpander() {
    // Expand the list of children
    if (this.querySelector(".e-contents-arrow-down")){
        // Toggle the arrow's class
        this.firstElementChild.classList.remove("e-contents-arrow-down");
        this.firstElementChild.classList.add("e-contents-arrow-up");
        // Expand the children list
        this.nextElementSibling.classList.remove("e-contents-children-collapsed");
    }
    // Collapse the list of children
    else {
        this.firstElementChild.classList.add("e-contents-arrow-down");
        this.firstElementChild.classList.remove("e-contents-arrow-up");
        
        this.nextElementSibling.classList.add("e-contents-children-collapsed");
    }
}

// Add event listener to each dropdown arrow
arrowBoxes.forEach(function(box) {
    box.addEventListener("click", encyclopediaContentsExpander);
});
