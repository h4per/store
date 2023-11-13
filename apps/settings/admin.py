from django.contrib import admin
from apps.settings.models import Setting, Footer, Sliders, FooterSlide, Contact, AboutUs, Partner

# Register your models here.
admin.site.register(Setting)
admin.site.register(Footer)
admin.site.register(Sliders)
admin.site.register(FooterSlide)
admin.site.register(Contact)
admin.site.register(AboutUs)
admin.site.register(Partner)