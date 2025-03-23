from django.http import JsonResponse
from django.views import View
import requests
import os
from django.core.cache import cache

TWITTER_BEARER_TOKEN = os.getenv("TWITTER_BEARER_TOKEN")
TWITTER_API_URL = "https://api.twitter.com/2/trends/place.json?id=1"

class TwitterTrendsView(View):
    def get(self, request):
        cache_key = "twitter_trends"
        cached_data = cache.get(cache_key)

        if cached_data:
            return JsonResponse(cached_data, safe=False)

        headers = {"Authorization": f"Bearer {TWITTER_BEARER_TOKEN}"}
        response = requests.get(TWITTER_API_URL, headers=headers)

        if response.status_code == 200:
            trends = response.json()
            cache.set(cache_key, trends, timeout=300)
            return JsonResponse(trends, safe=False)

        return JsonResponse({"error": "Failed to fetch Twitter data"}, status=500)
