from django.shortcuts import render
from django.core.paginator import Paginator

from apps.product.models import Product, Cart
from apps.settings.models import Setting, Sliders, FooterSlide, Footer, Partner, AboutUs, Contact
from apps.categories.models import Category, Subcategory


def index(request):

    context = {
        'setting' : Setting.objects.first(),
        'products': Product.objects.all(),
        'categories' : Category.objects.all,
        'subcategories' : Subcategory.objects.all(),
        'footerinfo': Footer.objects.first(),
        'slide_first': Sliders.objects.all()[0],
        'slide_second': Sliders.objects.all()[1],
        'cart': Cart.objects.all(),
        'partner': Partner.objects.all(),
    }
    return render(request, 'settings/index.html', context)


def shop_page(request):
    items = Product.objects.all()

    categories = Category.objects.all()
    subcategories = Subcategory.objects.all()

    setting = Setting.objects.first()
    footerinfo = Footer.objects.first()

    item_name = request.GET.get('search')
    if item_name != '' and item_name is not None:
        items = items.filter(title__icontains=item_name)

    paginator = Paginator(items, 3)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'page_obj': page_obj,
        'setting' : setting,
        'categories' : categories,
        'subcategories' : subcategories,
        'slide_first': Sliders.objects.all()[0],
        'slide_second': Sliders.objects.all()[1],
        'cart': Cart.objects.all(),
        'footerinfo': footerinfo,
    }

    return render(request, 'settings/shop.html', context)


def contacts(request):
    context = {
        'setting' : Setting.objects.first(),
        'contacts': Contact.objects.first(),
        'footerinfo': Footer.objects.first(),
        'partner': Partner.objects.all(),
    }
    return render(request, 'settings/contact.html', context)


def about(request):
    context = {
        'setting' : Setting.objects.first(),
        'about': AboutUs.objects.first(),
        'footerinfo': Footer.objects.first(),
        'partner': Partner.objects.all(),
    }
    return render(request, 'settings/about-us.html', context)


def shop_cart(request):
    context = {
        'setting' : Setting.objects.first(),
        'footerinfo': Footer.objects.first(),
        'cart': Cart.objects.all(),
        'partner': Partner.objects.all(),
    }
    return render(request, 'settings/shop-cart.html', context)
