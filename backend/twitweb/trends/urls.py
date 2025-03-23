from django.urls import path
from .views import TwitterTrendsView

urlpatterns = [
    path('trends/', TwitterTrendsView.as_view(), name='twitter-trends'),
]
