# Generated by Django 4.2.4 on 2023-11-09 14:28

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0004_remove_order_has_paid_order_status_order_total_price_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='order',
            name='price',
        ),
    ]