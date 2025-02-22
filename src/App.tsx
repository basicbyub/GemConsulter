import React from 'react';
import { Building2, Mail, Phone, Linkedin, Youtube, MessageSquare } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <a href="tel:+919971447722" className="flex items-center hover:text-orange-400 transition-colors">
              <Phone size={16} className="mr-2" />
              +91 - 99 71 44 77 22
            </a>
            <a href="mailto:info@gemconsultancy.in" className="flex items-center hover:text-orange-400 transition-colors">
              <Mail size={16} className="mr-2" />
              info@gemconsultancy.in
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-orange-400 transition-colors"><Youtube size={16} /></a>
            <a href="#" className="hover:text-orange-400 transition-colors"><Linkedin size={16} /></a>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Building2 size={32} className="text-orange-500 mr-2" />
              <div>
                <span className="text-2xl font-bold text-orange-500">GeM</span>
                <span className="text-2xl font-bold text-gray-700"> Consultancy</span>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">About Us</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Services</a>
              <a href="#" className="text-gray-700 hover:text-orange-500 transition-colors">Contact Us</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="container mx-auto px-4 py-24 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                GEM CONSULTANCY SERVICES
              </h1>
              <p className="text-xl text-blue-100">
                Become a Registered Seller on GeM Government e-Marketplace
              </p>
              <div className="flex space-x-4">
                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg transition-colors">
                  Get Started
                </button>
                <button className="border-2 border-white hover:bg-white hover:text-blue-900 text-white px-8 py-3 rounded-lg transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Business consulting" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
            <p className="text-gray-600 mt-4">We provide comprehensive GeM registration and consultation services</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expert Guidance",
                description: "Get professional assistance from our experienced team throughout the registration process"
              },
              {
                title: "Quick Process",
                description: "Complete your GeM registration efficiently with our streamlined approach"
              },
              {
                title: "24/7 Support",
                description: "Access to round-the-clock customer support for all your queries"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-orange-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation</p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
            <MessageSquare className="mr-2" />
            Contact Us Now
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">Leading consultancy services for GeM registration and support.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">GeM Registration</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Consultation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  +91 - 99 71 44 77 22
                </li>
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  info@gemconsultancy.in
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} GeM Consultancy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;