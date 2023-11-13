# Generated by Django 4.2.4 on 2023-11-08 18:19

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='AboutUs',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='about_us/', verbose_name='Фотография')),
                ('title', models.CharField(max_length=255, verbose_name='Заголовок')),
                ('description', models.CharField(max_length=500, verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'О нас',
                'verbose_name_plural': 'О нас',
            },
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Имя')),
                ('email', models.EmailField(max_length=254, verbose_name='Почта')),
                ('title', models.CharField(max_length=100, verbose_name='Заголовок')),
                ('message', models.CharField(max_length=555, verbose_name='Сообщение')),
                ('status_contact', models.BooleanField(default=False, verbose_name='Статус обращения')),
                ('created', models.DateTimeField(auto_now_add=True)),
            ],
            options={
                'verbose_name': 'Контакты',
                'verbose_name_plural': 'Контакты',
            },
        ),
        migrations.CreateModel(
            name='Footer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Заголовок')),
                ('subtitle', models.CharField(max_length=255, verbose_name='Подзаголовок')),
                ('description', models.TextField(verbose_name='Описание')),
            ],
            options={
                'verbose_name': 'Информация нижней части сайта',
                'verbose_name_plural': 'Информации нижней части сайта',
            },
        ),
        migrations.CreateModel(
            name='FooterSlide',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Заголовок')),
                ('subtitle', models.CharField(max_length=200, verbose_name='Подзаголовок')),
                ('description', models.TextField(verbose_name='Содержание')),
                ('img', models.ImageField(upload_to='images/', verbose_name='Фото')),
            ],
            options={
                'verbose_name': 'Нижний слайд',
                'verbose_name_plural': 'Нижние слайды',
            },
        ),
        migrations.CreateModel(
            name='Partner',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, verbose_name='Название партнера')),
                ('logo', models.ImageField(upload_to='partners/', verbose_name='Логотип партнера')),
            ],
            options={
                'verbose_name': 'Партнер',
                'verbose_name_plural': 'Партнеры',
            },
        ),
        migrations.CreateModel(
            name='Setting',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Название сайта')),
                ('description', models.TextField(verbose_name='Описание сайта')),
                ('logo', models.ImageField(upload_to='logo/', verbose_name='Логотип сайта')),
                ('phone', models.CharField(blank=True, max_length=100, null=True, verbose_name='Телефонный номер')),
                ('email', models.EmailField(blank=True, max_length=254, null=True, verbose_name='Почта сайта')),
                ('address', models.CharField(blank=True, max_length=255, null=True, verbose_name='Адрес')),
                ('facebook', models.URLField(blank=True, null=True, verbose_name='Ссылка на страницу facebook')),
                ('instagram', models.URLField(blank=True, null=True, verbose_name='Ссылка на страницу instagram')),
                ('linkedin', models.URLField(blank=True, null=True, verbose_name='Ссылка на страницу linkedin')),
                ('twitter', models.URLField(blank=True, null=True, verbose_name='Ссылка на страницу twitter')),
                ('skype', models.URLField(blank=True, null=True, verbose_name='Ссылка на skype')),
                ('telegram', models.URLField(blank=True, null=True, verbose_name='Ссылка на telegram')),
                ('whatsapp', models.URLField(blank=True, null=True, verbose_name='Ссылка на whatsapp')),
            ],
            options={
                'verbose_name': 'Настройка сайта',
                'verbose_name_plural': 'Настройки сайта',
            },
        ),
        migrations.CreateModel(
            name='Sliders',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200, verbose_name='Заголовок')),
                ('subtitle', models.CharField(max_length=200, verbose_name='Подзаголовок')),
                ('description', models.TextField(verbose_name='Содержание')),
                ('img', models.ImageField(upload_to='images/', verbose_name='Фото')),
            ],
            options={
                'verbose_name': 'Слайд',
                'verbose_name_plural': 'Слайды',
            },
        ),
    ]
