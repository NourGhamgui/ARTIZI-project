// JavaScript for Enhanced Dynamic Search
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector(".search-bar input");
    const searchButton = document.querySelector(".search-bar button");
    
    // Define categories and their corresponding URLs
    const categories = {
        accessoires: "accessoires.html",
        painting: "painting.html",
        ceramic: "ceramic.html",
        decoration: "decoration.html",
        "custom clothing": "customClothing.html",
        cosmetics: "cosmetics.html",
        handmade: "handmade.html",
    };

    // Add hover effects for the search button
    searchButton.addEventListener("mouseover", () => {
        searchButton.style.backgroundColor = "  #F9E6E5";
        searchButton.style.color = "#F9E6E5";
        searchButton.style.transition = "all 0.3s ease-in-out";
    });

    searchButton.addEventListener("mouseout", () => {
        searchButton.style.backgroundColor = "#F9E6E5";
        searchButton.style.color = "  #D67A9D";
    });

    // Search functionality
    searchButton.addEventListener("click", () => {
        const query = searchInput.value.toLowerCase().trim();
        if (categories[query]) {
            displayFeedback(query);
            setTimeout(() => {
                window.location.href = categories[query];
            }, 1500); // 1.5-second delay for animation
        } else {
            showError();
        }
    });

    // Display feedback animation
    function displayFeedback(category) {
        const feedback = document.createElement("div");
        feedback.textContent = `Redirecting to ${category}...`;
        feedback.style.position = "fixed";
        feedback.style.top = "50%";
        feedback.style.left = "50%";
        feedback.style.transform = "translate(-50%, -50%)";
        feedback.style.padding = "20px";
        feedback.style.backgroundColor = " #D67A9D";
        feedback.style.color = "#fff";
        feedback.style.fontSize = "1.5rem";
        feedback.style.borderRadius = "10px";
        feedback.style.boxShadow = "0px 4px 10px rgba(0, 0, 0, 0.2)";
        feedback.style.zIndex = "1000"; // Ensure feedback is on top
        feedback.style.animation = "fadeOut 1.5s ease-in-out forwards";
        document.body.appendChild(feedback);

        // Remove feedback after animation
        setTimeout(() => {
            document.body.removeChild(feedback);
        }, 1500);
    }

    // Show error if no match is found
    function showError() {
        searchInput.style.borderColor = "red";
        searchInput.style.animation = "shake 0.5s";
        searchInput.addEventListener("animationend", () => {
            searchInput.style.animation = ""; // Reset animation
            searchInput.style.borderColor = ""; // Reset border color
        });
    }
});


function highlightStars(index) {
    stars.forEach((star, i) => {
        star.style.color = i <= index ? '#FFD700' : '#666';
    });
}

function resetStars() {
    stars.forEach(star => {
        star.style.color = '#666';
    });
}

    document.addEventListener('DOMContentLoaded', () => {
        // Animation hover sur les catégories
        document.querySelectorAll('.category').forEach(category => {
            category.addEventListener('mouseover', () => {
                category.style.transform = 'scale(1.05)';
                category.style.transition = 'transform 0.3s ease';
            });
            category.addEventListener('mouseout', () => {
                category.style.transform = 'scale(1)';
            });
        });

        // Interaction avec la barre de recherche
        const searchInput = document.querySelector('.search-bar input[type="text"]');
        searchInput.addEventListener('focus', () => {
            searchInput.style.backgroundColor = '#fff';
        });
        searchInput.addEventListener('blur', () => {
            searchInput.style.backgroundColor = '#F9E6E5';
        });

        // Gestion des étoiles de notation
        const stars = document.querySelectorAll('.rating-container .fa-star');
        stars.forEach((star, index) => {
            star.addEventListener('mouseover', () => {
                highlightStars(index);
            });
            star.addEventListener('mouseout', () => {
                resetStars();
            });
            star.addEventListener('click', () => {
                alert(`Vous avez donné une note de ${index + 1} étoiles!`);
            });
        });

        function highlightStars(index) {
            stars.forEach((star, i) => {
                star.style.color = i <= index ? '#A35476' : '#666';
            });
        }

        function resetStars() {
            stars.forEach(star => {
                star.style.color = '#666';
            });
        }
    });
    