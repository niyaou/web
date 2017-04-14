from django.http import HttpResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

def hello(request):
     context  = {}
     context['hello'] = 'Hello World!'
     return render(request, 'sign_in.html', context)

@csrf_exempt
def login(request):
    additem = request.POST
    value = True
    if additem.get('name') != 'niyaou' :
      value =  False
    if additem.get('psw') != '123' :
      value =  False
    print (additem)

    result = 'error'
    if value :
      result = 'ok'

    return HttpResponse(result)