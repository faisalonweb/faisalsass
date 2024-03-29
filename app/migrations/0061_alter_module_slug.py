# Generated by Django 4.1.5 on 2023-02-14 10:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0060_alter_module_slug"),
    ]

    operations = [
        migrations.AlterField(
            model_name="module",
            name="slug",
            field=models.SlugField(
                choices=[
                    ("payroll", "Payroll"),
                    ("user", "User"),
                    ("employees", "Employees"),
                    ("inventory", "Inventory"),
                    ("settings", "Settings"),
                    ("leave", "Leave"),
                    ("standup", "Standup"),
                    ("availability_messages", "Availability_Messages"),
                ],
                unique=True,
            ),
        ),
    ]
