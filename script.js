// MENU BURGER
const hamburger = document.getElementById("hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
  hamburger.classList.toggle("open");
});

// FORMULAIRE CONNEXION
const formConnexion = document.getElementById('form-connexion');
const messageConnexion = document.getElementById('message-connexion');

if (formConnexion) {
  formConnexion.addEventListener('submit', function(event) {
    event.preventDefault();
    messageConnexion.textContent = "Vous êtes connecté(e) avec succès ! 🎉";
    formConnexion.reset();
  });
}

// FORMULAIRE INSCRIPTION
const formInscription = document.getElementById('form-inscription');
const messageInscription = document.getElementById('message-inscription');

if (formInscription) {
  formInscription.addEventListener('submit', function(event) {
    event.preventDefault();
    messageInscription.textContent = "Vous êtes inscrit(e) avec succès ! 🎉";
    formInscription.reset();
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const confirmation = document.getElementById("confirmation-message");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // empêche l'envoi classique

    // Optionnel : tu peux vider les champs
    form.reset();

    // Affiche le message
    confirmation.style.display = "block";

    // Cache le message après 30 secondes
    setTimeout(() => {
      confirmation.style.display = "none";
    }, 30000);
  });
});