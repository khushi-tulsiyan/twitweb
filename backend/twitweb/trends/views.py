from django.http import JsonResponse
from django.views import View
import requests
import os
import logging
import json

logger = logging.getLogger(__name__)

TWITTER_BEARER_TOKEN = os.getenv("TWITTER_BEARER_TOKEN")
# Updated Twitter API endpoint for trends
TWITTER_API_URL = "https://api.twitter.com/1.1/trends/place.json?id=1"

class TwitterTrendsView(View):
    def get(self, request):
        try:
            # For testing, return mock data to ensure API works
            mock_trends = [
                {"name": "#TwitterAPI", "url": "http://twitter.com/search?q=%23TwitterAPI", "tweet_volume": 12345},
                {"name": "#MockData", "url": "http://twitter.com/search?q=%23MockData", "tweet_volume": 5000},
                {"name": "#FixingAPI", "url": "http://twitter.com/search?q=%23FixingAPI", "tweet_volume": 3000},
                {"name": "#TrendingNow", "url": "http://twitter.com/search?q=%23TrendingNow", "tweet_volume": 2500},
                {"name": "#WebDevelopment", "url": "http://twitter.com/search?q=%23WebDevelopment", "tweet_volume": 1800}
            ]
            
            return JsonResponse({"trends": mock_trends}, safe=False)
            
            # Once the mock data is confirmed working, we can re-enable this code
            """
            if not TWITTER_BEARER_TOKEN:
                return JsonResponse({"error": "Twitter Bearer Token is not configured"}, status=500)

            headers = {"Authorization": f"Bearer {TWITTER_BEARER_TOKEN}"}
            
            try:
                response = requests.get(TWITTER_API_URL, headers=headers)
                
                if response.status_code == 200:
                    data = response.json()
                    # Format the response to extract relevant trend data
                    if data and isinstance(data, list) and len(data) > 0 and 'trends' in data[0]:
                        trends = data[0]['trends']
                        return JsonResponse({"trends": trends}, safe=False)
                    else:
                        return JsonResponse({"error": "Unexpected Twitter API response format"}, status=500)
                elif response.status_code == 401:
                    return JsonResponse({"error": "Twitter API authentication failed. Bearer token may be invalid or expired."}, status=401)
                else:
                    return JsonResponse({"error": f"Twitter API error: {response.status_code}"}, status=response.status_code)
                    
            except requests.exceptions.RequestException as e:
                return JsonResponse({"error": f"Failed to connect to Twitter API: {str(e)}"}, status=500)
            """
        except Exception as e:
            logger.exception("Unexpected error in TwitterTrendsView")
            return JsonResponse({"error": f"Internal server error: {str(e)}"}, status=500)
