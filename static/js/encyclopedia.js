// The purpose of sitemap.js is to allow the entire website to be scaled easily.
// Each page will run another JS file to populate main navigation and the encyclopedia contents.
// The encyclopedia contents section was the main need for this is, as hard-coding the contents section of 20+ pages 
// seemed like a bad idea, and would be a major pain to go back and change when adding or removing pages in the future.
// Main navigation was added as well, just in case the future necessitates broader changes.

// The organization is pretty simple: arrays of objects with ids, names, urls, and types (parent or child) for the encyclopedia.

// ID nomenclature: Main Navigation - 01
// Abbrviated: mn-01

// function populateMainNavigation() {
//     let mnid = document.getElementById("mn-id");
//     let mainNavigationUL = document.getElementById("navigation").lastElementChild;
//     let mainNavigationPages = [
//         {
//             "id": "mn-01",
//             "name": "Home",
//             "url": "index.html"
//         },
//         {
//             "id": "mn-02",
//             "name": "Solar System",
//             "url": "solarsystem.html"
//         },
//         {
//             "id": "mn-03",
//             "name": "Timeline",
//             "url": "#"
//         },
//         {
//             "id": "mn-04",
//             "name": "Encyclopedia",
//             "url": "encyclopedia.html"
//         },
//         {
//             "id": "mn-05",
//             "name": "RP Resources",
//             "url": "#"
//         }
//     ];

//     mainNavigationPages.forEach(function(page) {
//         let li = document.createElement("li");
//         if (mnid.getAttribute("data-pageid") === page.id) {
//             li.innerHTML = `<a href=${page.url}><h3 class="nav-active">${page.name}</h3></a>`;
//         }
//         else {
//             li.innerHTML = `<a href=${page.url}><h3 class="nav-inactive">${page.name}</h3></a>`;
//         }
//         mainNavigationUL.append(li);
//     });
// }

// populateMainNavigation();



let arrowBoxes = document.querySelectorAll(".e-contents-arrow-box");

arrowBoxes.forEach(function(box) {
    box.addEventListener("click", function() {
        if (this.querySelector(".e-contents-arrow-down")){
            this.firstElementChild.classList.remove("e-contents-arrow-down");
            this.firstElementChild.classList.add("e-contents-arrow-up");

            this.nextElementSibling.classList.remove("e-contents-children-collapsed");
        }
        else {
            this.firstElementChild.classList.add("e-contents-arrow-down");
            this.firstElementChild.classList.remove("e-contents-arrow-up");
            
            this.nextElementSibling.classList.add("e-contents-children-collapsed");
        }
    })
})




// ID nomenclature: Encyclopedia Content - Parent01 - Child01
// Abbrviated: ec-p01-c01

let encyclopediaContents = [
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