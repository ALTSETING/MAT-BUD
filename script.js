function openTab(tabName) {
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(tabName).classList.add("active");

    // Закриває меню на телефоні після вибору
    document.getElementById("menu").style.display = "none";
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
