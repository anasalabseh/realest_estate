from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework import permissions
from .models import Realtor
from .serializers import RealtorSerializer

class RealtorListView(ListAPIView):
    permission_classes = [permissions.AllowAny]
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer
    pagination_class = None

realtors_list_view = RealtorListView.as_view()

class RealtorRetrieveView(RetrieveAPIView):
    queryset = Realtor.objects.all()
    serializer_class = RealtorSerializer

realtor_retrieve_view = RealtorRetrieveView.as_view()

class TopSellerView(ListAPIView):
    permission_classes = [permissions.AllowAny]

    queryset = Realtor.objects.filter(top_seller=True)
    serializer_class = RealtorSerializer

top_seller_view = TopSellerView.as_view()