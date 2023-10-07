from django.urls import path
from .views import ListingView, ListingsView, SearchView

urlpatterns = [
     path('', ListingsView.as_view(), name='listing-view'),
     path('search/', SearchView.as_view(), name='listing-search'),
     path('<slug>/', ListingView.as_view(), name='listing-view')
]
