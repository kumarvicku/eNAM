import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronRight, Search, Facebook, Twitter, Youtube, Instagram, ArrowRight, ExternalLink, Sun, Moon } from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    
    // Auto-rotate banner slides
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    
    // Apply dark mode class to body
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "National Agriculture Market",
      subtitle: "One Nation, One Market"
    },
    {
      image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Empowering Farmers",
      subtitle: "Transparent Price Discovery"
    },
    {
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      title: "Digital Agriculture",
      subtitle: "Connecting Farmers to Markets"
    }
  ];

  const quickLinks = [
    { title: "Farmer", icon: "🌾" },
    { title: "Trader", icon: "🏪" },
    { title: "FPO", icon: "👥" },
    { title: "Mandi", icon: "🏢" },
    { title: "Logistics", icon: "🚚" }
  ];

  const statistics = [
    { number: "1000+", label: "Mandis" },
    { number: "1.73 Cr", label: "Farmers" },
    { number: "2.36 Lakh", label: "Traders" },
    { number: "2300+", label: "FPOs" },
    { number: "₹2.4 Lakh Cr", label: "Trade Value" }
  ];

  const newsItems = [
    "eNAM introduces new features for online trading",
    "Government extends eNAM to 1000 more mandis",
    "Digital payment options expanded for farmers",
    "New logistics partners join eNAM platform"
  ];

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Top Bar */}
      <div className={`${isDarkMode ? 'bg-[#0d3c10]' : 'bg-[#1b5e20]'} text-white py-1 px-4`}>
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex space-x-4 text-xs">
            <a href="#" className="hover:underline">Skip to Main Content</a>
            <span>|</span>
            <a href="#" className="hover:underline">Screen Reader Access</a>
          </div>
          <div className="flex space-x-4 text-xs items-center">
            <a href="#" className="hover:underline">A- A A+</a>
            <span>|</span>
            <a href="#" className="hover:underline">English</a>
            <span>|</span>
            <a href="#" className="hover:underline">हिंदी</a>
            <span>|</span>
            <button 
              onClick={toggleTheme} 
              className="flex items-center hover:text-gray-300 transition-colors"
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-md transition-all ${isScrolled ? 'py-2' : 'py-4'}`}>
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center">
                <div className="mr-2">
                  <img src="https://www.enam.gov.in/web/assets/images/enam-logo-sm.jpg" alt="eNAM Logo" className="h-12" />
                </div>
                <div>
                  <h1 className={`${isDarkMode ? 'text-[#4caf50]' : 'text-[#1b5e20]'} font-bold text-xl md:text-2xl`}>eNAM</h1>
                  <p className={`${isDarkMode ? 'text-[#81c784]' : 'text-[#388e3c]'} text-xs md:text-sm`}>National Agriculture Market</p>
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#" className={`${isDarkMode ? 'text-gray-200 hover:text-[#81c784]' : 'text-[#1b5e20] hover:text-[#388e3c]'} font-medium`}>Home</a>
              <div className="relative group">
                <button className={`flex items-center ${isDarkMode ? 'text-gray-200 hover:text-[#81c784]' : 'text-[#1b5e20] hover:text-[#388e3c]'} font-medium`}>
                  About <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className={`absolute left-0 mt-2 w-48 ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg rounded-md overflow-hidden z-20 transform scale-0 group-hover:scale-100 transition-transform origin-top`}>
                  <a href="#" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-[#81c784]' : 'text-gray-700 hover:bg-[#e8f5e9] hover:text-[#1b5e20]'}`}>About eNAM</a>
                  <a href="#" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-[#81c784]' : 'text-gray-700 hover:bg-[#e8f5e9] hover:text-[#1b5e20]'}`}>Vision & Mission</a>
                  <a href="#" className={`block px-4 py-2 text-sm ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-[#81c784]' : 'text-gray-700 hover:bg-[#e8f5e9] hover:text-[#1b5e20]'}`}>Objectives</a>
                </div>
              </div>
              <a href="#" className={`${isDarkMode ? 'text-gray-200 hover:text-[#81c784]' : 'text-[#1b5e20] hover:text-[#388e3c]'} font-medium`}>Services</a>
              <a href="#" className={`${isDarkMode ? 'text-gray-200 hover:text-[#81c784]' : 'text-[#1b5e20] hover:text-[#388e3c]'} font-medium`}>Stakeholders</a>
              <a href="#" className={`${isDarkMode ? 'text-gray-200 hover:text-[#81c784]' : 'text-[#1b5e20] hover:text-[#388e3c]'} font-medium`}>Resources</a>
              <a href="#" className={`${isDarkMode ? 'text-gray-200 hover:text-[#81c784]' : 'text-[#1b5e20] hover:text-[#388e3c]'} font-medium`}>Contact</a>
              <button className={`${isDarkMode ? 'bg-[#0d3c10] hover:bg-[#1b5e20]' : 'bg-[#1b5e20] hover:bg-[#388e3c]'} text-white px-4 py-2 rounded-md transition-colors`}>Login</button>
            </nav>

            {/* Mobile menu button */}
            <button 
              className={`md:hidden ${isDarkMode ? 'text-gray-200' : 'text-[#1b5e20]'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={`md:hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg absolute z-40 w-full`}>
          <div className="px-4 py-2 space-y-1">
            <a href="#" className={`block px-3 py-2 ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-[#81c784]' : 'text-[#1b5e20] hover:bg-[#e8f5e9]'} font-medium rounded-md`}>Home</a>
            <div>
              <button className={`flex items-center w-full px-3 py-2 ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-[#81c784]' : 'text-[#1b5e20] hover:bg-[#e8f5e9]'} font-medium rounded-md`}>
                About <ChevronRight className="ml-auto h-5 w-5" />
              </button>
              <div className="pl-4">
                <a href="#" className={`block px-3 py-2 ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-[#81c784]' : 'text-[#1b5e20] hover:bg-[#e8f5e9]'} font-medium rounded-md`}>About eNAM</a>
                <a href="#" className={`block px-3 py-2 ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-[#81c784]' : 'text-[#1b5e20] hover:bg-[#e8f5e9]'} font-medium rounded-md`}>Vision & Mission</a>
                <a href="#" className={`block px-3 py-2 ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-[#81c784]' : 'text-[#1b5e20] hover:bg-[#e8f5e9]'} font-medium rounded-md`}>Objectives</a>
              </div>
            </div>
            <a href="#" className={`block px-3 py-2 ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-[#81c784]' : 'text-[#1b5e20] hover:bg-[#e8f5e9]'} font-medium rounded-md`}>Services</a>
            <a href="#" className={`block px-3 py-2 ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-[#81c784]' : 'text-[#1b5e20] hover:bg-[#e8f5e9]'} font-medium rounded-md`}>Stakeholders</a>
            <a href="#" className={`block px-3 py-2 ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-[#81c784]' : 'text-[#1b5e20] hover:bg-[#e8f5e9]'} font-medium rounded-md`}>Resources</a>
            <a href="#" className={`block px-3 py-2 ${isDarkMode ? 'text-gray-200 hover:bg-gray-700 hover:text-[#81c784]' : 'text-[#1b5e20] hover:bg-[#e8f5e9]'} font-medium rounded-md`}>Contact</a>
            <button className={`w-full ${isDarkMode ? 'bg-[#0d3c10] hover:bg-[#1b5e20]' : 'bg-[#1b5e20] hover:bg-[#388e3c]'} text-white px-4 py-2 rounded-md transition-colors`}>Login</button>
          </div>
        </div>
      )}

      {/* Banner Slider */}
      <div className="relative h-[400px] md:h-[500px] overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10"></div>
            <img 
              src={slide.image} 
              alt={slide.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 text-white text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">{slide.title}</h2>
              <p className="text-xl md:text-2xl mb-8">{slide.subtitle}</p>
              <div className="flex space-x-4">
                <button className={`${isDarkMode ? 'bg-[#0d3c10] hover:bg-[#1b5e20]' : 'bg-[#1b5e20] hover:bg-[#388e3c]'} text-white px-6 py-3 rounded-md transition-colors`}>
                  Learn More
                </button>
                <button className={`bg-white text-[#1b5e20] px-6 py-3 rounded-md ${isDarkMode ? 'hover:bg-gray-200' : 'hover:bg-gray-100'} transition-colors`}>
                  Register Now
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* Slider indicators */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-30">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#e8f5e9]'} py-6`}>
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Search for commodities, mandis, services..." 
                className={`flex-grow px-4 py-3 rounded-l-md border-2 ${isDarkMode ? 'border-[#0d3c10] bg-gray-700 text-white placeholder-gray-400' : 'border-[#1b5e20] bg-white text-gray-900'} focus:outline-none`}
              />
              <button className={`${isDarkMode ? 'bg-[#0d3c10] hover:bg-[#1b5e20]' : 'bg-[#1b5e20] hover:bg-[#388e3c]'} text-white px-4 py-3 rounded-r-md transition-colors`}>
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl md:text-3xl font-bold text-center ${isDarkMode ? 'text-[#4caf50]' : 'text-[#1b5e20]'} mb-8`}>Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {quickLinks.map((link, index) => (
              <a 
                key={index}
                href="#" 
                className={`flex flex-col items-center p-6 ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-[#f1f8e9] hover:bg-[#e8f5e9]'} rounded-lg transition-colors`}
              >
                <span className="text-3xl mb-2">{link.icon}</span>
                <span className={`text-lg font-medium ${isDarkMode ? 'text-[#4caf50]' : 'text-[#1b5e20]'}`}>{link.title}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className={`py-12 ${isDarkMode ? 'bg-[#0d3c10]' : 'bg-[#1b5e20]'} text-white`}>
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">eNAM Statistics</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {statistics.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-3xl md:text-4xl font-bold mb-2">{stat.number}</p>
                <p className="text-lg">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className={`text-2xl md:text-3xl font-bold ${isDarkMode ? 'text-[#4caf50]' : 'text-[#1b5e20]'} mb-4`}>About eNAM</h2>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4`}>
                National Agriculture Market (eNAM) is a pan-India electronic trading portal which networks the existing APMC mandis to create a unified national market for agricultural commodities.
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                Small Farmers Agribusiness Consortium (SFAC) is the lead agency for implementing eNAM under the aegis of Ministry of Agriculture and Farmers' Welfare, Government of India.
              </p>
              <button className={`flex items-center ${isDarkMode ? 'bg-[#0d3c10] hover:bg-[#1b5e20]' : 'bg-[#1b5e20] hover:bg-[#388e3c]'} text-white px-6 py-3 rounded-md transition-colors`}>
                Read More <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Farmers at market" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/* News & Updates */}
      <div className={`py-12 ${isDarkMode ? 'bg-gray-800' : 'bg-[#f1f8e9]'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl md:text-3xl font-bold text-center ${isDarkMode ? 'text-[#4caf50]' : 'text-[#1b5e20]'} mb-8`}>News & Updates</h2>
          <div className={`${isDarkMode ? 'bg-gray-900' : 'bg-white'} rounded-lg shadow-md p-6`}>
            <ul className="space-y-4">
              {newsItems.map((news, index) => (
                <li key={index} className={`border-b ${isDarkMode ? 'border-gray-700' : 'border-gray-200'} pb-4 last:border-0 last:pb-0`}>
                  <a href="#" className={`flex items-start ${isDarkMode ? 'hover:text-[#81c784]' : 'hover:text-[#1b5e20]'}`}>
                    <ChevronRight className={`h-5 w-5 ${isDarkMode ? 'text-[#4caf50]' : 'text-[#1b5e20]'} mt-0.5 mr-2 flex-shrink-0`} />
                    <span>{news}</span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-center">
              <a href="#" className={`inline-flex items-center ${isDarkMode ? 'text-[#4caf50]' : 'text-[#1b5e20]'} font-medium hover:underline`}>
                View All News <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Resources */}
      <div className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="container mx-auto px-4">
          <h2 className={`text-2xl md:text-3xl font-bold text-center ${isDarkMode ? 'text-[#4caf50]' : 'text-[#1b5e20]'} mb-8`}>Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#f1f8e9]'} rounded-lg p-6 shadow-md`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-[#4caf50]' : 'text-[#1b5e20]'} mb-4`}>Downloads</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-[#81c784]' : 'text-gray-700 hover:text-[#1b5e20]'}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    User Manuals
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-[#81c784]' : 'text-gray-700 hover:text-[#1b5e20]'}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Guidelines
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-[#81c784]' : 'text-gray-700 hover:text-[#1b5e20]'}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Reports
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#f1f8e9]'} rounded-lg p-6 shadow-md`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-[#4caf50]' : 'text-[#1b5e20]'} mb-4`}>Media</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-[#81c784]' : 'text-gray-700 hover:text-[#1b5e20]'}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Photo Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-[#81c784]' : 'text-gray-700 hover:text-[#1b5e20]'}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Video Gallery
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-[#81c784]' : 'text-gray-700 hover:text-[#1b5e20]'}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Press Releases
                  </a>
                </li>
              </ul>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800' : 'bg-[#f1f8e9]'} rounded-lg p-6 shadow-md`}>
              <h3 className={`text-xl font-bold ${isDarkMode ? 'text-[#4caf50]' : 'text-[#1b5e20]'} mb-4`}>Help</h3>
              <ul className="space-y-3">
                <li>
                  <a href="#" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-[#81c784]' : 'text-gray-700 hover:text-[#1b5e20]'}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-[#81c784]' : 'text-gray-700 hover:text-[#1b5e20]'}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Helpdesk
                  </a>
                </li>
                <li>
                  <a href="#" className={`flex items-center ${isDarkMode ? 'text-gray-300 hover:text-[#81c784]' : 'text-gray-700 hover:text-[#1b5e20]'}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Contact Support
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={`${isDarkMode ? 'bg-[#0d3c10]' : 'bg-[#1b5e20]'} text-white`}>
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {/* eNAM Overview Section */}
            <div className="md:col-span-2">
              <h3 className="text-xl font-bold mb-4">eNAM Overview</h3>
              <div className={`${isDarkMode ? 'bg-[#072508]' : 'bg-[#0d3c10]'} p-4 rounded-lg mb-4`}>
                <h4 className="font-bold mb-2">Our Vision</h4>
                <p className="text-sm mb-4">To promote uniformity in agriculture marketing by streamlining procedures across integrated markets, removing information asymmetry between buyers and sellers and promoting real-time price discovery based on actual demand and supply.</p>
                
                <h4 className="font-bold mb-2">Our Mission</h4>
                <p className="text-sm">To integrate markets through a common online market platform to facilitate pan-India trade in agricultural commodities, providing better price discovery through transparent auction process based on quality of produce along with timely online payment.</p>
              </div>
              <p className="text-sm">
                eNAM is revolutionizing agricultural markets by ensuring better price discovery for farmers, bringing transparency to market transactions, and promoting farming as a sustainable and profitable activity.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">About eNAM</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">About Us</a></li>
                <li><a href="#" className="hover:underline">Vision & Mission</a></li>
                <li><a href="#" className="hover:underline">Objectives</a></li>
                <li><a href="#" className="hover:underline">Team</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Stakeholders</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:underline">Farmers</a></li>
                <li><a href="#" className="hover:underline">Traders</a></li>
                <li><a href="#" className="hover:underline">FPOs</a></li>
                <li><a href="#" className="hover:underline">Mandis</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-gray-300">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Youtube className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-gray-300">
                  <Instagram className="h-6 w-6" />
                </a>
              </div>
              <p className="text-sm">
                Small Farmers Agribusiness Consortium<br />
                NCUI Auditorium Building,<br />
                5th Floor, 3, Siri Institutional Area,<br />
                August Kranti Marg, New Delhi - 110016
              </p>
            </div>
          </div>
        </div>
        <div className={`${isDarkMode ? 'bg-[#072508]' : 'bg-[#0d3c10]'} py-4`}>
          <div className="container mx-auto px-4 text-center text-sm">
            <p>© 2025 National Agriculture Market. All Rights Reserved.</p>
            <div className="mt-2 flex justify-center space-x-4">
              <a href="#" className="hover:underline">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:underline">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:underline">Disclaimer</a>
              <span>|</span>
              <a href="#" className="hover:underline">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;