// Initialize particles
function initializeParticles() {
    const container = document.getElementById('particlesContainer');
    if (!container) return;

    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDuration = (Math.random() * 20 + 20) + 's';
        particle.style.animationDelay = Math.random() * 5 + 's';
        container.appendChild(particle);
    }
}

function showError(msg) {
    const errorEl = document.getElementById('errorMessage');
    errorEl.textContent = msg;
    errorEl.classList.add('show');
    setTimeout(() => errorEl.classList.remove('show'), 5000);
}

function showSuccess(msg) {
    const successEl = document.getElementById('successMessage');
    successEl.textContent = msg;
    successEl.classList.add('show');
    setTimeout(() => successEl.classList.remove('show'), 5000);
}

async function mostrarAlertaValidacion(mensaje, campo) {
    await window.SAEAlerts.alert(mensaje, {
        icon: 'warning',
        title: 'Completa el formulario',
        text: mensaje
    });
    campo.focus();
}

async function validarCredenciales() {
    const campos = [
        { elemento: document.getElementById('nombreUsuario'), etiqueta: 'Nombre completo' },
        { elemento: document.getElementById('numeroID'), etiqueta: 'Cédula / Documento / ID' },
        { elemento: document.getElementById('institucion'), etiqueta: 'Institución / Agencia' },
        { elemento: document.getElementById('cargo'), etiqueta: 'Cargo / Función' }
    ];
    const faltantes = campos.filter(({ elemento }) => !elemento.value.trim());

    if (faltantes.length) {
        const lista = faltantes.map(({ etiqueta }) => `• ${etiqueta}`).join('\n');
        await mostrarAlertaValidacion(
            `Debes llenar todos los campos para continuar.\n\nCampos pendientes:\n${lista}`,
            faltantes[0].elemento
        );
        return;
    }

    const nombre = campos[0].elemento.value.trim();
    const id = campos[1].elemento.value.trim();
    const institucion = campos[2].elemento.value;
    const cargo = campos[3].elemento.value.trim();

    if (nombre.length < 3) {
        await mostrarAlertaValidacion('El nombre completo debe tener al menos 3 caracteres.', campos[0].elemento);
        return;
    }

    if (id.length < 6) {
        await mostrarAlertaValidacion('El documento de identidad debe tener al menos 6 caracteres.', campos[1].elemento);
        return;
    }

    if (cargo.length < 3) {
        await mostrarAlertaValidacion('El cargo o función debe tener al menos 3 caracteres.', campos[3].elemento);
        return;
    }

    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '⏳ Validando...';
    submitBtn.disabled = true;

    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        autenticar({nombre, id, institucion, cargo});
    }, 2000);
}

function autenticar(datos = {}) {
    const nombre = datos.nombre || 'Profesional Autorizado';
    const id = datos.id || 'Sin ID';
    const institucion = datos.institucion || 'Sin Institución';
    const cargo = datos.cargo || 'Operador Avanzado';

    const usuarioData = {
        nombre: nombre,
        id: id,
        institucion: institucion,
        cargo: cargo,
        nivelAcceso: 'experto',
        fechaIngreso: new Date().toISOString(),
        sesionID: 'sesion_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
    };

    localStorage.setItem('usuarioSAE', JSON.stringify(usuarioData));
    localStorage.setItem('nombreUsuario', nombre);
    localStorage.setItem('idUsuario', id);
    localStorage.setItem('nivelAcceso', 'experto');

    showSuccess(`✅ Bienvenido ${nombre}. Abriendo casos del nivel experto...`);

    setTimeout(() => {
        window.location.href = '../seleccion_delito.html';
    }, 2500);
}

function limpiarSesionPreservandoAuditoria() {
    const registros = localStorage.getItem('sae_auditoria_registros');
    const actual = localStorage.getItem('sae_auditoria_sesion_actual');
    const ultima = localStorage.getItem('sae_ultima_auditoria');
    const tema = localStorage.getItem('sae-theme');
    localStorage.clear();
    if (registros) localStorage.setItem('sae_auditoria_registros', registros);
    if (actual) localStorage.setItem('sae_auditoria_sesion_actual', actual);
    if (ultima) localStorage.setItem('sae_ultima_auditoria', ultima);
    if (tema) localStorage.setItem('sae-theme', tema);
}

async function volverAlNivel() {
    if (await window.SAEAlerts.confirm('¿Deseas volver al menú?')) {
        limpiarSesionPreservandoAuditoria();
        window.location.href = '../../inicio/niveles/niveles.html';
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeParticles();
    console.log('🔐 SAE - Login Experto cargado');

    const usuarioGuardado = localStorage.getItem('usuarioSAE');
    if (usuarioGuardado) {
        try {
            const datos = JSON.parse(usuarioGuardado);
            if (datos.nivelAcceso === 'experto') {
                document.getElementById('nombreUsuario').value = datos.nombre || '';
                document.getElementById('numeroID').value = datos.id || '';
            }
        } catch (e) {
            console.log('No se pudo restaurar datos previos');
        }
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            validarCredenciales();
        });

    }
});

function irASeleccionDelito() {
    validarCredenciales();
}
