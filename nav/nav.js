document.addEventListener('DOMContentLoaded', () => {
    function updateClock() {
        const clockEl = document.getElementById('nav-clock');
        if (clockEl) {
            const now = new Date();
            const hours = String(now.getHours()).padStart(2, '0');
            const minutes = String(now.getMinutes()).padStart(2, '0');
            const seconds = String(now.getSeconds()).padStart(2, '0');
            clockEl.textContent = `${hours}:${minutes}:${seconds}`;
        }
    }
    
    updateClock();
    setInterval(updateClock, 1000);

    // Highlight active nav link
    const navLinks = document.querySelectorAll('.nav-link a');
    const currentURL = window.location.href.split('?')[0].split('#')[0];
    
    navLinks.forEach(link => {
        if (link.href === currentURL) {
            link.parentElement.classList.add('active');
        }
    });
});
