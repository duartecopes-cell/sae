(function () {
    "use strict";

    function fotoCaso() {
        const casoId = localStorage.getItem("casoSeleccionado") || "caso_001";
        return `../../assets/images/casos/${casoId}.png`;
    }

    function nombreSospechoso() {
        const casoId = localStorage.getItem("casoSeleccionado");
        if (casoId && typeof bancoDeHistorias !== "undefined" && bancoDeHistorias[casoId]) {
            return bancoDeHistorias[casoId].personaje || bancoDeHistorias[casoId].nombre || "Entrevistado";
        }
        return "Entrevistado";
    }

    function transformarMensaje(mensaje) {
        if (!(mensaje instanceof HTMLElement) || !mensaje.matches(".msg") || mensaje.dataset.chatUnificado) return;
        if (!mensaje.classList.contains("user") && !mensaje.classList.contains("npc")) return;

        mensaje.dataset.chatUnificado = "true";
        mensaje.classList.add("conversacion-mensaje");
        const esUsuario = mensaje.classList.contains("user");
        const autorRepetido = mensaje.querySelector(":scope > strong");
        autorRepetido?.remove();
        const contenidoAnterior = mensaje.innerHTML;
        const hora = new Date().toLocaleTimeString("es-CO", { hour: "2-digit", minute: "2-digit" });
        const nombre = esUsuario ? "Investigador" : nombreSospechoso();
        const avatar = esUsuario
            ? '<span class="chat-unificado__avatar chat-unificado__avatar--usuario" aria-hidden="true">TÚ</span>'
            : `<img class="chat-unificado__avatar" src="${fotoCaso()}" alt="${nombre}">`;

        mensaje.innerHTML = `
            ${avatar}
            <div class="chat-unificado__contenido">
                <div class="chat-unificado__meta"><strong>${nombre}</strong><span>${hora}</span></div>
                <div class="chat-unificado__burbuja">${contenidoAnterior}</div>
            </div>`;
    }

    function iniciar() {
        const chat = document.getElementById("chat");
        if (!chat) return;
        chat.querySelectorAll(".msg").forEach(transformarMensaje);
        new MutationObserver((cambios) => {
            cambios.forEach((cambio) => cambio.addedNodes.forEach((nodo) => {
                if (nodo.nodeType !== 1) return;
                transformarMensaje(nodo);
                nodo.querySelectorAll?.(".msg").forEach(transformarMensaje);
            }));
        }).observe(chat, { childList: true, subtree: false });
    }

    window.addEventListener("DOMContentLoaded", iniciar);
}());
