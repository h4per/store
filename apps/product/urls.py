from django.urls import path
from apps.product.views import product_detail, cart, cart_delete

urlpatterns = [
     path("product_detail/<int:id>/", product_detail, name='product_detail'),
     path("cart/<int:id>", cart, name='cart'),
     path("cart_delete/<int:cart_id>", cart_delete, name='cart_delete'),
]