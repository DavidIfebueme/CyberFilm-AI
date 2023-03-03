from django.urls import path, include
from . import views
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.index, name='index'),
    path('ScreenplAI', include('ScreenplAI.urls')),
    path('', include('frontend.urls'))

] 