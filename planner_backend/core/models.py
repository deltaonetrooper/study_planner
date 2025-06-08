from django.contrib.auth.models import User
from django.db import models

class Subject(models.Model):
    name = models.CharField(max_length=100)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class Task(models.Model):
    title = models.CharField(max_length=200)
    due_date = models.DateField()
    is_done = models.BooleanField(default=False)
    subject = models.ForeignKey(Subject, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)

class SessionLog(models.Model):
    task = models.ForeignKey(Task, on_delete=models.CASCADE)
    duration_minutes = models.PositiveIntegerField()
    timestamp = models.DateTimeField(auto_now_add=True)
    