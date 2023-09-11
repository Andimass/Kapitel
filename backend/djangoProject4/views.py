from django.shortcuts import render, redirect
from django.http import JsonResponse
from kapitel_app.models import Header, ProjectDerictories
# from kapitel_app.forms import ApplicationForm


# def submit_application(request):
#     if request.method == 'POST':
#         form = ApplicationForm(request.POST)
#         if form.is_valid():
#             form.save()
#             # Верните сообщение об успешной отправке заявки или выполните другие действия
#     else:
#         form = ApplicationForm()
#
#     return render(request, 'index.html', {'form': form})
#
#
# ***---Header---***#
def get_header_value(request):
    headers = Header.objects.all()  # Получаем все объекты модели Header
    header_values = [header.texter for header in headers]  # Собираем значения texter в список
    return JsonResponse({'headerValues': header_values})  # Возвращаем список значений в формате JSON


def get_header_title(request):
    headers = Header.objects.all()
    header_title = [header.title for header in headers]
    return JsonResponse({'headerTitle': header_title})


def get_header_image(request):
    headers = Header.objects.all()  # Получаем первый объект модели Header
    header_image = [header.image.url for header in headers]
    return JsonResponse({'headerImage': header_image})


# ***---ProjectDerictories---***#

def get_project_derictories_value(request):
    project_derictories = ProjectDerictories.objects.all()  # Получаем все объекты модели Header
    project_derictories_values = [project_derictorie.texter for project_derictorie in
                                  project_derictories]  # Собираем значения texter в список
    return JsonResponse(
        {'project_derictorie_Values': project_derictories_values})  # Возвращаем список значений в формате JSON


def get_project_derictories_title(request):
    project_derictories = ProjectDerictories.objects.all()
    project_derictories_title = [project_derictorie.title for project_derictorie in project_derictories]
    return JsonResponse({'project_derictorie_Title': project_derictories_title})


def get_project_derictories_image(request):
    project_derictories = ProjectDerictories.objects.all()  # Получаем первый объект модели Header
    project_derictories_image = [project_derictorie.image.url for project_derictorie in project_derictories]
    return JsonResponse({'project_derictorie_Image': project_derictories_image})


def get_project_derictories_square(request):
    project_derictories = ProjectDerictories.objects.all()  # Получаем первый объект модели Header
    project_derictories_square = [project_derictorie.square for project_derictorie in project_derictories]
    return JsonResponse({'project_derictorie_Square': project_derictories_square})


def react_app(request):
    return render(request, 'index.html')