from django.db import models

class PlotInputFields(models.Model):
    title = models.CharField(max_length=2000, default="")
    logline = models.CharField(max_length=2000, default="")
    themes = models.CharField(max_length=2000, default="")
    story_types = models.CharField(max_length=2000, default="")
    genres =  models.CharField(max_length=2000, default="")
    tone = models.CharField(max_length=2000, default="")
    audience = models.CharField(max_length=2000, default="")
    b_story = models.CharField(max_length=2000, default="")
    setting = models.CharField(max_length=2000, default="")

    def __str__(self):
        return self.title

class CharacterInputFields(models.Model):
    name = models.CharField(max_length=2000, default="")
    character_arc = models.CharField(max_length=2000, default="")
    description = models.CharField(max_length=2000, default="")
    personality = models.CharField(max_length=2000, default="")
    archetypes = models.CharField(max_length=2000, default="")
    want = models.CharField(max_length=2000, default="")
    need = models.CharField(max_length=2000, default="")
    flaw = models.CharField(max_length=2000, default="")
    strength = models.CharField(max_length=2000, default="")
    skills = models.CharField(max_length=2000, default="")

    def __str__(self):
        return self.name

class ActsOutputField(models.Model):
    act1 = models.CharField(max_length=2000, default="")
    act2 = models.CharField(max_length=2000, default="")
    act3 = models.CharField(max_length=2000, default="")

    def get_acts(self):
        return [self.act1, self.act2, self.act3]

class StoryboardOutputField(models.Model):
    plot_points = models.CharField(max_length=2000, default="")
    plot_twists = models.CharField(max_length=2000, default="")
    plot_holes = models.CharField(max_length=2000, default="")

    def get_plot_points(self):
        return self.plot_points.split(';')

    def get_plot_twists(self):
        return self.plot_twists.split(';')

    def get_plot_holes(self):
        return self.plot_holes.split(';')

class PlotIdea(models.Model):
    plot_input = models.ForeignKey(PlotInputFields, on_delete=models.CASCADE)
    character_input = models.ForeignKey(CharacterInputFields, on_delete=models.CASCADE)
    acts_output = models.ForeignKey(ActsOutputField, on_delete=models.CASCADE)
    storyboard_output = models.ForeignKey(StoryboardOutputField, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)