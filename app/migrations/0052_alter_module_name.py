# Generated by Django 4.1 on 2023-01-30 12:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0051_employee_is_deleted_user_is_deleted_alter_user_email"),
    ]

    operations = [
        migrations.AlterField(
            model_name="module",
            name="name",
            field=models.CharField(max_length=64, unique=True),
        ),
    ]