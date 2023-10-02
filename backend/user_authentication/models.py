from django.db import models
import uuid

class User(models.Model):

    user_id = models.UUIDField(default = uuid.uuid4, editable = False, unique = True)  # UUID primary key
    user_type = models.TextField()  # Type of user (text)
    name = models.TextField()  # User's name (text)
    phone = models.CharField(max_length = 10)  # 10-digit phone number (text)
    pancard = models.CharField(max_length = 32)  # Pancard (text, size = 32)
    gst = models.CharField(max_length = 32)  # GST (text, size = 32)
    state = models.TextField()  # State (text)
    profile_pic = models.CharField(max_length = 32, null = True)  # Profile picture URL (text, size = 32)
    created = models.DateTimeField(auto_now_add = True)
    updated = models.DateTimeField(auto_now = True)

class Trader(models.Model):

    user_id = models.OneToOneField(User, unique = True, on_delete = models.CASCADE)  # User_id is a foreign key and primary key
    org_name = models.TextField()  # Organization name (text)
    org_type = models.TextField()  # Organization type (text)
    created = models.DateTimeField(auto_now_add = True)
    updated = models.DateTimeField(auto_now = True)

class ServiceProvider(models.Model):

    user_id = models.ForeignKey(User, on_delete = models.CASCADE)  # Foreign key to Users table
    service = models.CharField(max_length = 255)  # Service provided (text)
    price = models.DecimalField(max_digits = 10, decimal_places = 2)  # Price (numeric, float)
    experience = models.DecimalField(max_digits = 10, decimal_places = 2)  # Experience (numeric, float)
    created = models.DateTimeField(auto_now_add = True)
    updated = models.DateTimeField(auto_now = True)

class Admin(models.Model):


    user_id = models.ForeignKey(User, on_delete = models.CASCADE)  # Foreign key to Users table
    password = models.CharField(max_length = 32)  # Password (text, size = 32)