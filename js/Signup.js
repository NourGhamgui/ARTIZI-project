// Fonction pour valider le formulaire avant la soumission
const validateForm = () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (!username || !email || !password) {
        alert('Tous les champs doivent être remplis.');
        return false;
    }

    // Vérification de la force du mot de passe
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[.]).+$/;
    if (password.length < 8) {
        alert('Le mot de passe doit contenir au moins 8 caractères.');
        return false;
    }

    if (!passwordRegex.test(password)) {
        alert('Le mot de passe doit contenir au moins une majuscule, un chiffre et un point.');
        return false;
    }

    return true;
};

// Fonction pour afficher la force du mot de passe
const updatePasswordStrength = () => {
    const password = document.getElementById('password').value;
    const strengthIndicator = document.getElementById('password-strength');
    const passwordValidationMessage = document.getElementById('password-validation-message');
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[.]).+$/;

    // Vérification de la longueur minimale du mot de passe
    if (password.length < 8) {
        passwordValidationMessage.textContent = 'Le mot de passe doit contenir au moins 8 caractères.';
        passwordValidationMessage.style.color = 'red';
    } 
    // Vérification des critères du mot de passe (majuscule, chiffre, point)
    else if (!passwordRegex.test(password)) {
        passwordValidationMessage.textContent = 'Le mot de passe doit contenir au moins une majuscule, un chiffre et un point.';
        passwordValidationMessage.style.color = 'red';
    } else {
        passwordValidationMessage.textContent = 'Mot de passe valide.';
        passwordValidationMessage.style.color = 'green';
    }

    // Mise à jour de la force du mot de passe
    if (password.length > 12) {
        strengthIndicator.textContent = 'Fort';
        strengthIndicator.style.color = 'green';
    } else if (password.length >= 8) {
        strengthIndicator.textContent = 'Moyen';
        strengthIndicator.style.color = 'orange';
    } else {
        strengthIndicator.textContent = 'Faible';
        strengthIndicator.style.color = 'red';
    }
};

// Fonction principale de soumission
const signUp = async () => {
    if (!validateForm()) {
        return; // Si la validation échoue, on arrête l'exécution
    }

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('http://localhost:8000/api/sign-up/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, email, password }),
        });

        const data = await response.json();
        if (response.ok) {
            alert('Inscription réussie : ' + data.message);
        } else {
            alert('Erreur : ' + data.error);
        }
    } catch (error) {
        alert('Une erreur s\'est produite. Veuillez réessayer.');
        console.error('Error:', error);
    }
};

// Fonction pour basculer l'affichage du mot de passe
const togglePasswordVisibility = () => {
    const passwordField = document.getElementById('password');
    const toggleIcon = document.getElementById('toggle-password');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
    } else {
        passwordField.type = 'password';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
    }
};

// Écouteur d'événement pour suivre la saisie du mot de passe et afficher la force
document.getElementById('password').addEventListener('input', updatePasswordStrength);

// Écouteur d'événement pour basculer la visibilité du mot de passe
document.getElementById('toggle-password').addEventListener('click', togglePasswordVisibility);
