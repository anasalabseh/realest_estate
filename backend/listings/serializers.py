from rest_framework import serializers
from .models import Listing

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ['title', 'address', 'city', 'state', 'price', 
                  'sale_type', 'home_type', 'bedrooms',
                  'sqrft', 'photo_main', 'slug']
        
class ListingDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = "__all__"