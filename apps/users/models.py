from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid

# Create your models here.
class User(AbstractUser):
    email = models.EmailField(
        max_length=100,
        verbose_name='Email'
    )
    phone_number = models.CharField(
        max_length=100,
        verbose_name='Номер телефона'
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        default=None,
        verbose_name='Создано'
    )
    balance = models.PositiveBigIntegerField(
        verbose_name="Баланс пользователя", 
        default=0
    )
    wallet = models.CharField(
        default=uuid.uuid4,
        verbose_name="Идентификатор кошелька",
        max_length=150,
        unique=True
    )
    created_at = models.DateTimeField(
        auto_now_add=True,
        verbose_name='Создано'
    )
    
    def __str__(self):
        return f"{self.username} - {self.created_at}"
    
    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'