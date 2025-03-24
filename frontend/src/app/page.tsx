import Link from 'next/link';
import { Metadata } from "next";
import Script from 'next/script';
import Navbar from './components/Navbar';

export const metadata: Metadata = {
  title: 'TwitWeb - Real-time Social Media Trend Analysis | Twitter Analytics',
  description: 
    'Discover what\'s trending on Twitter in real-time with TwitWeb. ' +
    'Comprehensive social media analytics, visualizations, and insights on ' +
    'trending topics worldwide. Get started for free today!',
  keywords: 
    'Twitter trends, trending topics, social media analytics, ' +
    'Twitter data visualization, real-time trends, Twitter API, ' +
    'social listening, trend analysis, viral content, hashtag tracking',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://twitweb.com',
    title: 'TwitWeb - Real-time Social Media Trend Analysis',
    description: 
      'Track, analyze and visualize Twitter trends in real-time. ' +
      'Get powerful insights into what\'s trending worldwide with our ' +
      'comprehensive analytics platform.',
    siteName: 'TwitWeb',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'TwitWeb - Real-time Twitter Analytics Dashboard',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TwitWeb - Real-time Social Media Trend Analysis',
    description: 
      'Track, analyze and visualize Twitter trends in real-time. ' +
      'Get powerful insights into what\'s trending worldwide.',
    images: ['/twitter-card.jpg'],
    creator: '@twitweb',
    site: '@twitweb',
  },
  alternates: {
    canonical: 'https://twitweb.com',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SoftwareApplication',
            name: 'TwitWeb',
            applicationCategory: 'AnalyticsApplication',
            operatingSystem: 'Web',
            offers: {
              '@type': 'Offer',
              price: '0',
              priceCurrency: 'USD'
            },
            description: 
              'TwitWeb is a powerful platform for analyzing and visualizing ' +
              'trending topics on Twitter in real-time, providing valuable ' +
              'insights into social media trends worldwide.',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.8',
              ratingCount: '1024'
            }
          })
        }}
      />
      <div className="min-h-screen bg-gradient-to-b from-[#f8f9fa] to-[#e9ecef]">
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <header className="py-20 sm:py-24 md:py-32 text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#212529] mb-6 font-serif leading-tight">
              Discover What's <span className="text-[#7C96AB] italic">Trending</span>
            </h1>
            <p className="text-xl md:text-2xl text-[#495057] max-w-3xl mx-auto mb-12 leading-relaxed">
              Get real-time insights into social media trends with powerful analytics and visualization tools
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
              <Link
                href="/trends"
                className="px-8 py-4 bg-[#7C96AB] text-white rounded-lg font-medium text-lg 
                  hover:bg-[#6B859A] transition-colors duration-300 shadow-md hover:shadow-lg 
                  transform hover:-translate-y-1"
              >
                Explore Trends
              </Link>
              <Link
                href="/docs"
                className="px-8 py-4 bg-white text-[#495057] rounded-lg font-medium text-lg 
                  hover:bg-[#f1f3f5] transition-colors duration-300 shadow-md hover:shadow-lg 
                  transform hover:-translate-y-1"
              >
                Read Documentation
              </Link>
            </div>
          </header>

          {/* SEO-Optimized Content Section */}
          <section className="py-12 bg-white rounded-xl shadow-md mb-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-[#343a40] mb-8">
                The Ultimate Platform for Twitter Trend Analysis
              </h2>
              <div className="prose lg:prose-xl max-w-4xl mx-auto text-[#495057]">
                <p className="mb-4">
                  <strong>TwitWeb</strong> is the leading social media analytics platform 
                  dedicated to providing real-time insights into Twitter trends worldwide. 
                  Whether you're a social media manager, marketer, researcher, or just 
                  curious about what's happening globally, our powerful tools help you 
                  stay ahead of the conversation.
                </p>
                <p className="mb-4">
                  Our advanced algorithm analyzes millions of tweets in real-time to 
                  identify emerging trends, viral hashtags, and important conversations 
                  as they happen. With TwitWeb, you can monitor trending topics across 
                  different regions, track hashtag performance, and gain valuable insights 
                  into audience engagement.
                </p>
                <p className="mb-4">
                  Unlike other social media monitoring tools, TwitWeb specializes in 
                  Twitter trend analysis with industry-leading accuracy and speed. 
                  Our platform offers comprehensive data visualization, customizable 
                  dashboards, and exportable reports to help you make data-driven 
                  decisions quickly and effectively.
                </p>
                <p>
                  Get started for free today and discover why thousands of professionals 
                  trust TwitWeb for their social media analytics needs. Our user-friendly 
                  interface makes it easy to track, analyze, and visualize Twitter 
                  trends - all in one place.
                </p>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-white rounded-xl shadow-md mb-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center text-[#343a40] mb-12">
                Why Choose Our Platform?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Feature 1 */}
                <div className="p-6 bg-[#f8f9fa] rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7C96AB] text-white mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#343a40] mb-2">
                    Real-time Trends
                  </h3>
                  <p className="text-[#6c757d]">
                    Stay up-to-date with the latest trending topics as they happen 
                    across social media platforms.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="p-6 bg-[#f8f9fa] rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7C96AB] text-white mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#343a40] mb-2">
                    Advanced Analytics
                  </h3>
                  <p className="text-[#6c757d]">
                    Gain valuable insights with our comprehensive analytics tools 
                    and visualization options.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="p-6 bg-[#f8f9fa] rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-[#7C96AB] text-white mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" 
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-[#343a40] mb-2">
                    Customizable Dashboard
                  </h3>
                  <p className="text-[#6c757d]">
                    Personalize your experience with our flexible, user-friendly 
                    dashboard and tracking tools.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-[#343a40] text-white py-12">
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
                  <li>
                    <Link 
                      href="/" 
                      className="text-[#adb5bd] hover:text-white transition-colors"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/trends" 
                      className="text-[#adb5bd] hover:text-white transition-colors"
                    >
                      Trends
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/docs" 
                      className="text-[#adb5bd] hover:text-white transition-colors"
                    >
                      Documentation
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Resources</h4>
                <ul className="space-y-2">
                  <li>
                    <Link 
                      href="/blog" 
                      className="text-[#adb5bd] hover:text-white transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/help" 
                      className="text-[#adb5bd] hover:text-white transition-colors"
                    >
                      Help Center
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/faq" 
                      className="text-[#adb5bd] hover:text-white transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Connect</h4>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="text-[#adb5bd] hover:text-white transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-[#adb5bd] hover:text-white transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="text-[#adb5bd] hover:text-white transition-colors"
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-6 w-6" 
                      fill="currentColor" 
                      viewBox="0 0 24 24"
                    >
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
    </>
  );
}
