
from django.urls import path,include
from . import views

urlpatterns = [
    path('',views.index,name="dashboard-index"),
    path('api/',views.api,name="api"),
    
    
    
    
]