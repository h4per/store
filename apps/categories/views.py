# from django.shortcuts import render
from django.views import generic
from apps.categories.models import Category

# Create your views here.

class CategoryListView(generic.ListView):
    queryset = Category.objects.all()
    template_name = "index.html"
    context_object_name = "categories"
