// Seleziona il titolo del sito utilizzando l'ID
document.addEventListener("DOMContentLoaded", function() {
    // Metti qui il tuo codice JavaScript
    const siteTitle = document.getElementById("site-title");

    // Aggiungi un gestore di eventi per l'ingresso del mouse
    siteTitle.addEventListener("mouseenter", function() {
        siteTitle.style.transition = "opacity 0.5s"; // Aggiungi una transizione per un effetto fluido
        siteTitle.style.opacity = 0.5; // Riduci l'opacità del titolo
    });

    // Aggiungi un gestore di eventi per l'uscita del mouse
    siteTitle.addEventListener("mouseleave", function() {
        siteTitle.style.transition = "opacity 0.5s"; // Aggiungi una transizione per un effetto fluido
        siteTitle.style.opacity = 1; // Ripristina l'opacità del titolo
    });
});

