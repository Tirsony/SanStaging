import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-20 md:pt-24 lg:pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Your Tech Solutions Partner
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Discover cutting-edge technology solutions and professional services
              tailored to your needs.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#products"
                className="btn-primary"
              >
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a 
                href="#services"
                className="btn-secondary"
              >
                Our Services
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80"
              alt="Modern workspace with computer"
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}