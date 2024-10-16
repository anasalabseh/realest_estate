from rest_framework import serializers
from .models import Listing
from .models import ListingImage

class ListingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Listing
        fields = ['id', 'title', 'address', 'city', 'state', 'price', 'sale_type', 'home_type', 'bedrooms', 'bathrooms', 'sqft', 'photo_main', 'slug']


class ListingImageSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ListingImage
        fields = ['image']

class ListingDetailSerializer(serializers.ModelSerializer):
    images = ListingImageSerializer(many=True, read_only=True)
    class Meta:
        model = Listing
        fields = ['realtor', 'slug', 'title', 'address', 'city', 'state', 'zipcode', 'description', 'sale_type', 'price', 'bedrooms', 'bathrooms', 'home_type', 'sqft', 'open_house', 'photo_main', 'list_date', 'images']
        lookup_field = 'slug'