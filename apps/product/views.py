from apps.settings.models import Setting, Footer
from apps.product.models import Product, Order, Cart
from apps.product.forms import CartForm

from django.contrib.auth.decorators import login_required
from django.http import HttpResponseRedirect
from django.shortcuts import render, get_object_or_404

# Create your views here.

def product_detail(request, id):
    setting = Setting.objects.first()
    footerinfo = Footer.objects.first()

    products = Product.objects.all()
    product_detail = Product.objects.get(id=id)
    
    context = {
        'setting' : setting,
        'footerinfo': footerinfo,
        'products': products, 
        'product_detail' : product_detail,
        # 'form': CartForm(),
    }
    return render(request, 'product_detail/single-product.html', context)


@login_required
def cart(request, id):
    product = get_object_or_404(Product, id=id)
    user = request.user

    cart, created = Cart.objects.get_or_create(user=user, product=product)

    if user.is_authenticated:
        cart.user = user
        cart.save()

    if request.method == 'POST':
        form = CartForm(request.POST, instance=cart)
        if form.is_valid():
            pre_saved_cart = form.save(commit=False)
            pre_saved_cart.product = product 
            pre_saved_cart.total_price = product.price * pre_saved_cart.quantity
            pre_saved_cart.save()

    return HttpResponseRedirect(request.META['HTTP_REFERER'])


@login_required
def cart_delete(request, cart_id):
    cart = Cart.objects.get(id=cart_id)
    cart.delete()
    return HttpResponseRedirect(request.META['HTTP_REFERER'])



