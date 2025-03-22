from django.urls import path
from .views import TwitterTrendsView
from . import views



urlpatterns = [
    path('trends/', TwitterTrendsView.as_view(), name='twitter-trends'),

]
