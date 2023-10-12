from rest_framework import permissions
from rest_framework.views import APIView
from .models import Contact
from django.core.mail import send_mail
from rest_framework.response import Response

class ContactCreateView(APIView):
    permission_classes = [permissions.AllowAny]

    def post(self, request. format=None):
        data = self.request.data

        pass
