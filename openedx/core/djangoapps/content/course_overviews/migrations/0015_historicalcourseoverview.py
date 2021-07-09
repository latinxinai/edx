# -*- coding: utf-8 -*-
# Generated by Django 1.11.20 on 2019-05-30 21:13


from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone
import model_utils.fields
import opaque_keys.edx.django.models
import simple_history.models


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('course_overviews', '0014_courseoverview_certificate_available_date'),
    ]

    operations = [
        migrations.CreateModel(
            name='HistoricalCourseOverview',
            fields=[
                ('created', model_utils.fields.AutoCreatedField(default=django.utils.timezone.now, editable=False, verbose_name='created')),
                ('modified', model_utils.fields.AutoLastModifiedField(default=django.utils.timezone.now, editable=False, verbose_name='modified')),
                ('version', models.IntegerField()),
                ('id', opaque_keys.edx.django.models.CourseKeyField(db_index=True, max_length=255)),
                ('_location', opaque_keys.edx.django.models.UsageKeyField(max_length=255)),
                ('org', models.TextField(default=u'outdated_entry', max_length=255)),
                ('display_name', models.TextField(null=True)),
                ('display_number_with_default', models.TextField()),
                ('display_org_with_default', models.TextField()),
                ('start', models.DateTimeField(null=True)),
                ('end', models.DateTimeField(null=True)),
                ('advertised_start', models.TextField(null=True)),
                ('announcement', models.DateTimeField(null=True)),
                ('course_image_url', models.TextField()),
                ('social_sharing_url', models.TextField(null=True)),
                ('end_of_course_survey_url', models.TextField(null=True)),
                ('certificates_display_behavior', models.TextField(null=True)),
                ('certificates_show_before_end', models.BooleanField(default=False)),
                ('cert_html_view_enabled', models.BooleanField(default=False)),
                ('has_any_active_web_certificate', models.BooleanField(default=False)),
                ('cert_name_short', models.TextField()),
                ('cert_name_long', models.TextField()),
                ('certificate_available_date', models.DateTimeField(default=None, null=True)),
                ('lowest_passing_grade', models.DecimalField(decimal_places=2, max_digits=5, null=True)),
                ('days_early_for_beta', models.FloatField(null=True)),
                ('mobile_available', models.BooleanField(default=False)),
                ('visible_to_staff_only', models.BooleanField(default=False)),
                ('_pre_requisite_courses_json', models.TextField()),
                ('enrollment_start', models.DateTimeField(null=True)),
                ('enrollment_end', models.DateTimeField(null=True)),
                ('enrollment_domain', models.TextField(null=True)),
                ('invitation_only', models.BooleanField(default=False)),
                ('max_student_enrollments_allowed', models.IntegerField(null=True)),
                ('catalog_visibility', models.TextField(null=True)),
                ('short_description', models.TextField(null=True)),
                ('course_video_url', models.TextField(null=True)),
                ('effort', models.TextField(null=True)),
                ('self_paced', models.BooleanField(default=False)),
                ('marketing_url', models.TextField(null=True)),
                ('eligible_for_financial_aid', models.BooleanField(default=True)),
                ('language', models.TextField(null=True)),
                ('history_id', models.AutoField(primary_key=True, serialize=False)),
                ('history_date', models.DateTimeField()),
                ('history_change_reason', models.CharField(max_length=100, null=True)),
                ('history_type', models.CharField(choices=[('+', 'Created'), ('~', 'Changed'), ('-', 'Deleted')], max_length=1)),
                ('history_user', models.ForeignKey(null=True, on_delete=django.db.models.deletion.SET_NULL, related_name='+', to=settings.AUTH_USER_MODEL)),
            ],
            options={
                'ordering': ('-history_date', '-history_id'),
                'get_latest_by': 'history_date',
                'verbose_name': 'historical course overview',
            },
            bases=(simple_history.models.HistoricalChanges, models.Model),
        ),
    ]
