标签：col   配置错误   ces   自动   run   pat   oca   生产环境   spa

问题一描述：

Django1.10版本中框架中settings.py配置文件

DEBUG= True

ALLOWED_HOSTS = [‘*‘] #这样可以让所有来源的ip访问到后台

使用 python3 manager.py runserver后访问，发现没有css,js样式。

网上查询得知：Django1.9版本后静态文件目录需要创建。大概的意思就是在settings.py文件中添加一下配置部分：

PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.9/howto/static-files/
STATIC_ROOT = os.path.join(PROJECT_ROOT, ‘staticfiles‘)
STATIC_URL = ‘/static/‘

# Extra places for collectstatic to find static files.
STATICFILES_DIRS = (
os.path.join(PROJECT_ROOT, ‘static‘),
)
配置更改后，还要执行命令

python3 manage.py collectstatic
执行这个的目的，就是从Django的扩展包中，将admin管理后台的jss 和css等静态文件拷贝到配置文件中的STATIC_ROOT目录下。

这里还有一个问题 STATIC_ROOT目录 和 STATICFILES_DIRS 作用差不多，只是前者是默认查看的目录。

执行后我们会看到，多出这一个目录

__init__.py

__pycache__

settings.py

static        这个需要手动创建,不然报错

staticfiles    这个会自动创建

urls.py

wsgi.py
此时我们访问http://ip:8000/admin，样式就都在了。



问题二：当我把 settings.py文件中的DEBUG 配置改成

Debug = False后，尼玛发现访问又没有样式了。

这是为什么呢？于是看看官网的说明如下链接

https://devcenter.heroku.com/articles/django-assets

大概意思即是，放置于生产环境的Django框架，静态目录不应该通过Django直接提供访问，而是通过nginx提供对外访问。这时候我们看下之前配置的

nginx+uwsgi+django框架中的nginx配置，如下：

server {
    listen         80;
    server_name    127.0.0.1
    charset UTF-8;
    access_log      /var/log/nginx/django_pro01_access.log;
    error_log       /var/log/nginx/django_pro01_error.log;

    client_max_body_size 75M;

    location / {
        include uwsgi_params;
        uwsgi_pass 127.0.0.1:8000;
        uwsgi_read_timeout 2;
    }
    location /static {
        expires 30d;
        autoindex on;
        add_header Cache-Control private;
        alias /usr/share/nginx/django_pro01/django_pro01/staticfiles; #
        #alias /usr/share/nginx/django_pro01/static/;
     }
 }
可以看出，已经配置了/static的访问方式了。

之前不能访问是路径配置错误，现在可以了。

使用Django1.10版本时，配置文件要注意的地方

标签：col   配置错误   ces   自动   run   pat   oca   生产环境   spa

原文：http://www.cnblogs.com/zhming26/p/6163952.html