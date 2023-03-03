from django.shortcuts import render
from rest_framework import generics, status
from .serializers import PlotInputFieldsSerializer, CharacterInputFieldsSerializer
from .models import *  
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
class IndexView(generics.ListAPIView):
    queryset = PlotInputFields.objects.all() 
    serializer_class = PlotInputFieldsSerializer



