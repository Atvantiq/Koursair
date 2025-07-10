"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, User, Menu, ChevronDown, X } from 'lucide-react';

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    {
      label: 'About Us',
      href: '/about'
    },
    {
      label: 'Destinations',
      href: '/destinations',
    },
    {
      label: 'Groups',
      href: '/groups',
    //   submenu: [
    //     { label: 'Tours', href: '#' },
    //     { label: 'Tours List', href: '#' },
    //     { label: 'Tours Details', href: '#' }
    //   ]
    },
    {
      label: 'Your Bookings',
      href: '/yourbookings',
    },
    {
      label: 'Support',
      href: '/support',
    }
  ];

  const handleMouseEnter = (index: number) => {
    setActiveDropdown(index);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const isCurrentPath = (href: string) => {
    return pathname === href;
  };

  return (
    <>
      
      <nav className="relative z-50 bg-white">
        <div className="relative">
          <div className="max-w-[1200px] mx-auto px-4">
            <div className="relative">
              <div className="flex items-center justify-between">
                {/* Left Section */}
                <div className="flex items-center">
                  {/* Logo */}
                  <div className='py-8 mr-0 xl:mr-36'>
                    <Link href="/" className="flex items-center">
                      <div className="flex items-center">
                        <span className="ml-2 text-2xl font-bold" style={{ color: '#c49c7a' }}>Koursair</span>
                      </div>
                    </Link>
                  </div>

                  {/* Main Menu */}
                  <div className="hidden xl:block">
                    <ul className="flex items-center justify-center m-0 p-0 list-none">
                      {navItems.map((item, index) => (
                        <li
                          key={index}
                          className="relative py-8"
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={handleMouseLeave}
                        >
                          <Link
                            href={item.href}
                            className={`nav-link flex items-center px-5 text-base font-medium transition-colors duration-300 hover:text-[#c49c7a] text-[#6b5d52] ${
                              isCurrentPath(item.href) ? 'active text-[#c49c7a]' : ''
                            }`}
                          >
                            {item.label}
                            {item.submenu && (
                              <ChevronDown className="ml-1 w-3 h-3" />
                            )}
                          </Link>

                          {/* Dropdown Menu */}
                          {item.submenu && activeDropdown === index && (
                            <div className="absolute left-0 top-full mt-0 w-60 bg-white shadow-lg rounded-lg overflow-hidden">
                              <ul className="py-2">
                                {item.submenu.map((subItem, subIndex) => (
                                  <li key={subIndex} className="relative">
                                    <Link
                                      href={subItem.href}
                                      className={`block px-6 py-3 text-sm transition-colors duration-300 hover:bg-[#faf5ee] hover:text-[#c49c7a] text-[#6b5d52] ${subIndex > 0 ? 'border-t border-gray-100' : ''}`}
                                    >
                                      {subItem.label}
                                    </Link>
                                    {/* Nested Submenu */}
                                    {subItem.submenu && (
                                      <ul className="absolute left-full top-0 w-60 bg-white shadow-lg rounded-lg overflow-hidden ml-1">
                                        {subItem.submenu.map((nestedItem: NavSubItem, nestedIndex: number) => (
                                          <li key={nestedIndex}>
                                            <Link
                                              href={nestedItem.href}
                                              className={`block px-6 py-3 text-sm transition-colors duration-300 hover:bg-[#faf5ee] hover:text-[#c49c7a] text-[#6b5d52] ${
                                                nestedIndex > 0 ? 'border-t border-gray-100' : ''
                                              }`}
                                            >
                                              {nestedItem.label}
                                            </Link>
                                          </li>
                                        ))}
                                      </ul>
                                    )}
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
                    className="xl:hidden text-[#c49c7a] text-xl ml-5"
                  >
                    {mobileMenuOpen ? <X /> : <Menu />}
                  </button>
                </div>

                {/* Right Section */}
                <div className="flex items-center py-6">
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#faf5ee] flex items-center justify-center text-[#6b5d52] text-xl transition-all duration-300 hover:bg-[#a0927e] hover:text-white"
                  >
                    <Search className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="w-12 h-12 rounded-full bg-[#faf5ee] flex items-center justify-center text-[#6b5d52] text-xl ml-2.5 transition-all duration-300 hover:bg-[#a0927e] hover:text-white"
                  >
                    <User className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50">
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
                  {item.submenu && (
                    <ul className="bg-gray-50">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <Link
                            href={subItem.href}
                            className="block px-10 py-2 text-sm text-[#6b5d52]"
                          >
                            {subItem.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}