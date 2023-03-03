from django.shortcuts import render
from rest_framework import generics
from .serializers import PlotInputFieldsSerializer
from .models import *  

# Create your views here.
class IndexView(generics.ListAPIView):
    queryset = PlotInputFields.objects.all() 
    serializer_class = PlotInputFieldsSerializer