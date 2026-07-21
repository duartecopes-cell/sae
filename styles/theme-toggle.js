(function () {
    const storageKey = "sae-theme";
    const root = document.documentElement;
    let currentTheme = readStoredTheme();

    applyTheme(currentTheme);

    document.addEventListener("DOMContentLoaded", () => {
        if (document.querySelector("[data-theme-toggle]")) return;

        const button = document.createElement("button");
        button.type = "button";
        button.className = "theme-toggle";
        button.setAttribute("data-theme-toggle", "");
        button.innerHTML = '<span class="theme-toggle__icon" aria-hidden="true"></span><span class="theme-toggle__text"></span>';

        const navbar = document.querySelector(".navbar");
        const chatHeader = document.querySelector(".entrevista-experta__header") ||
            (document.querySelector(".input-area-experto") ? document.querySelector(".header-main") : null);
        const navLinks = navbar?.querySelector("[data-nav-links]");
        if (chatHeader) {
            button.classList.add("theme-toggle--inline", "theme-toggle--chat");
            chatHeader.appendChild(button);
        } else if (navbar) {
            button.classList.add("theme-toggle--inline");
            navbar.insertBefore(button, navLinks || null);
        } else {
            button.classList.add("theme-toggle--floating");
            document.body.appendChild(button);
        }

        button.addEventListener("click", () => {
            const nextTheme = currentTheme === "dark" ? "light" : "dark";
            applyTheme(nextTheme);
            storeTheme(nextTheme);
        });

        updateButton();
    });

    function readStoredTheme() {
        try {
            const storedTheme = localStorage.getItem(storageKey);
            return storedTheme === "dark" ? "dark" : "light";
        } catch (error) {
            return "light";
        }
    }

    function storeTheme(theme) {
        try {
            localStorage.setItem(storageKey, theme);
        } catch (error) {
            // La preferencia es opcional si el navegador bloquea localStorage.
        }
    }

    function applyTheme(theme) {
        currentTheme = theme === "dark" ? "dark" : "light";
        root.setAttribute("data-theme", currentTheme);
        root.style.colorScheme = currentTheme;
        updateButton();
    }

    function updateButton() {
        const button = document.querySelector("[data-theme-toggle]");
        if (!button) return;

        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        const label = currentTheme === "dark" ? "Modo claro" : "Modo oscuro";

        button.dataset.themeState = currentTheme;
        button.setAttribute("aria-label", `Cambiar a ${nextTheme === "dark" ? "modo oscuro" : "modo claro"}`);
        button.setAttribute("aria-pressed", String(currentTheme === "dark"));

        const text = button.querySelector(".theme-toggle__text");
        if (text) text.textContent = label;
    }
})();
