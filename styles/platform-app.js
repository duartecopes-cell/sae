(function () {
    "use strict";

    const state = {
        mic: false,
        camera: false,
        paused: false,
        questionCount: 0,
        notes: []
    };

    document.addEventListener("DOMContentLoaded", () => {
        initClock();
        initNavigation();
        initControls();
        initLevelLinks();
        loadNotes();
    });

    function initClock() {
        const clock = document.querySelector("[data-clock]");
        if (!clock) return;

        const update = () => {
            clock.textContent = new Date().toLocaleTimeString("es-CO", {
                hour: "2-digit",
                minute: "2-digit"
            });
        };

        update();
        setInterval(update, 30000);
    }

    function initNavigation() {
        const toggle = document.querySelector("[data-nav-toggle]");
        const sidebar = document.querySelector("[data-sidebar]");

        toggle?.addEventListener("click", () => {
            const open = sidebar?.classList.toggle("is-open");
            toggle.setAttribute("aria-expanded", String(Boolean(open)));
        });

        document.querySelectorAll("[data-nav-item]").forEach((item) => {
            item.addEventListener("click", () => {
                document.querySelectorAll("[data-nav-item]").forEach((nav) => nav.classList.remove("is-active"));
                item.classList.add("is-active");
                sidebar?.classList.remove("is-open");
                showToast(`Módulo ${item.textContent.trim()} preparado`);
            });
        });
    }

    function initControls() {
        document.querySelectorAll("[data-action]").forEach((button) => {
            button.addEventListener("click", () => {
                handleAction(button.dataset.action, button);
            });
        });

        document.querySelectorAll("[data-suggestion]").forEach((button) => {
            button.addEventListener("click", () => {
                const input = document.querySelector("[data-question-input]");
                if (input) {
                    input.value = button.dataset.suggestion || button.textContent.trim();
                    input.focus();
                }
            });
        });

        const input = document.querySelector("[data-question-input]");
        input?.addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                event.preventDefault();
                handleAction("send");
            }
        });
    }

    function initLevelLinks() {
        document.querySelectorAll("[data-level-link]").forEach((link) => {
            link.addEventListener("click", () => {
                const level = link.dataset.level || link.textContent.trim();
                showToast(`Abriendo nivel ${level}`);
            });
        });
    }

    function handleAction(action, button) {
        switch (action) {
            case "send":
                sendQuestion();
                break;
            case "mic":
                state.mic = !state.mic;
                button?.classList.toggle("is-active", state.mic);
                updateAssistant(state.mic ? "Micrófono activo: escuchando pregunta." : "Micrófono desactivado.");
                showToast(state.mic ? "Micrófono activado" : "Micrófono pausado");
                break;
            case "camera":
                state.camera = !state.camera;
                button?.classList.toggle("is-active", state.camera);
                updateAssistant(state.camera ? "Cámara activa: analizando lenguaje corporal." : "Cámara desactivada.");
                showToast(state.camera ? "Cámara activada" : "Cámara desactivada");
                break;
            case "pause":
                state.paused = !state.paused;
                button?.classList.toggle("is-active", state.paused);
                if (button) {
                    const label = button.querySelector(".control-label");
                    if (label) label.textContent = state.paused ? "Reanudar" : "Pausar";
                    button.setAttribute("aria-pressed", String(state.paused));
                }
                updateAssistant(state.paused ? "Entrevista pausada. Revisa notas antes de continuar." : "Entrevista reanudada.");
                break;
            case "notes":
                saveNote();
                break;
            case "finish":
                updateAssistant("Cierre preparado. Revisa pregunta final, objetivos y notas antes de terminar.");
                showToast("Finalización preparada");
                break;
            case "hint":
                showNextHint();
                break;
            default:
                showToast("Acción preparada");
        }
    }

    function sendQuestion() {
        const input = document.querySelector("[data-question-input]");
        const current = document.querySelector("[data-current-question]");
        const transcript = document.querySelector("[data-transcript]");
        const progress = document.querySelector("[data-progress]");
        const value = input?.value.trim();

        if (!value) {
            showToast("Escribe una pregunta antes de enviarla");
            input?.focus();
            return;
        }

        state.questionCount += 1;
        if (current) current.textContent = value;
        if (transcript) {
            const line = document.createElement("p");
            line.innerHTML = `<strong>Pregunta ${state.questionCount}:</strong> ${escapeHtml(value)}`;
            transcript.prepend(line);
        }
        if (progress) progress.style.width = `${Math.min(100, 18 + state.questionCount * 9)}%`;

        input.value = "";
        updateAssistant("Pregunta recibida. La siguiente puede profundizar en tiempo, lugar, evidencia o contradicción.");
        showToast("Pregunta enviada al módulo IA");
    }

    function saveNote() {
        const input = document.querySelector("[data-question-input]");
        const note = input?.value.trim() || "Nota rapida: observar lenguaje corporal y coherencia temporal.";
        const notesList = document.querySelector("[data-notes-list]");

        state.notes.unshift({ text: note, date: new Date().toISOString() });
        localStorage.setItem("sae_platform_notes", JSON.stringify(state.notes.slice(0, 8)));

        if (notesList) renderNotes(notesList);
        showToast("Nota guardada");
    }

    function loadNotes() {
        try {
            state.notes = JSON.parse(localStorage.getItem("sae_platform_notes") || "[]");
        } catch (error) {
            state.notes = [];
        }

        const notesList = document.querySelector("[data-notes-list]");
        if (notesList) renderNotes(notesList);
    }

    function renderNotes(container) {
        container.innerHTML = "";
        const notes = state.notes.length ? state.notes : [{ text: "Sin notas guardadas aun.", date: "" }];
        notes.slice(0, 4).forEach((note) => {
            const item = document.createElement("li");
            item.textContent = note.text;
            container.appendChild(item);
        });
    }

    function showNextHint() {
        const hints = [
            "Pide una precisión temporal: hora, fecha o secuencia.",
            "Contrasta una respuesta con una evidencia concreta.",
            "Pregunta por una persona relacionada con el hecho.",
            "Solicita soporte documental o ruta de verificación."
        ];
        const hint = hints[state.questionCount % hints.length];
        updateAssistant(hint);
        showToast("Sugerencia actualizada");
    }

    function updateAssistant(text) {
        document.querySelectorAll("[data-assistant-message]").forEach((assistant) => {
            assistant.textContent = text;
        });
    }

    function showToast(text) {
        let toast = document.querySelector(".app-toast");
        if (!toast) {
            toast = document.createElement("div");
            toast.className = "app-toast";
            document.body.appendChild(toast);
        }

        toast.textContent = text;
        toast.classList.add("is-visible");
        clearTimeout(showToast.timer);
        showToast.timer = setTimeout(() => toast.classList.remove("is-visible"), 2200);
    }

    function escapeHtml(value) {
        return String(value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
})();
