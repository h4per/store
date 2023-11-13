from django.shortcuts import render

from apps.settings.models import Setting
from apps.users.forms import UserRegistrationForm


def register(request):
    setting = Setting.objects.first()
    
    if request.method == 'POST':
        user_form = UserRegistrationForm(request.POST)
        if user_form.is_valid():
            new_user = user_form.save(commit=False)
            new_user.set_password(user_form.cleaned_data['password2']) 
            new_user.save()
        
            context = {
                'setting': setting,
                'user': new_user,
                'form': user_form
            }

            return render(request, "registration/register_done.html", context)

    context = {
        'setting': setting,
        'form': UserRegistrationForm()
    }
    return render(request, "registration/register.html", context)


    