from django.shortcuts import render

def index(request):
    return render(request,"index.html")

def datatables(request):
    return render(request,'datatables.html')