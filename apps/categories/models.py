from django.db import models

# Create your models here.

class Category(models.Model):
    title = models.CharField(
        max_length=100,
        verbose_name='Название категории'
    )
    img = models.ImageField(
        verbose_name='Фото',
        upload_to='images/'
    )

    def __str__(self):
        return self.title
    
    class Meta:
        verbose_name = 'Категория'
        verbose_name_plural = 'Категории'


class Subcategory(models.Model):
    title = models.CharField(
        max_length=200, 
        verbose_name="Название категории"
    )
    img = models.ImageField(
        verbose_name='Фото',
        upload_to='images/'
    )
    parent_category = models.ForeignKey(
        Category, on_delete=models.CASCADE,
        related_name='parent_category',
        verbose_name="Родительская категория",
        null=True
    )

    def __str__(self):
        return f"{self.title} - {self.parent_category}"

    class Meta:
        verbose_name = "Подкатегория"
        verbose_name_plural = "Подкатегории"