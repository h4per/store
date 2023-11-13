from django.urls import path 
from apps.settings.views import index, shop_page, contacts, about, shop_cart

urlpatterns = [
    path("", index, name = "index"),
    path("store/", shop_page , name='store'),
    path("contacts/", contacts , name='contacts'),
    path("about_us/", about , name='about_us'),
    path("shop_cart/", shop_cart, name='shop_cart'),
]

