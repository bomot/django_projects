from django.shortcuts import render

def layout(request):
    return render(request, 'pages/layout.html')

def home(request):
    return render(request, 'pages/home.html')

def services(request):
    return render(request, 'pages/services.html')

def contacts(request):
    return render(request, 'pages/contacts.html')
