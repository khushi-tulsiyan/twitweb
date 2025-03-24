from django.test import TestCase
from django.core.cache import cache
from django_redis import get_redis_connection

class RedisConnectionTest(TestCase):
    def test_redis_connection(self):
        """Test that Redis connection is working"""
        try:
            # Try to set a value in Redis
            cache.set('test_key', 'test_value', 10)
            # Try to get the value back
            value = cache.get('test_key')
            self.assertEqual(value, 'test_value')
            
            # Test direct Redis connection
            redis_conn = get_redis_connection("default")
            redis_conn.ping()
        except Exception as e:
            self.fail(f"Redis connection failed: {str(e)}") 