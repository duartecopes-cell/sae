(function () {
    "use strict";

    const cdnUrl = "https://cdn.jsdelivr.net/npm/sweetalert2@11";
    let swalPromise = null;

    function loadSwal() {
        if (window.Swal) return Promise.resolve(window.Swal);
        if (swalPromise) return swalPromise;

        swalPromise = new Promise((resolve, reject) => {
            const script = document.createElement("script");
            script.src = cdnUrl;
            script.async = true;
            script.onload = () => resolve(window.Swal);
            script.onerror = () => reject(new Error("No se pudo cargar SweetAlert2"));
            document.head.appendChild(script);
        });

        return swalPromise;
    }

    function isDarkTheme() {
        return document.documentElement.getAttribute("data-theme") === "dark";
    }

    function baseOptions() {
        const dark = isDarkTheme();
        return {
            background: dark ? "#0f172a" : "#ffffff",
            color: dark ? "#f8fafc" : "#111827",
            confirmButtonColor: "#1877f2",
            cancelButtonColor: dark ? "#475569" : "#64748b",
            buttonsStyling: true,
            customClass: {
                popup: "sae-swal-popup",
                title: "sae-swal-title",
                htmlContainer: "sae-swal-html",
                confirmButton: "sae-swal-confirm",
                cancelButton: "sae-swal-cancel",
                input: "sae-swal-input"
            }
        };
    }

    function splitMessage(message) {
        const text = String(message || "").trim();
        const clean = text.replace(/^[^\p{L}\p{N}]+/u, "").trim();
        const parts = clean.split(/\n+/).map((part) => part.trim()).filter(Boolean);
        const icon = text.includes("❌") || /error|no se encontr|no hay|fall/i.test(clean)
            ? "error"
            : text.includes("⚠") || /advertencia|atenci/i.test(clean)
                ? "warning"
                : text.includes("✅") || /correct|guardad|exit/i.test(clean)
                    ? "success"
                    : "info";

        return {
            icon,
            title: parts[0] || "SAE",
            text: parts.slice(1).join("\n")
        };
    }

    async function fire(options) {
        try {
            const Swal = await loadSwal();
            return Swal.fire({
                ...baseOptions(),
                ...options
            });
        } catch (error) {
            console.warn(error);
            return null;
        }
    }

    async function alertBox(message, options) {
        const parsed = splitMessage(message);
        const result = await fire({
            icon: parsed.icon,
            title: parsed.title,
            text: parsed.text,
            confirmButtonText: "Aceptar",
            ...(options || {})
        });

        if (!result) window.alert(String(message || ""));
    }

    async function confirmBox(message, options) {
        const parsed = splitMessage(message);
        const result = await fire({
            icon: (options && options.icon) || "question",
            title: (options && options.title) || parsed.title,
            text: (options && options.text) || parsed.text,
            showCancelButton: true,
            confirmButtonText: (options && options.confirmButtonText) || "Sí, continuar",
            cancelButtonText: (options && options.cancelButtonText) || "Cancelar",
            reverseButtons: true,
            ...(options || {})
        });

        return result ? Boolean(result.isConfirmed) : window.confirm(String(message || ""));
    }

    async function promptBox(message, options) {
        const parsed = splitMessage(message);
        const result = await fire({
            icon: (options && options.icon) || "question",
            title: (options && options.title) || parsed.title,
            text: (options && options.text) || parsed.text,
            input: (options && options.input) || "text",
            inputPlaceholder: (options && options.inputPlaceholder) || "",
            inputValue: (options && options.inputValue) || "",
            inputValidator: (options && options.inputValidator) || undefined,
            showCancelButton: true,
            confirmButtonText: (options && options.confirmButtonText) || "Continuar",
            cancelButtonText: (options && options.cancelButtonText) || "Cancelar",
            reverseButtons: true,
            ...(options || {})
        });

        if (!result) return window.prompt(String(message || ""), "");
        return result.isConfirmed ? result.value : null;
    }

    window.SAEAlerts = {
        alert: alertBox,
        confirm: confirmBox,
        prompt: promptBox,
        fire
    };
})();
