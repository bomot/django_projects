from django.urls import path
from . import views

urlpatterns = [
    path('layout/', views.layout, name='layout'),

    path('', views.home, name='home'),
    path('services/', views.services, name='services'),
    path('contacts/', views.contacts, name='contacts'),
]