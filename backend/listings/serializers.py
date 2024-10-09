from rest_framework import serializers
from .models import Listing
from .models import ListingImage

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ['title', 'address', 'city', 'state', 'price', 'sale_type', 'home_type', 'bedrooms', 'bathrooms', 'sqft', 'photo_main', 'slug']


class ListingImageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ListingImage
        fields = '__all__'

class ListingDetailSerializer(serializers.ModelSerializer):
    images = ListingImageSerializer(many=True, read_only=True)
    class Meta:
        model = Listing
        fields = '__all__'
        lookup_field = 'slug'