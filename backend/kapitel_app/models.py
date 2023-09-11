from django.db import models


class Header(models.Model):
    title = models.TextField(blank=True, null=True, max_length=250, verbose_name='Заголовок')
    texter = models.TextField(max_length=250, verbose_name='Описание')
    image = models.ImageField(upload_to='header_images/', blank=True, null=True, verbose_name='Измените картинку')

    def __str__(self):
        return f'Окно {self.id}'

    class Meta:
        verbose_name_plural = 'Блок "Последние проекты"'
        verbose_name = 'Окно'


class ProjectDerictories(models.Model):
    title = models.TextField(blank=True, null=True, max_length=250, verbose_name='Заголовок')
    square = models.TextField(blank=True, null=True, max_length=250, verbose_name='Площадь')
    texter = models.TextField(max_length=250, verbose_name='Описание')
    image = models.ImageField(upload_to='header_images/', blank=True, null=True, verbose_name='Измените картинку')

    def __str__(self):
        return f'Дом {self.id}'

    class Meta:
        verbose_name_plural = 'Блок "Каталог Реализованных проектов"'
        verbose_name = 'Дом'

# Create your models here.
