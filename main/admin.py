from django.contrib import admin
from .models import News
from tinymce.widgets import TinyMCE
from django.db import models
# Register your models here.
admin.site.site_header = 'PATH Hub admin'
admin.site.site_title = 'PATH Hub admin'

class NewsAdmin(admin.ModelAdmin):
    fields = ["news_title",
             "news_published",
             "news_content" ]
    # this is just changing the input for text to a wysiwug         
    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()}
    }

admin.site.register(News, NewsAdmin)
