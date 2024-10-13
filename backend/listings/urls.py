from django.urls import path
from .views import ListingsView, ListingView, SearchView


urlpatterns = [
    path('', ListingsView.as_view(), name='listings_list'),
    path('search/', SearchView.as_view(), name='listings_search'),
    path('<slug>/', ListingView.as_view(), name='listing_details')
]
