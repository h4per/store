from django import forms
from django.contrib.auth.forms import UserCreationForm
from apps.users.models import User


class GeekUserCreationForm(UserCreationForm):
    class Meta:
        model = User
        fields = ("username", "email")


class UserRegistrationForm(forms.ModelForm):
    password1 = forms.CharField(label="Пароль", widget=forms.PasswordInput)
    password2 = forms.CharField(label="Подтвердите пароль", widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ("username", "email")

    def clean_password2(self):
        cd = self.cleaned_data
        if cd["password1"] != cd["password2"]:
            raise forms.ValidationError("Пароли не совпадают!")
        return cd["password2"]
