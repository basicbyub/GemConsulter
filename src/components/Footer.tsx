// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Phone, Mail } from 'lucide-react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">About Us</h3>
//             <p className="text-gray-400">Leading consultancy services for GeM registration and support.</p>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link to="/" className="text-gray-400 hover:text-white transition-colors">Home</Link></li>
//               <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Services</Link></li>
//               <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
//               <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4">Services</h3>
//             <ul className="space-y-2">
//               <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">GeM Registration</Link></li>
//               <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Consultation</Link></li>
//               <li><Link to="/services" className="text-gray-400 hover:text-white transition-colors">Support</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="text-xl font-bold mb-4">Contact Info</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li className="flex items-center">
//                 <Phone size={16} className="mr-2" />
//                 +91 - 77 19 55 38 27
//               </li>
//               <li className="flex items-center">
//                 <Mail size={16} className="mr-2" />
//                 gemconsulters@gmail.com
//               </li>
//             </ul>
//           </div>
//         </div>
//         <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} GeM Consultancy. All rights reserved.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              We are an independent business consultancy providing professional
              guidance for vendor onboarding, digital procurement processes,
              business compliance, and documentation support.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Vendor Registration Assistance</li>
              <li className="text-gray-400">Business Compliance Support</li>
              <li className="text-gray-400">Consultation & Guidance</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center">
                <Phone size={16} className="mr-2" />
                +91 77195 53827
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2" />
                gemconsulters@gmail.com
              </li>
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-xs">
          <p className="mb-2">
            <strong>Disclaimer:</strong> We are an independent business consultancy
            offering advisory and support services. We are not affiliated with,
            endorsed by, or officially associated with any government department,
            public organization, or official procurement platform.
          </p>

          <div className="flex justify-center gap-4 mt-2">
            <Link to="/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms & Conditions</Link>
          </div>

          <p className="mt-4">
            © {new Date().getFullYear()} Independent Business Consultancy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
