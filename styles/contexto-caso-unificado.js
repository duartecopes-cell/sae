(function () {
    "use strict";

    const fotosPorCaso = Object.fromEntries(
        Array.from({ length: 12 }, (_, indice) => {
            const numero = String(indice + 1).padStart(3, "0");
            return [`caso_${numero}`, `caso_${numero}.png`];
        })
    );

    function textoSeguro(valor, respaldo) {
        return valor === undefined || valor === null || valor === "" ? respaldo : String(valor);
    }

    function extraerOcupacion(descripcion) {
        const coincidencia = String(descripcion || "").match(/(?:Ocupaci[oó]n(?: Aparente)?|Profesi[oó]n):\s*([^\n]+)/i);
        return coincidencia ? coincidencia[1].trim() : "Información reservada";
    }

    function construirFicha() {
        const contenedor = document.querySelector(".expediente-container");
        const casoId = localStorage.getItem("casoSeleccionado");
        if (!contenedor || !casoId || typeof bancoDeHistorias === "undefined") return;

        const caso = bancoDeHistorias[casoId];
        if (!caso) return;

        const contexto = typeof bancoDeContextos !== "undefined" ? bancoDeContextos[casoId] : null;
        const descripcion = textoSeguro(contexto?.descripcion || caso.contexto?.descripcion, "No hay descripción ampliada disponible para este expediente.");
        const objetivo = textoSeguro(contexto?.objetivo || caso.contexto?.objetivo, "Obtener información verificable y aclarar los hechos investigados.");
        const titulo = textoSeguro(contexto?.titulo || caso.contexto?.titulo, `EXPEDIENTE ${casoId.toUpperCase()}`);
        const nombre = textoSeguro(caso.personaje || caso.nombre, "Sujeto por identificar");
        const alias = textoSeguro(caso.alias, "Sin alias registrado");
        const delito = textoSeguro(caso.delito, "Conducta en investigación");
        const edad = caso.edad ? `${caso.edad} años` : "No registrada";
        const ocupacion = textoSeguro(caso.ocupacion, extraerOcupacion(descripcion));
        const foto = fotosPorCaso[casoId] || "caso_001.png";
        const prefijo = "../../assets/images/casos/";

        contenedor.classList.add("caso-unificado");
        contenedor.innerHTML = `
            <header class="caso-unificado__encabezado">
                <h1>${titulo}</h1>
                <div class="caso-unificado__clasificado">Expediente reservado · Uso institucional</div>
            </header>
            <section class="caso-unificado__ficha" aria-label="Ficha del investigado">
                <img class="caso-unificado__foto" src="${prefijo}${foto}" alt="Fotografía de referencia de ${nombre}">
                <div class="caso-unificado__datos">
                    <div class="caso-unificado__dato"><strong>Nombre</strong><span>${nombre}</span></div>
                    <div class="caso-unificado__dato"><strong>Alias</strong><span>${alias}</span></div>
                    <div class="caso-unificado__dato"><strong>Edad</strong><span>${edad}</span></div>
                    <div class="caso-unificado__dato"><strong>Ocupación</strong><span>${ocupacion}</span></div>
                    <div class="caso-unificado__dato"><strong>Delito</strong><span>${delito}</span></div>
                </div>
            </section>
            <section class="caso-unificado__seccion">
                <h2>Contexto y antecedentes del caso</h2>
                <p>${descripcion}</p>
            </section>
            <section class="caso-unificado__seccion caso-unificado__objetivo">
                <h2>Objetivo de la misión</h2>
                <p>${objetivo}</p>
            </section>
            <div id="loader-container" style="display:none; text-align:center; margin-top:24px;">
                <div class="spinner"></div><p>Conectando con sala de entrevista...</p>
            </div>
            <div class="caso-unificado__acciones">
                <button id="btn-entrar" class="btn-siguiente" type="button">Entrar a sala de entrevista</button>
            </div>`;

        document.getElementById("btn-entrar").addEventListener("click", function () {
            document.querySelector(".caso-unificado__acciones").style.display = "none";
            document.getElementById("loader-container").style.display = "block";
            window.setTimeout(function () { window.location.href = "entrevistas.html"; }, 900);
        });
    }

    window.addEventListener("DOMContentLoaded", construirFicha);
}());
