# Generated by Django 4.1.3 on 2022-12-20 05:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0037_employee_leave_count"),
    ]

    operations = [
        migrations.AddField(
            model_name="leave",
            name="leave_from",
            field=models.DateField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name="leave",
            name="leave_to",
            field=models.DateField(blank=True, null=True),
        ),
    ]