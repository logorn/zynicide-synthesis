# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from shared.models import Image
from constants import SOCIAL_LINKS


def promotion(request):
    """view for the zynicide synthesis promotional app"""
    return render(request, 'promotion/dist/index.html')


def context(request):
    profile_image = Image.objects.get(title='zack-profile-pic')

    return JsonResponse({
        'profile': {
            'profile_pic_thumbnail': profile_image.thumbnail.url,
            'profile_pic': profile_image.full.url
        },
        'social_links': SOCIAL_LINKS
    })
