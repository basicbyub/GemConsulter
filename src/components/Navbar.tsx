import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40); // Adjusted scroll threshold
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔹 Fetch API Call
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://gemconsultersbackend.onrender.com'); // Replace with your API endpoint
        const data = await response.json();
        console.log('Fetched Data:', data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Push content down to avoid being hidden under Navbar */}
      <div className="h-[40px]"></div>

      <nav className={`fixed w-full top-[40px] z-50 transition-all duration-300 ${
    isScrolled ? 'bg-gray-200/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
}`}>

        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <Building2 size={32} className="text-orange-500 mr-2" />
              <div>
                <span className="text-xl sm:text-2xl font-bold text-orange-500">GeM</span>
                <span className={`text-xl sm:text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-gray-800'}`}> Consultancy</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {[
                { path: '/', label: 'Home' },
                { path: '/about', label: 'About Us' },
                { path: '/services', label: 'Services' },
                { path: '/contact', label: 'Contact Us' }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative px-2 py-1 transition-colors ${
                    isActive(item.path)
                      ? 'text-orange-500'
                      : `${isScrolled ? 'text-gray-700' : 'text-gray-800'} hover:text-orange-500`
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>
                  )}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-gray-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 slide-in">
              <div className="container mx-auto px-4">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/about', label: 'About Us' },
                  { path: '/services', label: 'Services' },
                  { path: '/contact', label: 'Contact Us' }
                ].map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`block py-3 ${
                      isActive(item.path)
                        ? 'text-orange-500'
                        : 'text-gray-700 hover:text-orange-500'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
