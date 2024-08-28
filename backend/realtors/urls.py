from django.urls import path
from .views import RealtorListView, RealtorView, TopSellerView

urlpatterns = [
    path('', RealtorListView.as_view(), name='list_realtors'),
    path('topseller/', TopSellerView.as_view(), name='list_topsellers'),
    path('<pk>/', RealtorView.as_view(), name='realtor_detail')
]
