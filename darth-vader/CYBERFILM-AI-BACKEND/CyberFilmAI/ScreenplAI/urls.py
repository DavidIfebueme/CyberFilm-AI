from django.urls import path
from .views import *

urlpatterns = [
        path('index', IndexView.as_view()),

] 