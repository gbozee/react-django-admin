from django.contrib import admin

# Register your models here.
from .models import Todo

@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ['description','created','user','completed']