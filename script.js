// Inizializza la mappa centrata su una posizione predefinita (Roma)
const map = L.map('map').setView([41.9028, 12.4964], 6);

// Aggiungi il layer della mappa (OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Eventi salvati con il form (se presenti)
const userEvents = JSON.parse(localStorage.getItem('eventi')) || [];

// Dati degli eventi predefiniti
const defaultEvents = [
    {
        title: "Festa della Musica",
        description: "Concerto in piazza a Roma",
        lat: 41.9028,
        lon: 12.4964
    }
];

// Combina gli eventi predefiniti con quelli salvati
const allEvents = defaultEvents.concat(userEvents);

// Aggiungi un marker per ogni evento
allEvents.forEach(event => {
    L.marker([event.lat, event.lon])
        .addTo(map)
        .bindPopup(`<strong>${event.title}</strong><br>${event.description}`);
});
