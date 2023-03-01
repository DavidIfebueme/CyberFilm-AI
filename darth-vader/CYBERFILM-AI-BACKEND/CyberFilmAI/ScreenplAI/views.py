from django.shortcuts import render
from rest_framework import generics

# Create your views here.
def index(request):
    return render(request, 'templates/index.html', {})