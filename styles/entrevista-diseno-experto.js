(function () {
    "use strict";

    function iniciarDiseno() {
        const vista = document.getElementById("entrevista-container");
        const chatContainer = vista?.querySelector(".chat-container");
        const avatarAnterior = document.getElementById("avatar");
        const timer = document.getElementById("timer");
        if (!vista || !chatContainer || vista.dataset.disenoExperto) return;

        const casoId = localStorage.getItem("casoSeleccionado") || "caso_001";
        const caso = typeof bancoDeHistorias !== "undefined" ? bancoDeHistorias[casoId] : null;
        const nombre = caso?.personaje || caso?.nombre || "Entrevistado";
        const alias = caso?.alias || "Sin alias";
        const delito = caso?.delito || "Caso en verificación";
        const edad = caso?.edad ? `${caso.edad} años` : "No registrada";
        const nivel = location.pathname.includes("frontend-avanzado") ? "Nivel avanzado" : "Nivel básico";
        const foto = `../../assets/images/casos/${casoId}.png`;
        const abandonar = Array.from(vista.children).find((elemento) => elemento.tagName === "BUTTON");

        vista.dataset.disenoExperto = "true";
        document.body.classList.add("entrevista-unificada");

        const header = document.createElement("header");
        header.className = "entrevista-experta__header";
        header.innerHTML = `
            <div class="entrevista-experta__marca">
                <span class="entrevista-experta__sigla">SAE</span>
                <div><strong>Sala de entrevista</strong><span>${nivel}</span></div>
            </div>
            <div class="entrevista-experta__caso"><strong>${nombre}</strong><span>${delito}</span></div>`;

        const panel = document.createElement("aside");
        panel.className = "entrevista-experta__panel";
        panel.innerHTML = `
            <img class="entrevista-experta__foto" src="${foto}" alt="Fotografía de ${nombre}">
            <div class="entrevista-experta__identidad"><h2>${nombre}</h2><p>“${alias}”</p></div>
            <div class="entrevista-experta__dato"><span>Delito investigado</span><strong>${delito}</strong></div>
            <div class="entrevista-experta__dato"><span>Edad</span><strong>${edad}</strong></div>
            <div class="entrevista-experta__dato"><span>Estado</span><strong>Entrevista en curso</strong></div>`;

        const principal = document.createElement("main");
        principal.className = "entrevista-experta__principal";
        principal.appendChild(chatContainer);

        if (timer) panel.appendChild(timer);
        if (abandonar) {
            abandonar.classList.add("entrevista-experta__abandonar");
            panel.appendChild(abandonar);
        }
        avatarAnterior?.remove();
        vista.prepend(header);
        vista.append(panel, principal);

        const botonTema = document.querySelector("[data-theme-toggle]");
        if (botonTema) {
            botonTema.classList.remove("theme-toggle--floating");
            botonTema.classList.add("theme-toggle--inline", "theme-toggle--chat");
            header.appendChild(botonTema);
        }
    }

    window.addEventListener("DOMContentLoaded", iniciarDiseno);
}());
