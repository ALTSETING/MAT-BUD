function openTab(tabName) {
    // Переключення вкладок
    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
    document.getElementById(tabName).classList.add("active");

    const menu = document.getElementById("menu");

    // Якщо мобільний — ховаємо меню
    if (window.innerWidth < 600) {
        menu.style.display = "none";
    } 
    else {
        // Якщо ПК — меню завжди видно
        menu.style.display = "flex";
    }
}

function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

const slider = document.getElementById("compareSlider");
const afterWrapper = document.querySelector(".after-img-wrapper");

slider.addEventListener("input", function () {
    afterWrapper.style.width = this.value + "%";
});
