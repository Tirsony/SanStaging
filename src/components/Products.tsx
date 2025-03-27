import React, { useState, useRef } from 'react';
import { Search, ChevronLeft, ChevronRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Pro Laptop X1",
    category: "Laptops",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&q=80",
    description: "High-performance laptop for professionals"
  },
  {
    id: 2,
    name: "Gaming Monitor G27",
    category: "Monitors",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80",
    description: "27-inch 4K gaming monitor"
  },
  {
    id: 3,
    name: "Mechanical Keyboard K1",
    category: "Peripherals",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&q=80",
    description: "RGB mechanical gaming keyboard"
  },
  // Add more products as needed
];

export default function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const sliderRef = useRef<HTMLDivElement>(null);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Featured Products
        </h2>

        <div className="max-w-md mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <div
            ref={sliderRef}
            className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory hide-scrollbar"
          >
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="flex-none w-[300px] snap-center"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-sm text-blue-600 font-medium">
                      {product.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-1">{product.name}</h3>
                    <p className="text-gray-600 mt-2">{product.description}</p>
                    <div className="mt-4 flex items-center justify-between">
                      <span className="text-2xl font-bold">${product.price}</span>
                      <button className="btn-primary text-sm">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}