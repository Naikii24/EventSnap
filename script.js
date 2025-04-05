document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("map")) {
        const map = L.map('map').setView([41.9028, 12.4964], 6);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

        const events = JSON.parse(localStorage.getItem('eventi')) || [];
        events.forEach(event => {
            L.marker([event.lat, event.lon])
                .addTo(map)
                .bindPopup(`<strong>${event.title}</strong><br>${event.description}`);
        });
    }

    if (document.getElementById("addEventForm")) {
        document.getElementById("addEventForm").addEventListener("submit", function(e) {
            e.preventDefault();
            alert('Evento aggiunto con successo!');
            window.location.href = 'eventi.html';
        });
    }
});
