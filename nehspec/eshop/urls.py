from django.urls import path
from . import views

urlpatterns = [
    path('', views.eshop, name='eshop'),
    path('cart', views.cart, name='cart'),
]