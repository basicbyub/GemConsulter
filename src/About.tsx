// import React from 'react';
// import { Award, Users, Target, Clock } from 'lucide-react';

// const About: React.FC = () => {
//   return (
//     <div className="py-16">
//       {/* Hero Section */}
//       <div className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <div className="max-w-3xl mx-auto text-center">
//             <h1 className="text-4xl font-bold text-gray-900 mb-6">About GeM Consultancy</h1>
//             <p className="text-xl text-gray-600">
//               We are dedicated to helping businesses navigate the Government e-Marketplace (GeM) 
//               with expert guidance and comprehensive support services.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Mission & Vision */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid md:grid-cols-2 gap-12">
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
//             <p className="text-gray-600">
//               To simplify the GeM registration process and empower businesses to participate 
//               effectively in government procurement opportunities through expert guidance and support.
//             </p>
//           </div>
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
//             <p className="text-gray-600">
//               To become the most trusted partner for businesses seeking to establish and 
//               grow their presence on the Government e-Marketplace platform.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* Key Features */}
//       <div className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               {
//                 icon: <Award className="w-12 h-12 text-orange-500" />,
//                 title: "Expert Team",
//                 description: "Experienced professionals dedicated to your success"
//               },
//               {
//                 icon: <Users className="w-12 h-12 text-orange-500" />,
//                 title: "Client Focus",
//                 description: "Personalized attention to meet your specific needs"
//               },
//               {
//                 icon: <Target className="w-12 h-12 text-orange-500" />,
//                 title: "Result Oriented",
//                 description: "Committed to achieving the best outcomes"
//               },
//               {
//                 icon: <Clock className="w-12 h-12 text-orange-500" />,
//                 title: "Quick Process",
//                 description: "Efficient and timely service delivery"
//               }
//             ].map((feature, index) => (
//               <div key={index} className="text-center p-6">
//                 <div className="flex justify-center mb-4">{feature.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
//                 <p className="text-gray-600">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Team Section */}
//       <div className="container mx-auto px-4 py-16">
//         <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Expert Team</h2>
//         <div className="grid md:grid-cols-3 gap-8">
//           {[
//             {
//               name: "Himanshu Bansal",
//               position: "Senior Consultant",
//               image: "https://raw.githubusercontent.com/basicbyub/GemConsulter/refs/heads/main/himanshu.jpg"

//             },
//             {
//               name: "Uttam Bansal",
//               position: "Registration Specialist",
//               image: "https://raw.githubusercontent.com/basicbyub/GemConsulter/refs/heads/main/uttam.JPG"
//             },
//             {
//               name: "Chirag Bansal",
//               position: "Technical Expert",
//               image: "https://raw.githubusercontent.com/basicbyub/GemConsulter/refs/heads/main/chirag.jpg"
//             }
//           ].map((member, index) => (
//             <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
//               <div className="p-6">
//                 <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
//                 <p className="text-gray-600">{member.position}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from 'react';
import { Award, Users, Target, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16">

      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              About Our Consultancy
            </h1>
            <p className="text-xl text-gray-600">
              We are an independent consultancy specializing in Vendor Registration,
              OEM Registration, Product Catalogue Management, Bidding Assistance,
              Direct Purchase Support, and Compliance Services for businesses
              participating in online procurement platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              Our mission is to simplify vendor onboarding by providing
              professional guidance for registrations, OEM approvals,
              catalogue management, bidding, direct purchases, and
              compliance requirements, enabling businesses to participate
              confidently in procurement opportunities.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              Our vision is to become a trusted consultancy for businesses by
              delivering reliable registration, procurement, documentation,
              and compliance support while helping clients achieve sustainable
              business growth.
            </p>
          </div>

        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-orange-500" />,
                title: "Experienced Professionals",
                description: "Expert guidance for vendor registration, OEM approvals, and procurement processes."
              },
              {
                icon: <Users className="w-12 h-12 text-orange-500" />,
                title: "Client-Focused Support",
                description: "Personalized solutions tailored to your business requirements."
              },
              {
                icon: <Target className="w-12 h-12 text-orange-500" />,
                title: "End-to-End Services",
                description: "From registration and catalogue management to bidding and compliance assistance."
              },
              {
                icon: <Clock className="w-12 h-12 text-orange-500" />,
                title: "Quick Turnaround",
                description: "Timely support to help complete your business processes efficiently."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Our Team
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Himanshu Bansal",
              position: "Business Consultant",
              image: "https://raw.githubusercontent.com/basicbyub/GemConsulter/refs/heads/main/himanshu.jpg"
            },
            {
              name: "Uttam Bansal",
              position: "Vendor Registration Specialist",
              image: "https://raw.githubusercontent.com/basicbyub/GemConsulter/refs/heads/main/uttam.JPG"
            },
            {
              name: "Chirag Bansal",
              position: "Technical Support Executive",
              image: "https://raw.githubusercontent.com/basicbyub/GemConsulter/refs/heads/main/chirag.jpg"
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">
                  {member.name}
                </h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Legal Disclaimer */}
      <div className="bg-gray-100 py-6">
        <div className="container mx-auto px-4 text-center text-gray-600 text-sm">
          <p>
            <strong>Disclaimer:</strong> We are an independent consultancy
            providing advisory and support services for vendor registration,
            OEM registration, product catalogue management, bidding,
            direct purchase, and compliance. We are not affiliated with,
            endorsed by, or officially associated with any government
            department, authority, or procurement portal. All trademarks
            and platform names belong to their respective owners.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;