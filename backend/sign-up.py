from django.contrib.auth.models import User  # type: ignore
from django.contrib.auth.hashers import make_password  # type: ignore
from django.http import JsonResponse  # type: ignore
from django.views.decorators.csrf import csrf_exempt  # type: ignore
from django.core.validators import validate_email # type: ignore
from django.core.exceptions import ValidationError # type: ignore
import json
import re

@csrf_exempt
def api_sign_up(request):
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')
            privacy_policy = data.get('privacy_policy')  # Consentement

            # Validation des champs obligatoires
            if not username or not email or not password or privacy_policy is None:
                return JsonResponse({'error': 'Tous les champs sont obligatoires'}, status=400)

            if not privacy_policy:
                return JsonResponse({'error': 'Vous devez accepter les règles de confidentialité'}, status=400)

            # Validation de l'adresse e-mail
            try:
                validate_email(email)
            except ValidationError:
                return JsonResponse({'error': 'Adresse e-mail invalide'}, status=400)

            # Vérification des doublons
            if User.objects.filter(username=username).exists():
                return JsonResponse({'error': 'Le nom d’utilisateur existe déjà'}, status=400)
            if User.objects.filter(email=email).exists():
                return JsonResponse({'error': 'Un compte avec cet e-mail existe déjà'}, status=400)

            # Validation de la force du mot de passe
            if len(password) < 8 or not re.search(r'[A-Z]', password) or not re.search(r'\d', password) or not re.search(r'[.!@#$%^&*]', password):
                return JsonResponse({'error': 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, un chiffre et un symbole spécial.'}, status=400)

            # Création de l'utilisateur
            user = User.objects.create(
                username=username,
                email=email,
                password=make_password(password)
            )
            return JsonResponse({'message': 'Utilisateur créé avec succès'}, status=201)
        except Exception as e:
            return JsonResponse({'error': str(e)}, status=500)
    return JsonResponse({'error': 'Méthode non autorisée'}, status=405)
