from django.contrib import admin
from apps.product.models import Product, Order, Cart

# Register your models here.

admin.site.register(Product)
admin.site.register(Order)
admin.site.register(Cart)