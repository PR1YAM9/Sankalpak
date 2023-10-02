from django.shortcuts import render
from django.http import HttpResponse
import json
# Create your views here.

def login(request):
    context = {"login": "oka"}
    return HttpResponse(json.dumps(context), content_type="application/json")

def register(request):
    return HttpResponse("register")