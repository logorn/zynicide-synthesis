# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse


def promotion(request):
	"""view for the zynicide synthesis promotional app"""
	return render(request, 'promotion/dist/index.html')