from django.shortcuts import render

def layout(request):
    return render(request, 'pages/layout.html')
