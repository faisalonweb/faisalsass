# Generated by Django 4.1 on 2022-12-27 09:55

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ("app", "0039_remove_leave_hr_remove_leave_leave_leave_status_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="leave",
            name="organization",
            field=models.ForeignKey(
                default=1,
                on_delete=django.db.models.deletion.CASCADE,
                to="app.organization",
            ),
            preserve_default=False,
        ),
    ]
