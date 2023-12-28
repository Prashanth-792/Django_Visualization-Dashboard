from django.contrib import admin

from .models import Sale
from import_export.admin import ImportExportModelAdmin


class StudentAdmin(ImportExportModelAdmin):
    list_display=['end_year', 'intensity', 'sector','topic','insight','url','region','start_year','impact','added','published','country','relevance','pestle','source','title','likelihood']
    

admin.site.register(Sale,StudentAdmin)
