const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');

// Show the icon for the mode you'd switch TO
function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'light' ? '🌙' : '☀️';
}

// Load saved choice (default: dark)
let saved = 'dark';
try {
    saved = localStorage.getItem('theme') || 'dark';
} catch (e) {}
applyTheme(saved);

toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    applyTheme(next);
    try {
        localStorage.setItem('theme', next);
    } catch (e) {}
});