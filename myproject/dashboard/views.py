from django.shortcuts import render
from django.http import JsonResponse
from .models import Sale
import json

def index(request):
    return render(request,'dashboard.html')
def reports(request):
   
    return render(request,"reports.html")

def api(request):
    data=Sale.objects.values('end_year', 'intensity', 'sector','topic','insight','url','region','start_year','impact','added','published','country','relevance','pestle','source','title','likelihood')
    
    return JsonResponse({"dict":list(data)})
