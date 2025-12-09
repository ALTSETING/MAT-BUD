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

function openLightbox(src) {
    const lightbox = document.getElementById("lightbox");
    const img = document.getElementById("lightbox-img");

    img.src = src;
    lightbox.style.display = "flex";
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("preloader").classList.add("fade-out");
    }, 3500); // ← триваліша загрузка (куби + текст + прогрес-бар)
});

function generateSparks() {
    const container = document.getElementById("sparks");

    for (let i = 0; i < 12; i++) {
        const spark = document.createElement("div");
        spark.classList.add("spark");

        // Випадкові напрямки розльоту
        const angle = Math.random() * Math.PI * 2;
        const distance = 40 + Math.random() * 40;

        spark.style.setProperty("--tx", `${Math.cos(angle) * distance}px`);
        spark.style.setProperty("--ty", `${Math.sin(angle) * distance}px`);

        container.appendChild(spark);

        // Видалення після анімації
        setTimeout(() => spark.remove(), 1000);
    }
}

/* Запускаємо іскри після складання логотипу */
setTimeout(() => {
    generateSparks();
}, 1700); // Момент, коли "M" складається

function acceptCookies() {
    document.getElementById("cookie-banner").style.display = "none";
    document.cookie = "cookiesAccepted=true; path=/; max-age=" + 60*60*24*365;
}

function checkCookies() {
    if (!document.cookie.includes("cookiesAccepted=true")) {
        document.getElementById("cookie-banner").style.display = "block";
    }
}

checkCookies();

