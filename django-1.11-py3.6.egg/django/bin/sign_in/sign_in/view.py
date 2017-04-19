from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
import json

def hello(request):
     context  = {}
     context['hello'] = 'Hello World!'
     return render(request, 'sign_in.html', context)

def edit(request):
     context  = {}
     context['hello'] = 'Hello World!'
     return render(request, 'personal.html', context)


@csrf_exempt
def login(request):
    additem = request.POST
    value = True
    keys = [k for k,v in additem]
    print (request)
    if additem.get('username') != 'niyaou' :
      value =  False
    if additem.get('data') != '123' :
      value =  False
    print (additem)

    result = 'error'
    if value :
      result = 'ok'

    return HttpResponse(result)