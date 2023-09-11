from django import forms
from .models import Header, ProjectDerictories


class HeaderAdminForm(forms.ModelForm):
    class Meta:
        model = Header
        fields = '__all__'


class ProjectDerictoriesAdminForm(forms.ModelForm):
    class Meta:
        model = ProjectDerictories
        fields = '__all__'