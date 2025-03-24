'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function TrendsPage() {
  const [trends, setTrends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchTrends() {
      try {
        setLoading(true);
        const response = await fetch('/api/trends');
        
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        if (data.trends && Array.isArray(data.trends)) {
          setTrends(data.trends);
        } else {
          throw new Error('Invalid data format');
        }
      } catch (err) {
        console.error('Failed to fetch trends:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    fetchTrends();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-[#343a40]">
                Twit<span className="text-[#7C96AB]">Web</span>
              </Link>
            </div>
            <div className="flex space-x-4">
              <Link href="/" className="text-[#495057] hover:text-[#7C96AB] px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/trends" className="text-[#7C96AB] border-b-2 border-[#7C96AB] px-3 py-2 rounded-md text-sm font-medium">
                Trends
              </Link>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-[#343a40] mb-4">Trending Topics</h1>
          <p className="text-[#6c757d] max-w-3xl mx-auto">
            Stay up-to-date with the latest trending topics across social media platforms. 
            Our real-time analytics track what people are talking about right now.
          </p>
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          {loading && (
            <div className="flex justify-center items-center py-16">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7C96AB]"></div>
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 p-6 rounded-lg mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <h3 className="text-lg font-medium text-red-800">Error loading trends</h3>
                  <div className="mt-2 text-red-700">
                    <p>{error}</p>
                    <button 
                      onClick={() => window.location.reload()} 
                      className="mt-4 px-4 py-2 bg-red-100 text-red-800 rounded-md hover:bg-red-200 transition-colors"
                    >
                      Try again
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {!loading && !error && trends.length === 0 && (
            <div className="text-center py-16">
              <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <h3 className="mt-4 text-xl font-medium text-gray-900">No trends available</h3>
              <p className="mt-2 text-gray-500">We couldn't find any trending topics at this time. Please check back later.</p>
            </div>
          )}
          
          {!loading && !error && trends.length > 0 && (
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {trends.map((trend, index) => (
                  <div key={index} className="bg-[#f8f9fa] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-semibold text-[#343a40] truncate">
                          <a href={trend.url} target="_blank" rel="noopener noreferrer" className="hover:text-[#7C96AB] transition-colors">
                            {trend.name}
                          </a>
                        </h3>
                        {trend.tweet_volume && (
                          <div className="flex-shrink-0">
                            <span className="px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-[#e3f2fd] text-[#1976d2]">
                              {trend.tweet_volume.toLocaleString()} tweets
                            </span>
                          </div>
                        )}
                      </div>
                      
                      <div className="mt-4 flex justify-between items-center">
                        <a 
                          href={trend.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="text-sm text-[#7C96AB] hover:text-[#5a7a93] flex items-center transition-colors"
                        >
                          <span>View on Twitter</span>
                          <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        
                        <div className="text-xs text-gray-500">
                          #{index + 1} Trending
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 text-center">
                <button 
                  onClick={() => window.location.reload()} 
                  className="px-6 py-3 bg-[#7C96AB] text-white rounded-lg hover:bg-[#6B859A] transition-colors shadow-sm"
                >
                  Refresh Trends
                </button>
              </div>
            </div>
          )}
        </div>
        
        <div className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold text-[#343a40] mb-4">About Trending Topics</h2>
          <p className="text-[#6c757d] mb-4">
            TwitWeb's trending algorithm identifies topics that are popular right now. 
            Unlike regular search, trends are determined by a combination of volume, growth, and recency.
          </p>
          <p className="text-[#6c757d]">
            Trends are refreshed every few minutes to keep you updated with the latest conversations happening across social media.
          </p>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-[#343a40] text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">TwitWeb</h3>
              <p className="text-[#adb5bd]">
                The leading platform for social media trend analysis and visualization.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link href="/" className="text-[#adb5bd] hover:text-white transition-colors">Home</Link></li>
                <li><Link href="/trends" className="text-[#adb5bd] hover:text-white transition-colors">Trends</Link></li>
                <li><Link href="/docs" className="text-[#adb5bd] hover:text-white transition-colors">Documentation</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="/blog" className="text-[#adb5bd] hover:text-white transition-colors">Blog</Link></li>
                <li><Link href="/help" className="text-[#adb5bd] hover:text-white transition-colors">Help Center</Link></li>
                <li><Link href="/faq" className="text-[#adb5bd] hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-[#495057] text-center text-[#adb5bd]">
            <p>© {new Date().getFullYear()} TwitWeb. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 