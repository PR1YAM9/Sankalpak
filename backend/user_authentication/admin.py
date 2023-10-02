from django.contrib import admin

# Register your models here.

from django.contrib import admin

# Register your models here.

from .models import User, Trader, ServiceProvider, Admin

admin.site.register(User)
admin.site.register(Trader)
admin.site.register(ServiceProvider)
admin.site.register(Admin)