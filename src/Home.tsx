import React from 'react';
import { MessageSquare, CheckCircle, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <div className="relative hero-gradient text-white min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-700/90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center mix-blend-overlay"></div>
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="mt-10 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 slide-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Transform Your Business with GeM
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Your trusted partner for seamless GeM registration and government e-marketplace success. Join thousands of successful businesses today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full transition-all transform hover:scale-105 inline-flex items-center justify-center">
                  <MessageSquare className="mr-2" size={20} />
                  Get Started Now
                </Link>
                <Link to="/about" className="glass-card px-8 py-4 rounded-full hover:bg-white/20 transition-all transform hover:scale-105 text-center">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden md:block animate-float">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Business consulting" 
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "8000+", label: "Clients Served" },
              { number: "98%", label: "Success Rate" },
              { number: "24/7", label: "Support" },
              { number: "8+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 feature-card">
                <h3 className="text-4xl font-bold text-blue-900 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive GeM registration and consultation services with unmatched expertise
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <CheckCircle className="w-12 h-12 text-orange-500" />,
                title: "Expert Guidance",
                description: "Get professional assistance from our experienced team throughout the registration process"
              },
              {
                icon: <Users className="w-12 h-12 text-orange-500" />,
                title: "Dedicated Support",
                description: "Complete your GeM registration efficiently with our streamlined approach"
              },
              {
                icon: <Clock className="w-12 h-12 text-orange-500" />,
                title: "24/7 Assistance",
                description: "Access to round-the-clock customer support for all your queries"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all feature-card">
                <div className="bg-orange-50 w-20 h-20 rounded-2xl flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

 {/* Hidden Locations Section (Service Areas) */}
 <section className="service-areas">
        <div className="hidden-locations">
          Andhra Pradesh, Arunachal Pradesh, Assam, Bihar, Chhattisgarh, Goa, Gujarat, Haryana, Himachal Pradesh,
          Jharkhand, Karnataka, Kerala, Madhya Pradesh, Maharashtra, Manipur, Meghalaya, Mizoram, Nagaland, Odisha,
          Punjab, Rajasthan, Sikkim, Tamil Nadu, Telangana, Tripura, Uttar Pradesh, Uttarakhand, West Bengal,
          Andaman and Nicobar Islands, Chandigarh, Dadra and Nagar Haveli and Daman and Diu, Delhi, Jammu and Kashmir, 
          Ladakh, Lakshadweep, Puducherry near me
        </div>
      </section>

      {/* CTA Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 skew-y-3 transform origin-top-right"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of successful businesses on GeM. Contact us today for a free consultation
            </p>
            <Link 
              to="/contact" 
              className="bg-white text-orange-500 px-10 py-4 rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 inline-flex items-center text-lg font-semibold"
            >
              <MessageSquare className="mr-2" size={24} />
              Contact Us Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;