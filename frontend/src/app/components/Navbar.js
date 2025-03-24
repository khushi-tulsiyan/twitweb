'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [connectOpen, setConnectOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-[#343a40]">
                Twit<span className="text-[#7C96AB]">Web</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-6">
            <Link 
              href="/" 
              className="text-[#495057] hover:text-[#7C96AB] px-3 py-2 rounded-md text-sm font-medium"
            >
              Home
            </Link>
            
            <Link 
              href="/trends" 
              className="text-[#495057] hover:text-[#7C96AB] px-3 py-2 rounded-md text-sm font-medium"
            >
              Trends
            </Link>
            
            <Link 
              href="/docs" 
              className="text-[#495057] hover:text-[#7C96AB] px-3 py-2 rounded-md text-sm font-medium"
            >
              Documentation
            </Link>
            
            {/* Resources Dropdown */}
            <div className="relative">
              <button 
                className="text-[#495057] hover:text-[#7C96AB] px-3 py-2 rounded-md text-sm font-medium flex items-center"
                onClick={() => {
                  setResourcesOpen(!resourcesOpen);
                  if (connectOpen) setConnectOpen(false);
                }}
              >
                Resources
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {resourcesOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5">
                  <Link 
                    href="/blog" 
                    className="block px-4 py-2 text-sm text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB]"
                  >
                    Blog
                  </Link>
                  <Link 
                    href="/help" 
                    className="block px-4 py-2 text-sm text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB]"
                  >
                    Help Center
                  </Link>
                  <Link 
                    href="/faq" 
                    className="block px-4 py-2 text-sm text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB]"
                  >
                    FAQ
                  </Link>
                </div>
              )}
            </div>
            
            {/* Connect Dropdown */}
            <div className="relative">
              <button 
                className="text-[#495057] hover:text-[#7C96AB] px-3 py-2 rounded-md text-sm font-medium flex items-center"
                onClick={() => {
                  setConnectOpen(!connectOpen);
                  if (resourcesOpen) setResourcesOpen(false);
                }}
              >
                Connect
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${connectOpen ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {connectOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10 ring-1 ring-black ring-opacity-5">
                  <a 
                    href="https://twitter.com/twitweb" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center px-4 py-2 text-sm text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                    Twitter
                  </a>
                  <a 
                    href="https://github.com/twitweb" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center px-4 py-2 text-sm text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GitHub
                  </a>
                  <a 
                    href="https://facebook.com/twitweb" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center px-4 py-2 text-sm text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                    </svg>
                    Facebook
                  </a>
                  <Link 
                    href="/contact" 
                    className="flex items-center px-4 py-2 text-sm text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB]"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
            
            {/* Sign In / Sign Up */}
            <div className="flex items-center space-x-2">
              <Link 
                href="/login" 
                className="text-[#495057] hover:text-[#7C96AB] px-3 py-2 rounded-md text-sm font-medium"
              >
                Sign In
              </Link>
              <Link 
                href="/signup" 
                className="bg-[#7C96AB] text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#6B859A] transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-[#495057] hover:text-[#7C96AB] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#7C96AB]"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 mt-2">
          <div className="pt-2 pb-3 space-y-1">
            <Link 
              href="/" 
              className="block px-4 py-2 text-base font-medium text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB]"
            >
              Home
            </Link>
            <Link 
              href="/trends" 
              className="block px-4 py-2 text-base font-medium text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB]"
            >
              Trends
            </Link>
            <Link 
              href="/docs" 
              className="block px-4 py-2 text-base font-medium text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB]"
            >
              Documentation
            </Link>
            
            {/* Resources Section */}
            <div className="border-t border-gray-100 pt-2">
              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-[#6c757d]">Resources</p>
              </div>
              <Link 
                href="/blog" 
                className="block px-4 py-2 text-base font-medium text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB] pl-8"
              >
                Blog
              </Link>
              <Link 
                href="/help" 
                className="block px-4 py-2 text-base font-medium text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB] pl-8"
              >
                Help Center
              </Link>
              <Link 
                href="/faq" 
                className="block px-4 py-2 text-base font-medium text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB] pl-8"
              >
                FAQ
              </Link>
            </div>
            
            {/* Connect Section */}
            <div className="border-t border-gray-100 pt-2">
              <div className="px-4 py-2">
                <p className="text-sm font-semibold text-[#6c757d]">Connect</p>
              </div>
              <a 
                href="https://twitter.com/twitweb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center px-4 py-2 text-base font-medium text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB] pl-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
                Twitter
              </a>
              <a 
                href="https://github.com/twitweb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center px-4 py-2 text-base font-medium text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB] pl-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                GitHub
              </a>
              <a 
                href="https://facebook.com/twitweb" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center px-4 py-2 text-base font-medium text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB] pl-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
                Facebook
              </a>
              <Link 
                href="/contact" 
                className="flex items-center px-4 py-2 text-base font-medium text-[#495057] hover:bg-[#f8f9fa] hover:text-[#7C96AB] pl-8"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Us
              </Link>
            </div>
            
            {/* Authentication */}
            <div className="border-t border-gray-100 pt-4 pb-2 flex flex-col space-y-2 px-4">
              <Link 
                href="/login" 
                className="w-full text-center px-4 py-2 border border-[#7C96AB] text-[#7C96AB] rounded-md"
              >
                Sign In
              </Link>
              <Link 
                href="/signup" 
                className="w-full text-center px-4 py-2 bg-[#7C96AB] text-white rounded-md hover:bg-[#6B859A] transition-colors"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
} 