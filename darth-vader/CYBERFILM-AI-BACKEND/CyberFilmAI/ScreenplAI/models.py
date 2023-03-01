from django.db import models

# Create your models here.

class PlotInputFields(models.Model):
    title = models.CharField(max_length=2000, default="")
    logline = models.CharField(max_length=2000, default="")
    Themes = models.CharField(max_length=2000, default="")
    StoryTypes = models.CharField(max_length=2000, default="")
    Genres =  models.CharField(max_length=2000, default="")
    Tone = models.CharField(max_length=2000, default="")
    Audience = models.CharField(max_length=2000, default="")
    B_Story = models.CharField(max_length=2000, default="")
    Setting = models.CharField(max_length=2000, default="")
