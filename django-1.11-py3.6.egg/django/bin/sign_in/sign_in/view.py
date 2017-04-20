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

def url_page(request):
     context  = {}
     print (request.path)
     return render(request, request.path[1:], context)


@csrf_exempt
def postData(request):
    _data = {}
    response_data = {}
    response_data['myAchievement_d'] = '1212'
    response_data['myAchievement_m'] = '434'
    response_data['myAchievement_all'] = '438236'
    response_data['myGroupAchievement_d'] = '1986428'
    response_data['myGroupAchievement_m'] = '21984'
    response_data['myGroupAchievement_all'] = '6725'
    _data['data'] =  response_data
    return HttpResponse(json.dumps(_data), content_type="application/json")



@csrf_exempt
def login(request):
    additem = request.POST
    value = True
    if additem.get('username') != 'niyaou' :
      value =  False
    if additem.get('data') != '123' :
      value =  False
    print (additem)

    result = 'error'
    if value :
      result = 'ok'

    return HttpResponse(result)