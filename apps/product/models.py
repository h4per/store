from django.db import models

from apps.categories.models import Category, Subcategory
from apps.users.models import  User
# Create your models here.

        
class Product(models.Model):
    title = models.CharField(
        max_length=200, 
        verbose_name="Название продукта"
    )
    description = models.TextField(
        verbose_name="Описание продукта"
    )
    category = models.ForeignKey(
        Category, on_delete=models.SET_NULL,
        related_name='category_product',
        verbose_name="Категории",
        null=True
    )
    subcategory = models.ForeignKey(
        Subcategory, on_delete=models.SET_NULL,
        related_name='subcategory_product',
        verbose_name="Подкатегории",
        null=True
    )
    price = models.DecimalField(
        max_digits=30,
        decimal_places=2,
        verbose_name="Цена",
    )
    old_price = models.DecimalField(
        max_digits=30,
        decimal_places=2,
        verbose_name="Старая цена",
    )
    discount = models.DecimalField(
        max_digits=30,
        decimal_places=2,
        verbose_name="Скидка",
        default=0
    )
    CURRENCY_CHOICES = (
        ('KGZ', 'KGZ'),
        ('RUB', 'RUB'),
        ('EURO', 'EURO'),
        ('USD', 'USD'),
    )
    currency = models.CharField(
        choices=CURRENCY_CHOICES,
        verbose_name="Валюта",
        max_length=255,
        default='KGZ',
        null=True
    )
    img = models.ImageField(
        verbose_name='Фото',
        upload_to='images/'
    )
    AVAILABLE_CHOICES = (
    ('В наличии', 'В наличии'),
    ('На складе', 'На складе'),
    ('Нет в наличии', 'Нет в наличии'),
    )
    is_available = models.CharField(
        verbose_name='Наличие товара',
        max_length=20,
        choices=AVAILABLE_CHOICES,
        default='В наличии'
    )
    created = models.DateTimeField(
        verbose_name='Создан',
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.title}"

    class Meta:
        verbose_name = "Продукт"
        verbose_name_plural = "Продукты"


class Order(models.Model):
    name = models.CharField(
        max_length=150,
        verbose_name='Имя'
    )
    email = models.EmailField(
        max_length=100,
        verbose_name='Email'
    )
    product = models.ForeignKey(
        Product, 
        on_delete=models.PROTECT,
        verbose_name='Продукт'
    )
    quantity = models.PositiveIntegerField(
        default=0,
        null=True
    )
    total_price = models.DecimalField(
        max_digits=30,
        decimal_places=2,
        verbose_name="Итоговая цена",
        default=0
    )
    discount = models.DecimalField(
        max_digits=30,
        decimal_places=2,
        verbose_name="Скидка",
        default=0
    )
    STATUS_CHOICES = (
        ('pending', 'Ожидание оплаты'),
        ('paid', 'Оплачено'),
        ('shipped', 'Отправлено'),
        ('delivered', 'Доставлено'),
    )
    status = models.CharField(
        choices=STATUS_CHOICES,
        verbose_name="Статус",
        max_length=255,
        default='pending'
    )
    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.product} - {self.quantity}"


    class Meta:
        verbose_name = "Заказ"
        verbose_name_plural = "Заказы"
    


class Cart(models.Model):
    user = models.ForeignKey(
        User, 
        on_delete=models.CASCADE,
        verbose_name='Имя пользователя'
    )
    product = models.ForeignKey(
        Product, 
        on_delete=models.CASCADE,
        verbose_name='Продукт'
    )
    quantity = models.PositiveSmallIntegerField(
        verbose_name='Количество',
        default=1,
    )
    total_price = models.DecimalField(
        max_digits=30,
        decimal_places=2,
        verbose_name="Итоговая цена",
        default=0
    )
    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return f"{self.product} - {self.quantity}"


    class Meta:
        verbose_name = "Корзина"
        verbose_name_plural = "Корзина"
