from django.contrib import admin
from .models import Header, ProjectDerictories
from .forms import HeaderAdminForm, ProjectDerictoriesAdminForm


@admin.register(Header)
class HeaderAdmin(admin.ModelAdmin):
    form = HeaderAdminForm


@admin.register(ProjectDerictories)
class ProjectDerictoriesAdmin(admin.ModelAdmin):
    form = ProjectDerictoriesAdminForm


admin.site.unregister(Header)
admin.site.register(Header, HeaderAdmin)

# Register your models here.
