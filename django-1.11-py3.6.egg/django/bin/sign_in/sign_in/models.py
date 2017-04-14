from django.db import models

class UserAccount(models.Model):
    user_name = models.CharField(max_length=200)
    pub_date = models.CharField(max_length=200)


