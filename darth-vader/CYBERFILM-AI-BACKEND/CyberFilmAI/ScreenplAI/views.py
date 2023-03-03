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
'''
class CreateGhostWriterView(APIView):

    serializer_class = CharacterInputFieldsSerializer, PlotInputFieldsSerializer
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            self.request.session.create()

        serializer = self.serializer_class(data=request.data)
        #if serializer.is_valid():

'''


