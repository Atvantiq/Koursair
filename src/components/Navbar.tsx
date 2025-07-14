"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, User, Menu, ChevronDown, Twitter,X, Facebook, Instagram } from 'lucide-react';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showSignupModal, setShowSignupModal] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signupEmail, setSignupEmail] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [signupName, setSignupName] = useState('');
  const pathname = usePathname();

  type NavSubItem = {
    label: string;
    href: string;
    submenu?: NavSubItem[];
  };

  type NavItem = {
    label: string;
    href: string;
    submenu?: NavSubItem[];
  };

  const navItems: NavItem[] = [
    { label: 'Home', href: '/home' },
    { label: 'About Us', href: '/about' },
    { label: 'Destinations', href: '/destinations' },
    { label: 'Groups', href: '/groups' },
    { label: 'Your Bookings', href: '/yourbookings' },
    { label: 'Support', href: '/support' }
  ];

  const handleMouseEnter = (index: number) => setActiveDropdown(index);
  const handleMouseLeave = () => setActiveDropdown(null);
  const isCurrentPath = (href: string) => pathname === href;

  const handleLoginSubmit = () => {
    console.log('Login:', { email, password });
    // Add login logic here
  };

  const handleSignupSubmit = () => {
    console.log('Signup:', { signupName, signupEmail, signupPassword });
    // Add signup logic here
  };

  const handleForgotPasswordSubmit = () => { 
    console.log('Forgot Password:', { email });
    // Add forgot password logic here
  }

  const switchToSignup = () => {
    setShowLoginModal(false);
    setShowForgotPasswordModal(false);
    setShowSignupModal(true);
  };

  const switchToLogin = () => {
    setShowSignupModal(false);
    setShowForgotPasswordModal(false);
    setShowLoginModal(true);
  };

  const switchToForgotPassword = () => {
    setShowLoginModal(false);
    setShowForgotPasswordModal(true);
  }

  return (
    <>
      <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent">
        <div className="relative">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="flex items-center justify-between">
              {/* Left Section */}
              <div className="flex items-center">
                {/* Logo */}
                <div className="py-4 mr-0 xl:mr-36">
                  <Link href="/" className="flex items-center">
                    <span className="ml-2 text-2xl font-bold text-white">Koursair</span>
                  </Link>
                </div>

                {/* Desktop Menu */}
                <div className="hidden xl:block">
                  <ul className="flex items-center justify-center m-0 p-0 list-none">
                    {navItems.map((item, index) => (
                      <li
                        key={index}
                        className="relative py-4"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <Link
                          href={item.href}
                          className={`nav-link flex items-center px-5 text-base font-medium transition-colors duration-300 hover:text-[#c49c7a] text-white ${
                            isCurrentPath(item.href) ? 'text-[#c49c7a]' : ''
                          }`}
                        >
                          {item.label}
                          {item.submenu && <ChevronDown className="ml-1 w-3 h-3" />}
                        </Link>

                        {/* Dropdown */}
                        {item.submenu && activeDropdown === index && (
                          <div className="absolute left-0 top-full mt-0 w-60 bg-white shadow-lg rounded-lg overflow-hidden">
                            <ul className="py-2">
                              {item.submenu.map((subItem, subIndex) => (
                                <li key={subIndex} className="relative">
                                  <Link
                                    href={subItem.href}
                                    className={`block px-6 py-3 text-sm transition-colors duration-300 hover:bg-[#faf5ee] hover:text-[#c49c7a] text-[#6b5d52] ${
                                      subIndex > 0 ? 'border-t border-gray-100' : ''
                                    }`}
                                  >
                                    {subItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="xl:hidden text-white text-xl ml-5"
                >
                  {mobileMenuOpen ? <X /> : <Menu />}
                </button>
              </div>

              {/* Right Icons */}
              <div className="flex items-center py-6">
                <a
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xl transition-all duration-300 hover:bg-white/30"
                >
                  <Search className="w-5 h-5" />
                </a>
                <button
                  onClick={() => setShowLoginModal(true)}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-xl ml-2.5 transition-all duration-300 hover:bg-white/30"
                >
                  <User className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg z-50">
            <ul className="py-4">
              {navItems.map((item, index) => (
                <li key={index} className="border-b border-gray-100">
                  <Link
                    href={item.href}
                    className={`block px-6 py-3 text-base font-medium ${
                      isCurrentPath(item.href) ? 'text-[#c49c7a]' : 'text-[#6b5d52]'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      {showLoginModal && (
        <>
          {/* Modal Overlay */}
          <div 
            className="fixed inset-0 backdrop-blur-sm z-[100] flex items-center justify-center"
            onClick={() => setShowLoginModal(false)}
          >
            {/* Modal Content */}
            <div 
              className="relative bg-white rounded-xl shadow-2xl w-[90%] max-w-[900px] h-[600px] flex overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowLoginModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Left Side - Features */}
              <div className="hidden md:flex md:w-1/2 bg-cover bg-center relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
                
                <div className="relative z-10 p-12 text-white flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-12">Sign up/Login now to</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Lock Flight Prices & Pay Later</h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Book Hotels @ ₹0</h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Get 3X refund, if your waitlisted train doesn&apos;t get confirmed</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="max-w-sm mx-auto w-full">
                  <h2 className="text-xl font-medium text-gray-700 mb-2 text-center">
                    Sign in to continue your travel journey
                  </h2>
                  
                  <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#c49c7a' }}>
                    Login
                  </h3>

                  {/* Login Form */}
                  <div className="space-y-4 mb-6">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-400 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49c7a] transition-all"
                      onKeyPress={(e) => e.key === 'Enter' && handleLoginSubmit()}
                    />
                    
                    <input
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-400 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49c7a] transition-all"
                      onKeyPress={(e) => e.key === 'Enter' && handleLoginSubmit()}
                    />
                    
                    <button
                      onClick={handleLoginSubmit}
                      className="w-full py-3 bg-[#c49c7a] text-white font-semibold rounded-lg hover:bg-[#a0927e] transition-colors duration-300"
                    >
                      CONTINUE
                    </button>
                  </div>

                  {/* Links */}
                  <div className="text-center mb-6">
                    <button onClick={switchToForgotPassword} className="text-sm text-[#c49c7a] hover:underline">
                      Forgot Username or Password?
                    </button>
                    <span className="text-gray-400 mx-2">|</span>
                    <button 
                      onClick={switchToSignup}
                      className="text-sm text-[#c49c7a] hover:underline"
                    >
                      Create New Account
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="flex justify-center space-x-4">
                    <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-black transition-all transform hover:scale-110">
                      <Twitter className="w-5 h-5" />
                    </button>
                    
                    <button className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-[#1564C0] transition-all transform hover:scale-110">
                      <Facebook className="w-5 h-5" />
                    </button>
                    
                    <button className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all transform hover:scale-110">
                      <Instagram className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Terms */}
                  <p className="text-xs text-gray-500 text-center mt-8">
                    By proceeding, you agree to Koursair&apos;s{' '}
                    <a href="#" className="text-[#c49c7a] hover:underline">Privacy Policy</a>,{' '}
                    <a href="#" className="text-[#c49c7a] hover:underline">User Agreement</a> and{' '}
                    <a href="#" className="text-[#c49c7a] hover:underline">T&Cs</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Signup Modal */}
      {showSignupModal && (
        <>
          {/* Modal Overlay */}
          <div 
            className="fixed inset-0 backdrop-blur-sm z-[100] flex items-center justify-center"
            onClick={() => setShowSignupModal(false)}
          >
            {/* Modal Content */}
            <div 
              className="relative bg-white rounded-xl shadow-2xl w-[90%] max-w-[900px] h-[600px] flex overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowSignupModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Left Side - Features */}
              <div className="hidden md:flex md:w-1/2 bg-cover bg-center relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2035')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
                
                <div className="relative z-10 p-12 text-white flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-12">Start Your Journey Today</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Exclusive Member Discounts</h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">24/7 Travel Support</h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Earn Rewards on Every Trip</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Signup Form */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="max-w-sm mx-auto w-full">
                  <p className="text-xl font-medium text-gray-700 mb-2 text-center">
                    Join Koursair & start your adventures
                  </p>
                  
                  <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#c49c7a' }}>
                    Create Account
                  </h3>

                  {/* Signup Form */}
                  <div className="space-y-3 mb-4">
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={signupName}
                      onChange={(e) => setSignupName(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-400 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49c7a] transition-all"
                      onKeyPress={(e) => e.key === 'Enter' && handleSignupSubmit()}
                    />
                    
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={signupEmail}
                      onChange={(e) => setSignupEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-400 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49c7a] transition-all"
                      onKeyPress={(e) => e.key === 'Enter' && handleSignupSubmit()}
                    />
                    
                    <input
                      type="password"
                      placeholder="Create Password"
                      value={signupPassword}
                      onChange={(e) => setSignupPassword(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-400 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49c7a] transition-all"
                      onKeyPress={(e) => e.key === 'Enter' && handleSignupSubmit()}
                    />
                    
                    <button
                      onClick={handleSignupSubmit}
                      className="w-full py-2 bg-[#c49c7a] text-white font-semibold rounded-lg hover:bg-[#a0927e] transition-colors duration-300"
                    >
                      Sign Up
                    </button>
                  </div>

                  {/* Links */}
                  <div className="text-center mb-4">
                    <span className="text-sm text-gray-600">Already have an account? </span>
                    <button 
                      onClick={switchToLogin}
                      className="text-sm text-[#c49c7a] hover:underline"
                    >
                      Sign In
                    </button>
                  </div>

                  {/* Divider */}
                  <div className="relative mb-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-4 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  {/* Social Login */}
                  <div className="flex justify-center space-x-4">
                    <button className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center hover:bg-black transition-all transform hover:scale-110">
                      <Twitter className="w-5 h-5" />
                    </button>
                    
                    <button className="w-12 h-12 bg-[#1877F2] text-white rounded-full flex items-center justify-center hover:bg-[#1564C0] transition-all transform hover:scale-110">
                      <Facebook className="w-5 h-5" />
                    </button>
                    
                    <button className="w-12 h-12 bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all transform hover:scale-110">
                      <Instagram className="w-5 h-5" />
                    </button>
                  </div>

                  {/* Terms */}
                  <p className="text-xs text-gray-500 text-center mt-8">
                    By proceeding, you agree to Koursair&apos;s{' '}
                    <a href="#" className="text-[#c49c7a] hover:underline">Privacy Policy</a>,{' '}
                    <a href="#" className="text-[#c49c7a] hover:underline">User Agreement</a> and{' '}
                    <a href="#" className="text-[#c49c7a] hover:underline">T&Cs</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Forgot Password Modal */}
      {showForgotPasswordModal && (
        <>
          {/* Modal Overlay */}
          <div 
            className="fixed inset-0 backdrop-blur-sm z-[100] flex items-center justify-center"
            onClick={() => setShowLoginModal(false)}
          >
            {/* Modal Content */}
            <div 
              className="relative bg-white rounded-xl shadow-2xl w-[90%] max-w-[900px] h-[600px] flex overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setShowForgotPasswordModal(false)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors shadow-md"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>

              {/* Left Side - Features */}
              <div className="hidden md:flex md:w-1/2 bg-cover bg-center relative overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-black/30" />
                
                <div className="relative z-10 p-12 text-white flex flex-col justify-center">
                  <h2 className="text-3xl font-bold mb-12">Sign up/Login now to</h2>
                  
                  <div className="space-y-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Lock Flight Prices & Pay Later</h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Book Hotels @ ₹0</h3>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg">Get 3X refund, if your waitlisted train doesn&apos;t get confirmed</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Login Form */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="max-w-sm mx-auto w-full">
                  <h2 className="text-xl font-medium text-gray-700 mb-2 text-center">
                    Enter your email address and we&apos;ll send you a link to reset your password
                  </h2>
                  
                  <h3 className="text-3xl font-bold mb-8 text-center" style={{ color: '#c49c7a' }}>
                    Reset Password
                  </h3>

                  {/* Login Form */}
                  <div className="space-y-4 mb-6">
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 border border-gray-400 text-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#c49c7a] transition-all"
                      onKeyPress={(e) => e.key === 'Enter' && handleForgotPasswordSubmit()}
                    />
                    
                    
                    <button
                      onClick={handleForgotPasswordSubmit}
                      className="w-full py-3 bg-[#c49c7a] text-white font-semibold rounded-lg hover:bg-[#a0927e] transition-colors duration-300"
                    >
                      SEND RESET LINK
                    </button>
                  </div>

                  {/* Links */}
                  <div className="text-center mb-6">
                    <div className="text-sm text-[#a0927eda] font-extralight">Remember your password? </div>
                    <button 
                      onClick={switchToLogin} className="text-sm text-[#c49c7a] underline pb-6 hover:cursor-pointer">
                      Back to Sign In
                    </button>
                    <div className="text-sm text-[#a0927eda] font-extralight">Don&apos;t have an account?</div>
                    <button 
                      onClick={switchToSignup}
                      className="text-sm text-[#c49c7a] underline hover:cursor-pointer"
                    >
                      Create New Account
                    </button>
                  </div>

                  {/* Terms */}
                  <p className="text-xs text-gray-500 text-center mt-8">
                    By proceeding, you agree to Koursair&apos;s{' '}
                    <a href="#" className="text-[#c49c7a] hover:underline">Privacy Policy</a>,{' '}
                    <a href="#" className="text-[#c49c7a] hover:underline">User Agreement</a> and{' '}
                    <a href="#" className="text-[#c49c7a] hover:underline">T&Cs</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {/* Styles for nav-link underline */}
      <style jsx>{`
        .nav-link {
          position: relative;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          background-color: #c49c7a;
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.3s ease;
        }

        .nav-link:hover::after,
        .nav-link.active::after {
          transform: scaleX(1);
          transform-origin: left;
        }
      `}</style>
    </>
  );
}