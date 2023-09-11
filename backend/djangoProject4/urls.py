"""
URL configuration for djangoProject4 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

admin.site.site_header = 'АДМИН ПАНЕЛЬ САЙТА КАПИТЕЛЬ'
admin.site.site_title = 'Админ Панель'
admin.site.index_title = ''

urlpatterns = [
                  path('admin/', admin.site.urls),
                  path('', views.react_app, name='react_app'),
                  path('api/get_header_value/', views.get_header_value, name='get_header_value'),
                  path('api/get_header_image/', views.get_header_image, name='get_header_image'),
                  path('api/get_header_title/', views.get_header_title, name='get_header_title'),
                  path('api/get_project_derictories_value/', views.get_project_derictories_value,
                       name='get_project_derictories_value'),
                  path('api/get_project_derictories_image/', views.get_project_derictories_image,
                       name='get_project_derictories_image'),
                  path('api/get_project_derictories_title/', views.get_project_derictories_title,
                       name='get_project_derictories_title'),
                  path('api/get_project_derictories_square/', views.get_project_derictories_square,
                       name='get_project_derictories_square'),
              ] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
