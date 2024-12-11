// Popup Layanan
function showPopup(title, text) {
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-text").innerText = text;
    document.getElementById("popup").style.display = "flex";
}

// Close Popup dengan klik di luar konten
document.getElementById("popup").addEventListener("click", function(event) {
    if (event.target === this) {
        this.style.display = "none";
    }
});

// Fungsi untuk menampilkan animasi fade-in pada scroll
document.addEventListener("DOMContentLoaded", function () {
    const stepsSection = document.querySelectorAll(".step");
    const layananItems = document.querySelectorAll(".layanan-item");

    function revealOnScroll(elements) {
        elements.forEach(element => {
            const rect = element.getBoundingClientRect();
            if (rect.top < window.innerHeight - 50) {
                element.classList.add("fade-in");
            }
        });
    }

    // Menyembunyikan elemen steps dan layanan di awal
    stepsSection.forEach(step => step.classList.add("hidden"));
    layananItems.forEach(item => item.classList.add("hidden"));

    // Event scroll untuk menampilkan animasi ketika di-scroll
    window.addEventListener("scroll", function () {
        revealOnScroll(stepsSection);
        revealOnScroll(layananItems);
    });
});

// menu-toggle.js

// Function to toggle menu visibility
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("show");
    
    // Add or remove the event listener for outside click
    if (menu.classList.contains("show")) {
        document.addEventListener("click", closeMenuOnOutsideClick);
    } else {
        document.removeEventListener("click", closeMenuOnOutsideClick);
    }
}

// Function to close menu when clicking outside
function closeMenuOnOutsideClick(event) {
    const menu = document.querySelector(".menu");
    const hamburger = document.querySelector(".hamburger");

    if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("show");
        document.removeEventListener("click", closeMenuOnOutsideClick);
    }
}

// Function to close menu when clicking a menu item
function closeMenuOnItemClick() {
    const menu = document.querySelector(".menu");
    menu.classList.remove("show");
    document.removeEventListener("click", closeMenuOnOutsideClick);
}

// Add event listeners to each menu item
document.querySelectorAll(".menu li a").forEach(item => {
    item.addEventListener("click", closeMenuOnItemClick);
});
