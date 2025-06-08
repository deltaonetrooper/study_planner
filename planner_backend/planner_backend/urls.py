from django.contrib import admin
from django.urls import path, include
from core.views import home  # add this

urlpatterns = [
    path('', home),  # root URL
    path('admin/', admin.site.urls),
    path('api/auth/', include('dj_rest_auth.urls')),
    path('api/auth/registration/', include('dj_rest_auth.registration.urls')),
]
