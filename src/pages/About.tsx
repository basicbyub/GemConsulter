import React from 'react';
import { Award, Users, Target, Clock } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="py-16">
      {/* Hero Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About GeM Consultancy</h1>
            <p className="text-xl text-gray-600">
              We are dedicated to helping businesses navigate the Government e-Marketplace (GeM) 
              with expert guidance and comprehensive support services.
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
              To simplify the GeM registration process and empower businesses to participate 
              effectively in government procurement opportunities through expert guidance and support.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To become the most trusted partner for businesses seeking to establish and 
              grow their presence on the Government e-Marketplace platform.
            </p>
          </div>
        </div>
      </div>

      {/* Key Features */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose Us</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-12 h-12 text-orange-500" />,
                title: "Expert Team",
                description: "Experienced professionals dedicated to your success"
              },
              {
                icon: <Users className="w-12 h-12 text-orange-500" />,
                title: "Client Focus",
                description: "Personalized attention to meet your specific needs"
              },
              {
                icon: <Target className="w-12 h-12 text-orange-500" />,
                title: "Result Oriented",
                description: "Committed to achieving the best outcomes"
              },
              {
                icon: <Clock className="w-12 h-12 text-orange-500" />,
                title: "Quick Process",
                description: "Efficient and timely service delivery"
              }
            ].map((feature, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Expert Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Uttam Bansal",
              position: "Senior Consultant",
              image: "/uttam.jpg"

            },
            {
              name: "Himanshu Bansal",
              position: "Registration Specialist",
              image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            },
            {
              name: "Pooja Bansal",
              position: "Technical Expert",
              image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
            }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                <p className="text-gray-600">{member.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;