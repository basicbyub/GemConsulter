import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Building2, Menu, X } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuLinks, setMenuLinks] = useState([]); // Store menu links from API

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Fetch navbar links from the backend
    fetch(`${process.env.REACT_APP_API_URL}/api/navbar`)
      .then((response) => response.json())
      .then((data) => setMenuLinks(data.links))
      .catch((error) => console.error('Error fetching navbar data:', error));
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Push content down to avoid being hidden under Navbar */}
      <div className="h-[40px]"></div>

      <nav className={`fixed w-full top-[40px] z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <Building2 size={32} className="text-orange-500 mr-2" />
              <div>
                <span className="text-2xl font-bold text-orange-500">GeM</span>
                <span className={`text-2xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}> Consultancy</span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {menuLinks.length > 0 ? (
                menuLinks.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative px-2 py-1 transition-colors ${
                      isActive(item.path)
                        ? 'text-orange-500'
                        : `${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-orange-500`
                    }`}
                  >
                    {item.label}
                    {isActive(item.path) && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-orange-500 rounded-full"></span>}
                  </Link>
                ))
              ) : (
                <p className="text-gray-500">Loading...</p>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 slide-in">
              <div className="container mx-auto px-4">
                {menuLinks.length > 0 ? (
                  menuLinks.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`block py-3 ${isActive(item.path) ? 'text-orange-500' : 'text-gray-700 hover:text-orange-500'}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))
                ) : (
                  <p className="text-gray-500">Loading...</p>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
