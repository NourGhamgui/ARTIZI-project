document.addEventListener("DOMContentLoaded", function () {
    const fullNameInput = document.getElementById("fullname");
    const gmailInput = document.getElementById("gmail");
    const creationTypeInput = document.getElementById("creation-type");
    const motivationInput = document.getElementById("motivation");
    const rulesCheckbox = document.querySelector(".styled-checkbox");
    const postLink = document.querySelector('a[href="subscribe.html"]');

    // Empêcher la redirection si les champs ne sont pas remplis ou si la case à cocher n'est pas validée
    postLink.addEventListener("click", function (e) {
        e.preventDefault(); // Bloque la redirection par défaut

        // Vérifie si tous les champs sont remplis et si la case est cochée
        if (
            fullNameInput.value.trim() === "" ||
            gmailInput.value.trim() === "" ||
            creationTypeInput.value.trim() === "" ||
            motivationInput.value.trim() === "" ||
            !rulesCheckbox.checked
        ) {
            alert("Please fill in all the fields and accept the rules before proceeding.");
        } else {
            // Redirige si toutes les conditions sont remplies
            window.location.href = postLink.href;
        }
    });
});
