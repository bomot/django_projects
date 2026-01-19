from django.shortcuts import render

def eshop(request):
    return render(request, 'eshop/eshop.html')

def cart(request):
    return render(request, 'eshop/cart.html')
