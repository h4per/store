from django.urls import path
from apps.users.views import register
from django.contrib.auth.views import LoginView, LogoutView

urlpatterns = [
    path("register/", register,  name="register"),
    path("login/", LoginView.as_view(template_name='registration/login.html'), name="login"),
    path("logout/", LogoutView.as_view(template_name='registration/logout.html'), name="logout"),
]