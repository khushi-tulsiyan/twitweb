import Image from "next/image";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'TwitWeb - Twitter Trend Analysis',
  description: 'Discover and analyze trending topics on Twitter with TwitWeb. Get real-time insights and visualizations of what\'s trending worldwide.',
  keywords: 'Twitter trends, social media analytics, trending topics, Twitter analysis',
  openGraph: {
    title: 'TwitWeb - Twitter Trend Analysis',
    description: 'Real-time Twitter trend analysis and insights',
    images: ['/og-image.jpg'],
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="pt-32 pb-40 text-center">
          <h1 className="text-6xl md:text-8xl font-light text-[#2C3338] mb-8 font-serif">
            Understand What's <span className="text-[#7C96AB]">Trending</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#5C6670] max-w-2xl mx-auto mb-16 font-light leading-relaxed">
            Get real-time insights into social media trends with powerful analytics and visualization tools
          </p>
          <div className="flex justify-center gap-8">
            <a
              href="/api/trends"
              className="px-10 py-5 bg-[#7C96AB] text-white rounded-full font-light text-lg hover:bg-[#6B859A] transition-colors"
            >
              View Live Trends
            </a>
            <a
              href="/docs"
              className="px-10 py-5 bg-[#F5F1E8] text-[#2C3338] rounded-full font-light text-lg hover:bg-[#EBE7DE] transition-colors"
            >
              Read Documentation
            </a>
          </div>
        </header>

        <main>
          <section className="py-32 border-t border-[#E8E4DB]">
            <div className="grid md:grid-cols-3 gap-16">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#F5F1E8] rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-[#7C96AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-[#2C3338] mb-4">Real-Time Analytics</h3>
                <p className="text-[#5C6670] font-light leading-relaxed">Track trending topics as they emerge and evolve in real-time</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#F5F1E8] rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-[#7C96AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-[#2C3338] mb-4">Visual Insights</h3>
                <p className="text-[#5C6670] font-light leading-relaxed">Beautiful visualizations that make data easy to understand</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-[#F5F1E8] rounded-full flex items-center justify-center mx-auto mb-8">
                  <svg className="w-10 h-10 text-[#7C96AB]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-serif text-[#2C3338] mb-4">Fast Performance</h3>
                <p className="text-[#5C6670] font-light leading-relaxed">Lightning-fast analysis and trend detection</p>
              </div>
            </div>
          </section>

          <section className="py-32 border-t border-[#E8E4DB]">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-serif text-[#2C3338] mb-6">How It Works</h2>
              <p className="text-xl text-[#5C6670] font-light">Simple, powerful tools for social media analysis</p>
            </div>
            <Image
              src="/dashboard-preview.png"
              alt="TwitWeb Dashboard Preview"
              width={1200}
              height={600}
              className="rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              priority
            />
          </section>
        </main>

        <footer className="py-16 border-t border-[#E8E4DB]">
          <div className="flex flex-wrap justify-center gap-12 text-base text-[#5C6670] font-light">
            <a href="/about" className="hover:text-[#2C3338] transition-colors">About</a>
            <a href="/privacy" className="hover:text-[#2C3338] transition-colors">Privacy</a>
            <a href="/terms" className="hover:text-[#2C3338] transition-colors">Terms</a>
            <a href="/contact" className="hover:text-[#2C3338] transition-colors">Contact</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
