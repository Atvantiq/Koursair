"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Facebook, Twitter, Instagram, Smartphone, Mail,  } from "lucide-react";

export default function FooterSection() {
  const [email, setEmail] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const handleNewsletterSubmit = () => {
    console.log("Newsletter signup:", email);
    setEmail("");
  };

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');
        
        .footer-link {
          transition: color 0.3s ease;
        }
        
        .footer-link:hover {
          color: #c49c7a;
        }
        
        .social-icon {
          transition: all 0.3s ease;
        }
        
        .social-icon:hover {
          transform: translateY(-3px);
          color: #c49c7a;
        }
        
        /* Custom select styling */
        select {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23999' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
          background-position: right 0.5rem center;
          background-repeat: no-repeat;
          background-size: 1.2em 1.2em;
          padding-right: 2rem;
        }
      `}</style>

      <footer className="bg-[#1a2332] text-white">
        <div className="max-w-[1400px] mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-semibold">KOURSAIR</span>
              </div>
              
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Mea nibh meis philosophia eu. Duis legimus efficiantur ea sea. Id 
                placerat tacimates definitionem sea, prima quidam vim no. Duo 
                nobis persecuti cu. Nihil facilisi indoctum an vix, ut delectus 
                expetendis vis.
              </p>

              <div className="pt-4">
                <p className="text-sm font-medium mb-3">FOLLOW US</p>
                <div className="flex space-x-3">
                  <a href="#" className="social-icon text-gray-400 hover:text-white">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="social-icon text-gray-400 hover:text-white">
                    <Twitter size={20} />
                  </a>
                  <a href="#" className="social-icon text-gray-400 hover:text-white">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="social-icon text-gray-400 hover:text-white">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Useful links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="footer-link text-gray-400 text-sm hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-gray-400 text-sm hover:text-white">
                    Login
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-gray-400 text-sm hover:text-white">
                    Register
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-gray-400 text-sm hover:text-white">
                    News & Events
                  </a>
                </li>
                <li>
                  <a href="#" className="footer-link text-gray-400 text-sm hover:text-white">
                    Contacts
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact with Us</h3>
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Smartphone size={18} />
                  <span className="text-sm">+ 61 23 8093 3400</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail size={18} />
                  <span className="text-sm">info@koursair.com</span>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-medium mb-3">Newsletter</h4>
                <div className="flex">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-[#243141] text-white text-sm rounded-l focus:outline-none focus:ring-1 focus:ring-[#c49c7a]"
                    onKeyPress={(e) => e.key === 'Enter' && handleNewsletterSubmit()}
                  />
                  <button
                    onClick={handleNewsletterSubmit}
                    className="px-6 py-2 bg-[#c49c7a] text-white font-medium text-sm rounded-r hover:bg-[#a0927e] transition-colors"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Language and Payment */}
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <select
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                    className="bg-transparent text-gray-400 text-sm border border-gray-600 rounded px-3 py-1 focus:outline-none focus:border-[#c49c7a] appearance-none cursor-pointer"
                  >
                    <option value="English" className="bg-[#1a2332]">English</option>
                    <option value="Spanish" className="bg-[#1a2332]">Spanish</option>
                    <option value="French" className="bg-[#1a2332]">French</option>
                  </select>
                  <span className="text-gray-600 text-sm">US Dollars</span>
                </div>

                {/* Payment Methods */}
                <div className="flex items-center space-x-3">
                  <div className="bg-white rounded px-2 py-1">
                    <Image width={50} height={300} src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" alt="Visa" className="h-4" />
                  </div>
                  <div className="bg-white rounded px-2 py-1">
                    <Image width={50} height={300} src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" alt="Mastercard" className="h-4" />
                  </div>
                  <div className="bg-white rounded px-2 py-1">
                    <Image width={50} height={300} src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" className="h-4" />
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="footer-link hover:text-white">
                  Terms and conditions
                </a>
                <span className="text-gray-600">|</span>
                <a href="#" className="footer-link hover:text-white">
                  Privacy
                </a>
                <span className="text-gray-600">|</span>
                <span>© Koursair</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}