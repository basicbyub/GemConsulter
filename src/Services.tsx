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
              Independent consultancy services providing professional guidance
              for vendor onboarding, business documentation, compliance, and
              digital procurement processes.
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
              title: "Vendor Registration Assistance",
              description:
                "Professional guidance to help businesses prepare documentation, complete registration procedures, and organize vendor profiles efficiently.",
              features: [
                "Document guidance",
                "Registration assistance",
                "Vendor profile setup",
                "Business category selection"
              ]
            },
            {
              icon: <Headphones className="w-12 h-12 text-orange-500" />,
              title: "Business Support & Consultation",
              description:
                "Ongoing assistance to help businesses manage documentation, registration activities, and operational requirements with confidence.",
              features: [
                "Process guidance",
                "Profile update assistance",
                "Technical support guidance",
                "Query resolution"
              ]
            },
            {
              icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
              title: "Compliance Assistance",
              description:
                "Support in reviewing business documents and understanding compliance requirements to ensure smooth onboarding and operations.",
              features: [
                "Document review support",
                "Compliance checklists",
                "Regulatory guidance",
                "Important update notifications"
              ]
            },
            {
              icon: <BarChart className="w-12 h-12 text-orange-500" />,
              title: "Business Growth Support",
              description:
                "Advisory services designed to help businesses strengthen their profiles, improve operational readiness, and identify growth opportunities.",
              features: [
                "Profile improvement guidance",
                "Performance insights",
                "Best practice recommendations",
                "Business growth advisory"
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
              <p className="text-gray-600 mb-6">{service.description}</p>
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
            Need Professional Guidance?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Get in touch with us to learn how our independent consultancy
            services can support your business goals and simplify important
            business processes.
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
            <strong>Disclaimer:</strong> We are an independent business
            consultancy providing advisory and support services. We are not
            affiliated with, endorsed by, or officially associated with any
            government department, public authority, or official procurement
            platform.
          </p>
        </div>
      </div>

    </div>
  );
};

export default Services;