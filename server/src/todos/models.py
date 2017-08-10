from django.db import models
from django.contrib.auth.models import User
# Create your models here.
from model_utils.models import TimeStampedModel

class Todo(TimeStampedModel):
    description = models.TextField()
    user = models.ForeignKey(User, null=True, blank=True)
    completed = models.BooleanField(default=False)

