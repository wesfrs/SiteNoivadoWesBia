document.addEventListener('DOMContentLoaded', () => {

    // --- Logic for index.html (Envelope Page) ---
    const envelopeWrapper = document.querySelector('.envelope-wrapper');
    if (envelopeWrapper) {
        envelopeWrapper.addEventListener('click', () => {
            envelopeWrapper.classList.add('open');
            setTimeout(() => { window.location.href = 'convite.html'; }, 2000); // Wait for animation
        });
    }

    // --- Logic for convite.html (Invitation Page) ---
    const music = document.getElementById('background-music');
    if (music) {
        const musicControl = document.getElementById('music-control');
        const musicIcon = musicControl.querySelector('i');

        const syncIcon = () => {
            const isActuallyPlaying = !music.paused;
            musicIcon.classList.toggle('fa-volume-up', isActuallyPlaying);
            musicIcon.classList.toggle('fa-volume-mute', !isActuallyPlaying);
        };

        // Autoplay music on this page, and sync icon
        music.play().catch(e => console.log("Browser blocked autoplay. User interaction needed."));
        syncIcon();

        // Music controls
        musicControl.addEventListener('click', () => {
            if (music.paused) { music.play(); } else { music.pause(); }
        });
        music.addEventListener('play', syncIcon);
        music.addEventListener('pause', syncIcon);

        // Button logic
        const confirmBtn = document.getElementById('confirm-presence');
        const locationBtn = document.getElementById('show-location');
        const calendarBtn = document.getElementById('add-to-calendar');


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

        if (calendarBtn) {
            calendarBtn.addEventListener('click', () => {
                const title = 'Noivado Wesley & Beatriz';
                const startDate = '20251026T140000';
                const endDate = '20251026T200000';
                const details = 'Noivado de Wesley e Beatriz';
                const location = 'Alameda Curitiba, 365 - Res. Doze (Alphaville), Santana de Parnaíba - SP, 06539-020';
                const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(title)}&dates=${startDate}/${endDate}&details=${encodeURIComponent(details)}&location=${encodeURIComponent(location)}`;
                window.open(googleCalendarUrl, '_blank');
            });
        }
    }
});
