import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">SanComputers</h3>
            <p className="text-gray-400">
              Your trusted partner for all technology needs since 2010.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white">Products</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Office Supplies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Data Recovery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Hardware Repair</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-400">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-blue-400">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} SanComputers. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}