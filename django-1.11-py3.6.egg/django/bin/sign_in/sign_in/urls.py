"""sign_in URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url
from django.conf import settings
from django.conf.urls.static import static
from . import view
from django.conf.urls import *
from django.conf.urls import include
from django.conf.urls.static import static
urlpatterns = [
    url(r'^$', view.hello),
    url(r'^hello$', view.hello),
    url(r'^home$', view.hello),
    url(r'^login$', view.login),
    url(r'^Login$', view.login),
    url(r'^personal.html$', view.edit),
    url(r'^url$', view.postData),
    url(r'^mainpage.html$', view.url_page),
] + static(settings.STATIC_URL, document_root = settings.STATIC_ROOT)

