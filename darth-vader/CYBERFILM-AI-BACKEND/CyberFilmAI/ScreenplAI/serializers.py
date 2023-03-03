from rest_framework import serializers
from .models import PlotInputFields

class PlotInputFieldsSerializer(serializers.ModelSerializer):
    class Meta:
        model = PlotInputFields
        fields = ('id', 'title', 'logline', 'Themes', 'StoryTypes',
         'Genres', 'Tone', 'Audience', 'B_Story', 'Setting')

