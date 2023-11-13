from apps.product.models import Product, Cart
from django import forms

class CartForm(forms.ModelForm):
    class Meta:
        model = Cart
        fields = ['quantity']