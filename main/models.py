from django.db import models
from datetime import datetime
# Create your models here.

class News(models.Model):
    news_title = models.CharField(max_length=200)
    news_content = models.TextField()
    news_published = models.DateTimeField("data published", default = datetime.now())
    
    def __str__(self):
        return self.news_title
