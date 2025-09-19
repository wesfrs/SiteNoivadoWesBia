document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    const music = document.getElementById('background-music');
    const musicControl = document.getElementById('music-control');
    const musicIcon = musicControl.querySelector('i');

    // --- Lógica de Música Robusta ---
    const syncIcon = () => {
        const isActuallyPlaying = !music.paused;
        musicIcon.classList.toggle('fa-volume-up', isActuallyPlaying);
        musicIcon.classList.toggle('fa-volume-mute', !isActuallyPlaying);
    };

    if (localStorage.getItem('musicWasPlaying') === 'true') {
        const savedTime = parseFloat(localStorage.getItem('musicTime')) || 0;
        if (savedTime > 0) {
            music.currentTime = savedTime;
            music.play().catch(e => {
                console.log("Browser bloqueou a continuação automática. O usuário pode clicar no ícone para resumir.");
            });
        }
    }
    syncIcon();

    musicControl.addEventListener('click', () => {
        if (music.paused) { music.play(); } else { music.pause(); }
    });

    music.addEventListener('play', () => {
        localStorage.setItem('musicWasPlaying', 'true');
        syncIcon();
    });

    music.addEventListener('pause', () => {
        localStorage.setItem('musicWasPlaying', 'false');
        syncIcon();
    });

    music.addEventListener('timeupdate', () => {
        if (!music.paused) {
            localStorage.setItem('musicTime', music.currentTime);
        }
    });

    // --- Lógica do Envelope ---
    if (envelopeWrapper) {
        envelopeWrapper.addEventListener('click', () => {
            if (music.paused) { music.play(); }
            envelopeWrapper.classList.add('open');
            setTimeout(() => { window.location.href = 'convite.html'; }, 2000);
        });
    }

    // --- Lógica dos Botões do Convite ---
    const confirmBtn = document.getElementById('confirm-presence');
    const locationBtn = document.getElementById('show-location');

    if (confirmBtn) {
        confirmBtn.addEventListener('click', () => {
            const googleFormUrl = 'https://forms.gle/CGFcykjyRbCQc3HW8';
            window.open(googleFormUrl, '_blank');
        });
    }

    if (locationBtn) {
        locationBtn.addEventListener('click', () => {
            const address = 'Alameda Curitiba, 365 - Res. Doze (Alphaville), Santana de Parnaíba - SP, 06539-020';
            window.open('https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(address), '_blank');
        });
    }
});
