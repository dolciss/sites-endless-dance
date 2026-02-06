// Simplified logic for a minimalist experience

document.addEventListener('DOMContentLoaded', () => {
    const phrases = [
        "――皆様どうも初めまして",
        "――揺らせ揺らせダンスホール",
        "この歌の虜になれ――！",
        "――なんだか今日は絶好調",
        "――忘れられないこの景色をちょうだい",
        "――連れて行くよユートピアへ",
        "――終わらせないよ"
    ];

    // Pick a random phrase
    const phraseElement = document.getElementById('random-phrase');
    if (phraseElement) {
        const randomIndex = Math.floor(Math.random() * phrases.length);
        phraseElement.textContent = phrases[randomIndex];
    }

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
