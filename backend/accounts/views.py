from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions

class SignupView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request, format=None):
        data = request.data
        name = data['name']
        email = data['email']
        password1 = data['password1']
        password2 = data['password2']

        if password1 == password2:
            if User.objects.filter(email=email).exists():
                return Response({'error': 'Email is already used'})
            else:
                if len(password1) < 6:
                    return Response({'error': 'Password must be at least 6 characters'})
                else:
                    user = User.objects.create_user(email=email, name=name, password=password1)

                    user.save()
                    return Response({'success': 'User created successfully'})

        else:
            return Response({'error': 'passwords do not match'})