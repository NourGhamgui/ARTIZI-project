document.addEventListener("DOMContentLoaded", function () {
    const loginInput = document.getElementById("login");
    const passwordInput = document.getElementById("password");
    const postLink = document.querySelector('a[href="subscribe.html"]');

    // Empêcher la redirection si les champs ne sont pas remplis
    postLink.addEventListener("click", function (e) {
        e.preventDefault(); // Bloque le comportement par défaut du lien

        // Vérifie si les champs sont vides
        if (loginInput.value.trim() === "" || passwordInput.value.trim() === "") {
            alert("Please fill in both Login and Password fields before proceeding.");
        } else {
            // Redirige si les champs sont remplis
            window.location.href = postLink.href;
        }
    });
});
