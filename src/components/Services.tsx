import React from 'react';
import { 
  Printer, 
  Globe, 
  Database, 
  Wrench,
  Shield
} from 'lucide-react';

const services = [
  {
    icon: Printer,
    title: "Office Supplies",
    description: "Complete range of office equipment and supplies including printers, paper, ink cartridges, and office furniture. We ensure your workspace stays productive with quality products.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom website development, e-commerce solutions, and web applications. Our expert team creates responsive, modern websites that drive business growth.",
  },
  {
    icon: Database,
    title: "Backup & Data Recovery",
    description: "Professional data backup solutions and recovery services. We protect your valuable information and provide quick recovery options in case of data loss.",
  },
  {
    icon: Wrench,
    title: "Hardware Repair",
    description: "Expert computer and laptop repair services. Our certified technicians can diagnose and fix hardware issues, upgrade components, and optimize performance.",
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions including antivirus, firewall setup, and security audits. We help protect your business from cyber threats.",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
              <button className="mt-4 text-blue-600 font-medium hover:text-blue-700">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}