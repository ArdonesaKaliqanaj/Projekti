document.querySelectorAll("nav ul li").forEach((item) => {
    item.addEventListener("click", () => {
        // Kjo shton një alert për kategorinë e klikuar
        alert("Kategoria: " + item.textContent);

        // Heq klasën 'active' nga të gjitha elementët e tjerë
        document.querySelectorAll("nav ul li").forEach((li) => {
            li.classList.remove("active");
        });

        // Shto klasën 'active' në elementin e klikuar
        item.classList.add("active");
    });
});


// Gjej butonin "Products" dhe dropdown
const productsBtn = document.getElementById("products-btn");
const productsDropdown = document.getElementById("products-dropdown");

// Event listener për klikim
productsBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Parandalon veprimet default
    // Ndryshon gjendjen e dropdown (shfaq ose fsheh)
    if (productsDropdown.style.display === "block") {
        productsDropdown.style.display = "none";
    } else {
        productsDropdown.style.display = "block";
    }
});

// Mbyll dropdown nëse klikohet diku tjetër
window.addEventListener("click", (e) => {
    if (e.target !== productsBtn && e.target.closest("#products-dropdown") === null) {
        productsDropdown.style.display = "none";
    }
});

document.getElementById("search-icon").addEventListener("click", function() {
    const searchBar = document.getElementById("search-bar");
    const searchIcon = document.getElementById("search-icon");

    // Togglo gjendjen e search bar-it
    searchBar.classList.toggle("active");

    // Fshi ikonën e search nëse search bar është aktiv
    if (searchBar.classList.contains("active")) {
        searchIcon.style.display = "none";
        searchBar.focus(); // Fokusimi automatik në search bar
    } else {
        searchIcon.style.display = "inline-block";
    }
});

// Rikthe ikonën kur shtypet Enter
document.getElementById("search-bar").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        const searchBar = document.getElementById("search-bar");
        const searchIcon = document.getElementById("search-icon");

        // Fshi përmbajtjen e search bar dhe fshi klasën active
        searchBar.value = "";
        searchBar.classList.remove("active");

        // Shfaq përsëri ikonën e search
        searchIcon.style.display = "inline-block";
    }
});







// Gjej ikonën e shportës dhe ruaj numrin e produkteve
const cartIcon = document.querySelector(".fa-shopping-cart");
let cartCount = 0;

// Shto një element për numrin pranë ikonës së shportës
const cartBadge = document.createElement("span");
cartBadge.style.position = "absolute";
cartBadge.style.top = "10px"; // Pozicioni relativ ndaj ikonës
cartBadge.style.right = "10px";
cartBadge.style.backgroundColor = "white";
cartBadge.style.color = "black";
cartBadge.style.borderRadius = "100%";
cartBadge.style.padding = "3px 5px";
cartBadge.style.fontSize = "10px";
cartBadge.style.display = "none"; // Fillo pa e shfaqur
cartIcon.style.position = "relative"; // Pozicion relativ për të suportuar badge
cartIcon.appendChild(cartBadge);

// Gjej të gjithë butonat "Shto në shportë"
const addToCartButtons = document.querySelectorAll(".product-card button");

// Shto ngjarjen "click" për secilin buton
addToCartButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartCount++;
    cartBadge.textContent = cartCount; // Përditëso numrin në badge
    cartBadge.style.display = "inline-block"; // Sigurohu që është i dukshëm
  });
});
