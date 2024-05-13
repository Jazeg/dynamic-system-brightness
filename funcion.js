// Detectar el tema del sistema operativo y aplicarlo automáticamente
const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)');

// Función para aplicar el tema
function applyTheme(darkMode) {
    document.body.classList.toggle('bootstrap-dark', darkMode);
    document.querySelectorAll('.card').forEach(card => {
        card.classList.toggle('bootstrap-dark', darkMode);
    });
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
}

// Aplicar el tema al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    applyTheme(prefersDarkMode.matches);
});

// Escuchar cambios en la preferencia del tema del sistema
prefersDarkMode.addEventListener('change', e => {
    applyTheme(e.matches);
});


