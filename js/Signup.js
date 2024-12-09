// Importation des bibliothèques Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Configuration Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDv0UZTun4HZHvymmoar80MQhmixNZilRo",
    authDomain: "artizi-91af5.firebaseapp.com",
    projectId: "artizi-91af5",
    storageBucket: "artizi-91af5.firebasestorage.app",
    messagingSenderId: "860010236928",
    appId: "1:860010236928:web:fbc6c06c2b4ba18e8adce5"
  };


// Initialisation Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Fonction pour valider le formulaire avant soumission
const validateForm = () => {
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

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
        strengthIndicator.textContent = 'Faible';
        strengthIndicator.style.color = 'red';
    } 
    // Vérification des critères du mot de passe
    else if (!passwordRegex.test(password)) {
        passwordValidationMessage.textContent = 'Le mot de passe doit contenir au moins une majuscule, un chiffre et un point.';
        passwordValidationMessage.style.color = 'red';
        strengthIndicator.textContent = 'Moyen';
        strengthIndicator.style.color = 'orange';
    } else {
        passwordValidationMessage.textContent = 'Mot de passe valide.';
        passwordValidationMessage.style.color = 'green';
        strengthIndicator.textContent = 'Fort';
        strengthIndicator.style.color = 'green';
    }
};

// Fonction principale de soumission
const signUp = async () => {
    if (!validateForm()) {
        return; // Si la validation échoue, on arrête l'exécution
    }

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    try {
        // Création de l'utilisateur avec Firebase Auth
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        alert(`Inscription réussie pour l'utilisateur : ${user.email}`);
        console.log("Détails utilisateur : ", user);
        // Redirection vers la page d'accueil après inscription
        window.location.href = "home.html";
    } catch (error) {
        // Gestion des erreurs
        console.error('Erreur Firebase:', error);
        if (error.code === 'auth/email-already-in-use') {
            alert('Cet email est déjà utilisé.');
        } else if (error.code === 'auth/invalid-email') {
            alert('Veuillez entrer un email valide.');
        } else if (error.code === 'auth/weak-password') {
            alert('Le mot de passe est trop faible.');
        } else {
            alert('Erreur : ' + error.message);
        }
    }
};

// Fonction pour basculer la visibilité du mot de passe
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

// Écouteurs d'événements
document.getElementById('password').addEventListener('input', updatePasswordStrength);
document.getElementById('toggle-password').addEventListener('click', togglePasswordVisibility);
document.getElementById('sign-up-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Empêche la soumission classique du formulaire
    signUp();
});
