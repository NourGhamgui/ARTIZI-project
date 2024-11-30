document.addEventListener("DOMContentLoaded", function () {
    // Sélectionner les éléments HTML
    const cartIcon = document.querySelector(".cart-icon i");
    const costInput = document.querySelector(".cost input");
    const purchaseButton = document.querySelector("button");

    // Vérifier si les éléments existent avant d'ajouter des événements
    if (cartIcon) {
        // Animation au survol de l'icône du panier
        cartIcon.addEventListener("mouseover", function () {
            cartIcon.style.transform = "scale(1.2)";
            cartIcon.style.transition = "transform 0.3s ease";
        });

        cartIcon.addEventListener("mouseout", function () {
            cartIcon.style.transform = "scale(1)";
        });
    } else {
        console.error("L'élément .cart-icon i est introuvable.");
    }

    if (costInput) {
        // Valider le champ pour n'accepter que des nombres (avec un point décimal facultatif)
        costInput.addEventListener("input", function (e) {
            const value = e.target.value;

            // Garder uniquement les caractères numériques ou un seul point décimal
            if (!/^\d*\.?\d*$/.test(value)) {
                costInput.value = value.slice(0, -1); // Supprimer le dernier caractère invalide
            }

            // Changer la couleur de la bordure selon la validité
            if (costInput.value.trim() !== "") {
                costInput.style.borderColor = "#5784BD"; // Valide
            } else {
                costInput.style.borderColor = "#D58FE7"; // Vide
            }
        });
    } else {
        console.error("L'élément .cost input est introuvable.");
    }

    if (purchaseButton) {
        // Gérer le clic sur le bouton d'achat
        purchaseButton.addEventListener("click", function (e) {
            e.preventDefault(); // Empêcher l'action par défaut

            // Récupérer le coût total et le convertir en nombre
            const totalCost = parseFloat(costInput?.value) || 0;

            // Vérifier si le coût total est valide
            if (totalCost > 0) {
                alert(`Merci pour votre achat ! Votre coût total est de ${totalCost.toFixed(2)} DT.`);
                if (costInput) {
                    costInput.value = ""; // Réinitialiser le champ de saisie
                    costInput.style.borderColor = "#D58FE7"; // Réinitialiser la bordure
                }
            } else {
                alert("Veuillez entrer un montant valide pour continuer.");
            }
        });
    } else {
        console.error("Le bouton d'achat est introuvable.");
    }
});
