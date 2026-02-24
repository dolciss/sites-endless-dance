// Simplified logic for a minimalist experience

document.addEventListener('DOMContentLoaded', () => {
    // Subtle parallax effect on background blobs
    document.addEventListener('mousemove', (e) => {
        const x = (e.clientX / window.innerWidth) - 0.5;
        const y = (e.clientY / window.innerHeight) - 0.5;

        const blobs = document.querySelectorAll('.blob');
        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 30;
            blob.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
        });
    });
});
