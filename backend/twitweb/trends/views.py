import requests
import redis
import json
import dotenv
from django.core.cache import cache
from django.http import JsonResponse

dotenv.load_dotenv()

TWITTER_BEARER_TOKEN = os.getenv("TWITTER_BEARER_TOKEN")
TWITTER_API_URL = "https://api.twitter.com/2/trends/place.json?id=1"  # Global trends

def get_trending_topics():
    """Fetch trending topics from Twitter API with caching."""
    
    cache_key = "twitter_trends"  
    cached_data = cache.get(cache_key)

    if cached_data:
        return cached_data  

    headers = {"Authorization": f"Bearer {TWITTER_BEARER_TOKEN}"}
    response = requests.get(TWITTER_API_URL, headers=headers)

    if response.status_code == 200:
        trends = response.json()
        cache.set(cache_key, trends, timeout=300)  # Cache for 5 minutes
        return trends

    return {"error": "Failed to fetch Twitter data"}

def trending(request):
    """Django view to return trending topics."""
    data = get_trending_topics()
    return JsonResponse(data, safe=False)
