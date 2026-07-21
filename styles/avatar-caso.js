(function () {
    "use strict";

    const fotos = Object.fromEntries(
        Array.from({ length: 12 }, (_, indice) => {
            const numero = String(indice + 1).padStart(3, "0");
            return [`caso_${numero}`, `caso_${numero}.png`];
        })
    );

    function mostrarFoto() {
        const avatar = document.getElementById("avatar");
        const casoId = localStorage.getItem("casoSeleccionado");
        if (!avatar || !casoId) return;

        const archivo = fotos[casoId] || "caso_001.png";
        avatar.textContent = "";
        avatar.style.backgroundImage = `url('../../assets/images/casos/${archivo}')`;
        avatar.style.backgroundSize = "cover";
        avatar.style.backgroundPosition = "center top";
        avatar.style.backgroundRepeat = "no-repeat";
        avatar.style.borderRadius = "8px";
        avatar.style.overflow = "hidden";
    }

    window.addEventListener("DOMContentLoaded", mostrarFoto);
}());
