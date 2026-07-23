// import React from 'react';
// import { CheckCircle, FileCheck, Headphones, BarChart } from 'lucide-react';
// import { Link } from 'react-router-dom';

// const Services: React.FC = () => {
//   return (
//     <div className="py-16">
//       {/* Hero Section */}
//       <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl font-bold mb-6">Our Services</h1>
//             <p className="text-xl">
//               Comprehensive GeM registration and support services to help you succeed 
//               on the Government e-Marketplace platform.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Main Services */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 gap-8">
//           {[
//             {
//               icon: <FileCheck className="w-12 h-12 text-orange-500" />,
//               title: "GeM Registration",
//               description: "Complete assistance in registering your business on the GeM portal with all necessary documentation and verification.",
//               features: [
//                 "Document preparation",
//                 "Profile creation",
//                 "Verification support",
//                 "Category selection"
//               ]
//             },
//             {
//               icon: <Headphones className="w-12 h-12 text-orange-500" />,
//               title: "Ongoing Support",
//               description: "Continuous support and guidance for managing your GeM presence effectively.",
//               features: [
//                 "Bid participation guidance",
//                 "Profile management",
//                 "Technical support",
//                 "Query resolution"
//               ]
//             },
//             {
//               icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
//               title: "Compliance Services",
//               description: "Ensure your business meets all GeM requirements and stays compliant with regulations.",
//               features: [
//                 "Documentation review",
//                 "Compliance checks",
//                 "Regular updates",
//                 "Policy guidance"
//               ]
//             },
//             {
//               icon: <BarChart className="w-12 h-12 text-orange-500" />,
//               title: "Performance Optimization",
//               description: "Optimize your GeM presence for better visibility and success rate.",
//               features: [
//                 "Profile optimization",
//                 "Performance analysis",
//                 "Strategy development",
//                 "Growth planning"
//               ]
//             }
//           ].map((service, index) => (
//             <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
//               <div className="flex items-center mb-6">
//                 {service.icon}
//                 <h3 className="text-2xl font-bold text-gray-900 ml-4">{service.title}</h3>
//               </div>
//               <p className="text-gray-600 mb-6">{service.description}</p>
//               <ul className="space-y-3">
//                 {service.features.map((feature, fIndex) => (
//                   <li key={fIndex} className="flex items-center text-gray-600">
//                     <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* CTA Section */}
//       <div className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
//           <p className="text-xl text-gray-600 mb-8">
//             Contact us today to learn more about how we can help you succeed on GeM.
//           </p>
//           <Link
//             to="/contact"
//             className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors inline-block"
//           >
//             Contact Us Now
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';
import { CheckCircle, FileCheck, Headphones, BarChart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services: React.FC = () => {
  return (
    <div className="py-16">

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Our Services</h1>
            <p className="text-xl">
              We provide professional consultancy services for Vendor Registration,
              OEM Registration, Product Catalogue Management, Bid Participation,
              Direct Purchase, Order Processing, Documentation, Compliance,
              and complete procurement support.
            </p>
          </div>
        </div>
      </div>

      {/* Main Services */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <FileCheck className="w-12 h-12 text-orange-500" />,
              title: "Vendor & OEM Registration",
              description:
                "Complete assistance with Vendor Registration, OEM Registration, profile creation, document verification, and account setup to help businesses start participating in procurement opportunities.",
              features: [
                "Vendor Registration",
                "OEM Registration",
                "Document Verification",
                "Profile Setup & Updates"
              ]
            },
            {
              icon: <Headphones className="w-12 h-12 text-orange-500" />,
              title: "Catalogue & Procurement Support",
              description:
                "Professional support for product catalogue creation, product listing, catalogue updates, bid participation, direct purchase, and order-related activities.",
              features: [
                "Product Catalogue Upload",
                "Product Listing & Updates",
                "Bid Participation Support",
                "Direct Purchase Assistance"
              ]
            },
            {
              icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
              title: "Documentation & Compliance",
              description:
                "Expert guidance for preparing business documents, maintaining compliance, resolving profile issues, and ensuring all required information is properly managed.",
              features: [
                "Business Documentation",
                "Compliance Assistance",
                "Profile Issue Resolution",
                "Regular Profile Maintenance"
              ]
            },
            {
              icon: <BarChart className="w-12 h-12 text-orange-500" />,
              title: "Business Growth & Advisory",
              description:
                "Strategic consultancy to help businesses improve procurement performance, manage orders efficiently, and identify new business opportunities.",
              features: [
                "Procurement Consultation",
                "Order Processing Guidance",
                "Performance Improvement",
                "Business Growth Advisory"
              ]
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                {service.icon}
                <h3 className="text-2xl font-bold text-gray-900 ml-4">
                  {service.title}
                </h3>
              </div>

              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Need Expert Procurement Assistance?
          </h2>

          <p className="text-xl text-gray-600 mb-8">
            Whether you need Vendor Registration, OEM Registration, Product
            Catalogue Management, Bid Participation, Direct Purchase,
            Documentation, or Compliance support, our experienced consultants
            are here to help.
          </p>

          <Link
            to="/contact"
            className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors inline-block"
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>
            <strong>Disclaimer:</strong> We are an independent consultancy
            providing advisory and support services for Vendor Registration,
            OEM Registration, Product Catalogue Management, Bid Participation,
            Direct Purchase, Documentation, and procurement-related processes.
            We are not affiliated with, endorsed by, or officially associated
            with any government department, authority, or procurement portal.
            All trademarks and platform names belong to their respective owners.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Services;