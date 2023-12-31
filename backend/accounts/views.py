from django.contrib.auth import get_user_model
User = get_user_model()
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions

 
class SignupView(APIView):
    permission_classes = [permissions.AllowAny]
    

    def post(self, request, format=None):
        data = self.request.data
        name = data['name']
        email = data['email']
        password = data['password']
        password2 = data['password2']

        if password == password2:
            if User.objects.filter(email=email).exists():
              return Response({'error': 'your email is already used'})
            else:
                if len(password) < 8:
                    return Response({'error': 'password is short, you must provide 8 charachters password'})
                else:
                    user = User.objects.create_user(name=name, email=email, password=password)
                    user.save()
                    return Response({'success': 'user created successfully'})
        else:
            return Response({'error': 'passwords do not match'})
        
