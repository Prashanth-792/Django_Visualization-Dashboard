from django.contrib import admin
from django.urls import path,include
from dashboard import views

urlpatterns = [
    path('',views.reports,name="reports"),
    path('api/',views.api,name="api"),

   
]


