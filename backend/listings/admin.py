from django.contrib import admin
from .models import Listing
from .models import ListingImage

class ListingAdmin(admin.ModelAdmin):
    list_display = ['id', 'title', 'is_published', 'price', 'list_date', 'realtor']
    list_display_links = ['id', 'title']
    list_filter = ['realtor']
    list_editable = ['is_published']
    search_fields = ['title', 'description', 'addreass', 'city', 'state', 'zipcode', 'price']
    list_per_page = 25

class ListingImageAdmin(admin.ModelAdmin):
    list_display = ['id', 'listing']



admin.site.register(ListingImage, ListingImageAdmin)
admin.site.register(Listing, ListingAdmin)