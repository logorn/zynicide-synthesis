# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from imagekit.models import ImageSpecField, ProcessedImageField
from imagekit import processors


class Image(models.Model):
    title = models.CharField(max_length=100)
    full = ProcessedImageField(upload_to='images/blog/',
        processors=[processors.Transpose()],
        options={ 'quality': 80 })
    thumbnail = ImageSpecField(source='full',
        processors=[processors.Transpose(),
            processors.Thumbnail(height=75)])

    def aspect_ratio(self):
        return (float(self.full.height) / float(self.full.width)) * 100

    def __str__(self):
        return 'Image: {}'.format(self.title)
