from django.urls import path
from . import views

urlpatterns = [
    path('topseller/', views.top_seller_view, name='topseller'),
    path('', views.realtors_list_view, name='realtors-list'),
    path('<pk>/', views.realtor_retrieve_view, name='realtor-retrive'),
]
