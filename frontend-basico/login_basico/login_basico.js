// Initialize particles
function initializeParticles() {
    const container = document.getElementById('particlesContainer');
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

function validarCredenciales() {
    const nombre = document.getElementById('nombreUsuario').value.trim();
    const id = document.getElementById('numeroID').value.trim();
    const institucion = document.getElementById('institucion').value;
    const cargo = document.getElementById('cargo').value.trim();

    if (!nombre || !id || !institucion || !cargo) {
        showError('⚠️ Por favor completa todos los campos');
        return;
    }

    if (nombre.length < 3) {
        showError('⚠️ El nombre debe tener al menos 3 caracteres');
        return;
    }

    if (id.length < 6) {
        showError('⚠️ El documento ID debe tener al menos 6 caracteres');
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

    // ✅ CREAR OBJETO CON TODOS LOS DATOS DEL USUARIO
    const usuarioData = {
        nombre: nombre,
        id: id,
        institucion: institucion,
        cargo: cargo,
        nivelAcceso: 'basico',
        fechaIngreso: new Date().toISOString(),
        sesionID: 'sesion_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9)
    };

    // ✅ GUARDAR EN LOCALSTORAGE - ORDEN IMPORTANTE
    console.log('📝 Guardando datos del usuario en localStorage...');
    
    localStorage.setItem('usuarioSAE', JSON.stringify(usuarioData));
    console.log('✅ usuarioSAE guardado:', JSON.stringify(usuarioData));
    
    localStorage.setItem('nombreUsuario', nombre);
    console.log('✅ nombreUsuario guardado:', nombre);
    
    localStorage.setItem('nombreCompleto', nombre);  // BACKUP del nombre
    console.log('✅ nombreCompleto guardado:', nombre);
    
    localStorage.setItem('idUsuario', id);
    console.log('✅ idUsuario guardado:', id);
    
    localStorage.setItem('institucionUsuario', institucion);
    console.log('✅ institucionUsuario guardado:', institucion);
    
    localStorage.setItem('cargoUsuario', cargo);
    console.log('✅ cargoUsuario guardado:', cargo);
    
    localStorage.setItem('nivelAcceso', 'basico');
    console.log('✅ nivelAcceso guardado: basico');

    // ✅ VERIFICAR QUE SE GUARDÓ CORRECTAMENTE
    const verificacion = localStorage.getItem('nombreUsuario');
    console.log('🔍 VERIFICACIÓN - nombreUsuario en localStorage:', verificacion);
    
    if (!verificacion) {
        console.error('❌ ERROR: No se pudo guardar el nombre en localStorage');
        showError('❌ Error al guardar datos. Intenta de nuevo.');
        return;
    }

    showSuccess(`✅ Bienvenido ${nombre}. Redirigiendo a niveles...`);

    // ✅ REDIRIGIR DESPUÉS DE 2.5 SEGUNDOS
    setTimeout(() => {
        console.log('🔗 Redirigiendo a niveles.html');
        window.location.href = '../../inicio/niveles/niveles.html';
    }, 2500);
}

function limpiarSesionPreservandoAuditoria() {
    const registros = localStorage.getItem('sae_auditoria_registros');
    const actual = localStorage.getItem('sae_auditoria_sesion_actual');
    const ultima = localStorage.getItem('sae_ultima_auditoria');
    localStorage.clear();
    if (registros) localStorage.setItem('sae_auditoria_registros', registros);
    if (actual) localStorage.setItem('sae_auditoria_sesion_actual', actual);
    if (ultima) localStorage.setItem('sae_ultima_auditoria', ultima);
}

function volverAlNivel() {
    if (confirm('¿Deseas volver al menú?')) {
        limpiarSesionPreservandoAuditoria();
        window.location.href = '../../inicio/niveles/niveles.html';
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    initializeParticles();
    console.log('🔐 SAE - Login Basico cargado');

    // ✅ LIMPIAR DATOS ANTERIORES AL INICIO (OPCIONAL)
    // Descomenta si quieres limpiar cada vez que se abre el login
    // localStorage.clear();

    // ✅ RESTAURAR DATOS ANTERIORES SI EXISTEN
    const usuarioGuardado = localStorage.getItem('usuarioSAE');
    if (usuarioGuardado) {
        try {
            const datos = JSON.parse(usuarioGuardado);
            if (datos.nivelAcceso === 'basico') {
                document.getElementById('nombreUsuario').value = datos.nombre || '';
                document.getElementById('numeroID').value = datos.id || '';
                document.getElementById('institucion').value = datos.institucion || '';
                document.getElementById('cargo').value = datos.cargo || '';
                console.log('✅ Datos anteriores restaurados:', datos.nombre);
            }
        } catch (e) {
            console.log('No se pudo restaurar datos previos');
        }
    }

    // ✅ SETUP DEL FORMULARIO
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            validarCredenciales();
        });

        loginForm.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                validarCredenciales();
            }
        });
    }
});

// ==========================================
// FUNCIÓN ACCEDER A SAE
// ==========================================

function irAContextos() {
    console.log('🟢 Accediendo a Contextos...');
    
    // ✅ OBTENER EL NOMBRE ANTES DE NAVEGAR
    const nombre = document.getElementById('nombreUsuario').value.trim();
    if (!nombre) {
        alert('Por favor, ingresa tu nombre primero.');
        return;
    }
    
    // ✅ GUARDAR NOMBRE ANTES DE NAVEGAR
    localStorage.setItem('nombreUsuario', nombre);
    console.log('✅ Nombre guardado antes de navegar:', nombre);
    
    // Validar que exista el banco de historias
    if (typeof bancoDeHistorias === 'undefined' || !bancoDeHistorias) {
        alert("Error: No se cargó correctamente el banco de datos. Recarga la página.");
        return;
    }
    
    // Obtener caso aleatorio
    const casosDisponibles = Object.keys(bancoDeHistorias);
    const casoAleatorio = casosDisponibles[Math.floor(Math.random() * casosDisponibles.length)];
    
    // Guardar el caso en localStorage para usarlo en contextos.html
    localStorage.setItem('casoSeleccionado', casoAleatorio);
    
    console.log('✓ Caso seleccionado:', casoAleatorio);
    console.log('✓ Nombre guardado:', nombre);
    console.log('✓ Redirigiendo a contextos.html');
    
    // Navegar a contextos.html
    window.location.href = '../agentes/contextos.html';
}
