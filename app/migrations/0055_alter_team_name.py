# Generated by Django 4.1.5 on 2023-01-31 12:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0054_standup_time_standup_updated_at_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="team",
            name="name",
            field=models.CharField(max_length=128, unique=True),
        ),
    ]
